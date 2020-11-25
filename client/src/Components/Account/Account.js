import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserAC } from "../../redux/actionCreators";
import style from "./Account.module.css";
import AccountMap from '../AccountMap/AccountMap'
import AccountEdit from '../AccountEdit/AccountEdit'

function Account(props) {
  let user = JSON.parse(localStorage.getItem("name"));
  let allArea = JSON.parse(localStorage.getItem("allAreaCoord"));
  const [coordinates, setCoordinates] = useState([59.95006023462294, 30.23918528022138])
  function shareCoordinates(areaCoordinates){
      setCoordinates(()=>areaCoordinates)
      // console.log(coordinates);
  }
 
  const { account } = useSelector((store) => store);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetUserAC({ user }));
  }, []);
  return (
    <div className={style.container}>
      <div className={style.profil}>
        <div className={style.profilImg}>
          <img src={account.image} />
        </div>
        <div className={style.profInfo}>
            <div className={style.profilTitle}>
            <div className={style.profilTitleName}>{/*{account.name}*/} Александр Желтоногов</div>
            <div className={style.profilTitleStatus}>{account.status ? account.status: "дизайнер"}</div>
        </div>
                  <div className={style.profilData}>
                              <div className={style.email}>
                                <div className={style.title}>Email</div>
                                <div className={style.text}>{account.email}</div>
                            </div>
                            <div className={style.phone}>
                                <div className={style.title}>Phone</div>
                                <div className={style.text}>{account.phone}</div>
                            </div>
                            <div className={style.city}>
                                <div className={style.title}>City</div>
                                <div className={style.text}>{account.city} Санкт-Петербург</div>
                            </div>
                            <div className={style.area}>
                                <div className={style.title}>Area</div>
                                <div className={style.text}>{account.area} Приморский</div>
                            </div>
                  </div>
        </div>


      </div>
      <div className={style.maps}>
        <div className={style.map}><AccountMap coordinates={coordinates} setCoordinates={setCoordinates}/></div>
        <div className={style.mapArea}>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.admeralteiski)}>Адмиралтейский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.moskovski)}>Московский</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Девяткино</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Васька</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Петроградка</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Девяткино</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Васька</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Петроградка</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Девяткино</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Васька</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Петроградка</div>
          <div className={style.link} onClick={()=>shareCoordinates()}>Девяткино</div>
        </div>
      </div>
      <AccountEdit/>
    </div>
  );
}

export default Account;
