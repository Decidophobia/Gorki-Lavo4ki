import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
  Map,
  Placemark,
  Clusterer,
  GeolocationControl,
} from 'react-yandex-maps';
import ModalWindow from '../ModalWindow/ModalWindow.js';
import styles from './Map.module.css';
import Chat from '../Chat/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCordsAC } from '../../redux/actionCreators';
import { useParams } from 'react-router-dom';

Modal.setAppElement('#root');

async function fetchOnGeoCod(url, setFunc) {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return setFunc(
      result.response.GeoObjectCollection.featureMember[0].GeoObject
    );
  } catch (error) {
    
  }
}

function MapPage() {
  //в этом стэйте массив с массивами координат
  const dispatch = useDispatch();
  const [placemark, setPlaceMark] = useState([]);
  const [address, setAdress] = useState(null);
  const [point, setPoint] = useState([]);
  const [deletePlacemark, setDeletePlacemark] = useState('')
  let { coordId } = useParams();
  const coordForStaticPlacemark = useSelector((store) => store.coords);

 const fethRemove = (el)=> {
    fetch('/map', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(el),
  })
    .then((res) => res.json())
    .then((result) => setDeletePlacemark(result));
}

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setPoint(coordId.replace(/^:/, '').replace(/\s/g, '').split(','));
  }, [coordId])

  useEffect(() => {
    dispatch(fetchGetCordsAC());
  }, [placemark, deletePlacemark]);

  return (
    <>
      <div className={styles.containerWrap}>
        <Map
          width={'1000px'}
          height={'800px'}
          defaultState={{
            center: point,
            zoom: 13,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          onClick={(e) => {
            // этот таймаут открывает модальное окно.
            setTimeout(() => {
              return openModal();
            }, 500);
            //в coords прилетает масив с координатами.
            const coords = e.get('coords');
            fetchOnGeoCod(
              `https://geocode-maps.yandex.ru/1.x/?apikey=9c754c0b-5e74-4f99-9f5c-6d43b3daa95d&format=json&geocode=${coords[1]},${coords[0]}`,
              setAdress
            );
            return setPlaceMark((prev) => [coords]);
          }}
        >
          {/* <Clusterer
            options={{
              preset: 'islands#invertedVioletClusterIcons',
              groupByCoordinates: false,
            }}
          > */}
            {placemark &&
              placemark.map((coordinates, index) => (
                <Placemark
                  onClick={null}
                  key={index}
                  geometry={coordinates}
                  properties={{
                    balloonContentHeader:
                      '<span class="description">Ваша отметка</span>',
                    balloonContentBody: `
                      <div>
                        <span> После обновления появится Ваш проект </span>
                      </div>`,
                  }}
                  options={{
                    // preset: "islands#redStretchyIcon",
                    iconLayout: 'default#image',
                    iconImageHref: 'https://www.flaticon.com/svg/static/icons/svg/876/876213.svg',
                    iconImageSize: [45, 60],
                    iconImageOffset: [-20, -20],
                  }}
                />
              ))} 
            {coordForStaticPlacemark &&
              coordForStaticPlacemark.map((el, index) => (
                <Placemark
                onClick={null}
                 onContextmenu={()=> {
                   alert('Точно хотите удалить ?')
                  return fethRemove(el)
                 }}
                  key={index}
                  geometry={el.coord[0]}
                  properties={{
                    balloonContentHeader: `<span class="description">${el.address}</span>`,
                    balloonContentBody: `<span class="description">${el.description}</span>
                    <img src="${el.photo}" class="myclass" style="width: 50%; heigh: 35%"/>
                    <p>*Что бы удалить проект, кликните правой кнопкой мыши по отметки Вашего проекта</p>`
                  }}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref:'http://localhost:3000/place.svg',
                    iconImageSize: [60, 70],
                    iconImageOffset: [-20, -20],
                    shadow:true
                  }}
                />
              ))}
          {/* </Clusterer> */}
          <GeolocationControl options={{ float: 'left' }} />
        </Map>
        {/* <Chat /> */}
      </div> 
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.modalWind}
        >
          <ModalWindow
            placemark={placemark}
            closeModal={closeModal}
            address={address}
          />
        </Modal>
      </div>
    </>
  );
}

export default MapPage;
