import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  Map,
  Placemark,
  Clusterer,
  GeolocationControl,
} from "react-yandex-maps";
import ModalWindow from "../ModalWindow/ModalWindow.js";
import styles from "./Map.module.css";
import Chat from "../Chat/Chat";
import { useDispatch, useSelector} from 'react-redux'
import {fetchGetCordsAC} from '../../redux/actionCreators'
import { useParams } from "react-router-dom";

Modal.setAppElement("#root");

function MapPage({width ='1000px', height='800px'}) {
  //в этом стэйте массив с массивами координат
  const dispatch = useDispatch()
  const [placemark, setPlaceMark] = useState([]);
  const [point, setPoint] = useState([])
   let {coordId} = useParams()


  useEffect(() => {
    setPoint(coordId.replace(/^:/,'').replace(/\s/g,'').split(','))
    dispatch(fetchGetCordsAC())
  }, [])

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const coordForStaticPlacemark = useSelector((store) => store.coords)
  if(point)
  return (
    <>
      <div className={styles.containerWrap}>
        <Map
          width={width}
          height={height}
          defaultState={{
            center: point,
            zoom: 13,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          onClick={(e) => {
            // этот таймаут открывает модальное окно.
            setTimeout(() => {
              return openModal();
            }, 500);
            //в coords прилетает масив с координатами.
            const coords = e.get("coords");
            return setPlaceMark((prev) => [...prev, coords]);
          }}
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {placemark &&
              placemark.map((coordinates, index) => (
                <Placemark
                  onClick={null}
                  key={index}
                  geometry={coordinates}
                  properties={{
                    iconContent: "Грязюка",
                    balloonContentHeader:
                      '<span class="description">Ваша отметка</span>',
                    balloonContentBody: `Туть грязно`,
                  }}
                  options={{
                    // preset: "islands#redStretchyIcon",
                    iconLayout: "default#image",
                    preset: "islands#redStretchyIcon",
                    iconImageHref:
                    //ссылка сломалась, подставили пока ссылку на пнг картинку с марком
                      // "https://psv4.userapi.com/c856220/u8423482/docs/d4/a62869fdf7ee/placemark-06.png?extra=vfLVfiI9KJh8kPP143yaJMZHXyG1-PszB1QCpBhesI3Yo0CcPhYjkihP7JU7lZATowUotK2FMNFhmXsG-_vjU-mo3LtlPD6zBmatW_cmGr4PEIswQDlVTvla69SHqKK2BjWlVuKBSx4ojVHrrw"
                      'https://www.flaticon.com/svg/static/icons/svg/876/876213.svg',
                    iconImageSize: [45, 60],
                    iconImageOffset: [-20, -20],
                  }}
                />
              ))}
              { coordForStaticPlacemark && coordForStaticPlacemark.map((el, index) => (
                 <Placemark
                 key={index}
                  geometry={el.coord[0]}
                  properties={{
                    iconContent: "Грязюка",
                    balloonContentHeader:
                      '<span class="description">Ваша отметка</span>',
                    balloonContentBody: `Туть грязно`,
                  }}
                  options={{
                    // preset: "islands#redStretchyIcon",
                    iconLayout: "default#image",
                    preset: "islands#redStretchyIcon",
                    iconImageHref:
                    //ссылка сломалась, подставили пока ссылку на пнг картинку с марком
                      // "https://psv4.userapi.com/c856220/u8423482/docs/d4/a62869fdf7ee/placemark-06.png?extra=vfLVfiI9KJh8kPP143yaJMZHXyG1-PszB1QCpBhesI3Yo0CcPhYjkihP7JU7lZATowUotK2FMNFhmXsG-_vjU-mo3LtlPD6zBmatW_cmGr4PEIswQDlVTvla69SHqKK2BjWlVuKBSx4ojVHrrw"
                      'https://www.flaticon.com/svg/static/icons/svg/876/876213.svg',
                    iconImageSize: [45, 60],
                    iconImageOffset: [-20, -20],
                  }}
                /> ))}
          </Clusterer>
          <GeolocationControl options={{ float: "left" }} />
        </Map>
        <Chat />
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.modalWind}
        >
          <ModalWindow placemark={placemark} closeModal={closeModal} />
        </Modal>
      </div>
    </>
  );
}

export default MapPage;
