import React, { useState, useRef } from 'react';
import styles from './ModalWindow.module.css';
import { useDispatch } from 'react-redux';
import { fetchAddPostAC } from '../../redux/actionCreators';

const regexp = new RegExp(/\"/gm);

function ModalWindow(props) {
  const dispatch = useDispatch();
  const description = useRef();
  const title = useRef();

  const [loading, setLoad] = useState(false);
  const [urlImg, setUrlImg] = useState('');

  const uploadImage = async (event) => {
    event.preventDefault();
    const files = event.target.files;

    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'reactimages');
    setLoad(true);

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dqau98mqw/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const image = await res.json();
    setUrlImg(image.url);
  };

  const getDataFromForm = async (event) => {
    event.preventDefault();

    const post = {
      authorID: JSON.parse(localStorage.getItem('name')),
      title: title.current.value,
      description: description.current.value,
      photo: urlImg,
      coord: props.placemark,
      address: props.address.description + ', ' + props.address.name,
    };
    await dispatch(fetchAddPostAC(post));
    console.log(post);
    props.closeModal();
  };

  return (
    <>
      <div className={styles.contener}>
        <div className={styles.donwloadform}>
          <form onSubmit={getDataFromForm}>
            <input
              onChange={uploadImage}
              className={styles.inpdonwload}
              type="file"
              name="file"
              placeholder="Загрузите фотографию"
            />
            <button className={styles.close} onClick={props.closeModal}>
              X
            </button>
            <input ref={title} type="text" placeholder="Название проекта" />
            <textarea
              className={styles.textdescription}
              ref={description}
              cols="30"
              rows="5"
              placeholder="Описание проекта..."
            />
            <button type="submit" className={styles.save}>
              Cохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
