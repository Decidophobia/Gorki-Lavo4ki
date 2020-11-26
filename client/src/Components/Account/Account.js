import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserAC } from "../../redux/actionCreators";
import style from "./Account.module.css";
import AccountMap from '../AccountMap/AccountMap'
import AccountEdit from '../AccountEdit/AccountEdit'

function Account(props) {
  let user = JSON.parse(localStorage.getItem("name"));
  let allArea = JSON.parse(localStorage.getItem("allAreaCoord"));
  const [coordinates, setCoordinates] = useState([59.91806799340517,30.304899499999895])
    const { account } = useSelector((store) => store);

  function shareCoordinates(areaCoordinates){
      setCoordinates(()=>areaCoordinates)
  }
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
            <div className={style.profilTitleName}>{account.fullName} {account.fullSurname} </div>
            <div className={style.profilTitleStatus}>{account.status ? account.status: "дизайнер"}</div>
        </div>
                  <div className={style.profilData}>
                            <div className={style.city}>
                                <div className={style.title}>City</div>
                                <div className={style.text}>{account.city}</div>
                            </div>
                              <div className={style.email}>
                                <div className={style.title}>Email</div>
                                <div className={style.text}>{account.email}</div>
                            </div>
                            <div className={style.area}>
                                <div className={style.title}>Area</div>
                                <div className={style.text}>{account.area}</div>
                            </div>
                            <div className={style.phone}>
                                <div className={style.title}>Phone</div>
                                <div className={style.text}>{account.phone}</div>
                            </div>
                  </div>
                    <AccountEdit/>
        </div>


      </div>
      <div className={style.maps}>
        <div className={style.map}><AccountMap coordinates={coordinates}/></div>
        <div className={style.mapArea}>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.primorski)}>Приморский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.viborgski)}>Выборгский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.kalininski)}>Калининский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.krasnogvardeiski)}>Красногвардейский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.nevski)}>Невский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.frunzenski)}>Фрунзенский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.moskovski)}>Московский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.kirovski)}>Кировский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.admeralteiski)}>Адмиралтейский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.vasileostrovski)}>Василиостровский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.petrogradski)}>Петроградский</div>
          <div className={style.link} onClick={()=>shareCoordinates(allArea.centralni)}>Центральный</div>
        </div>
      </div>
    
    </div>
  );
}

export default Account;
