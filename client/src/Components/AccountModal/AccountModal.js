import React, { useRef, useState } from "react";
import styles from "./AccountModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchChangeProfileAC } from "../../redux/actionCreators";

function AccountModal(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [urlImage, setUrlImage] = useState("");
  const { account } = useSelector((store) => store);
  const [img, setImg] = useState(account.image);

  const fullName = useRef();
  const fullSurname = useRef();
  const city = useRef();
  const area = useRef();
  const phone = useRef();
  const email = useRef();
  const imgInput = useRef();
  const uploadImage = async (event) => {
    event.preventDefault();
    const files = event.target.files;

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "reactimages");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqau98mqw/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const image = await res.json();
    setUrlImage(image.url);
    setImg(image.url);
  };
  const getDataFromForm = async (event) => {
    event.preventDefault();

    const change = {
      id: account._id,
      image: urlImage,
      fullName: fullName.current.value
        ? fullName.current.value
        : account.fullName,
      fullSurname: fullSurname.current.value
        ? fullSurname.current.value
        : account.fullSurname,
      area: area.current.value ? area.current.value : account.area,
      city: city.current.value ? city.current.value : account.city,
      phone: phone.current.value ? phone.current.value : account.phone,
      email: email.current.value ? email.current.value : account.email,
    };
    await dispatch(fetchChangeProfileAC(change));
    props.closeModal();
  };
  return (
    <>
      <div className={styles.contener}>
        <form onSubmit={getDataFromForm} className={styles.form}>
          <div className={styles.formImg}>
            <img src={img} />
            <input
              onChange={uploadImage}
              type="file"
              name="file"
              placeholder="Загрузите аватарку"
              ref={imgInput}
              className={styles.fileInput}
            />
          </div>
          <div className={styles.editField}>
            <input
              ref={fullName}
              placeholder="Имя"
              placeholder={account.fullName}
              className={styles.imgInput}
            />
            <input
              ref={fullSurname}
              placeholder="Фамилия"
              placeholder={account.fullSurname}
            />
            <input ref={city} placeholder="Город" placeholder={account.city} />
            <input ref={area} placeholder="Район" placeholder={account.area} />
            <input
              ref={phone}
              placeholder="Телефон"
              placeholder={account.phone}
              type="phone"
            />
            <input
              ref={email}
              placeholder="Email"
              placeholder={account.email}
              type="email"
            />
            <button type="submit" className={styles.save}>
              Cохранить
            </button>
          </div>
          <span onClick={props.closeModal} className={styles.closeModal}>
            x
          </span>
        </form>
      </div>
    </>
  );
}

export default AccountModal;
