import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserAC } from "../../redux/actionCreators";
import style from "./Account.module.css";
import { YMaps } from "react-yandex-maps";
import MapPage from "../Map/Map";

function Account(props) {
  let user = JSON.parse(localStorage.getItem("name"));
  const { account } = useSelector((store) => store);
  console.log(account);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetUserAC({ user }));
  }, []);
  return (
    <div className={style.container}>
      <div className={style.profil}>
        <div className={style.profilImg}>
          <img src="https://lh3.googleusercontent.com/q2k2Mco2k7wcSz_M3Wo0QL_YoMdXiL8FT1X_tqNN2A7PpAyEfTu9aHEQB6lARDBLXw" />
        </div>
        <div className={style.profilData}>
          <div className={style.profilDataName}>{account.name}</div>
          <div className={style.profilDataPhone}>{account.phone}</div>
          <div className={style.profilDataEmail}>{account.email}</div>
        </div>
      </div>
      <div className={style.map}>
        <YMaps
          query={{
            ns: "use-load-option",
            load:
              "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
          }}
        >
          <MapPage
            width={"500px"}
            height={"500px"}
            center={[59.94160293948906, 30.305847697399653]}
          />
        </YMaps>
        <div className={style.profilData}>
          <div className={style.profilDataEmail}>Васька</div>
          <div className={style.profilDataPhone}>Петроградка</div>
          <div className={style.profilDataEmail}>Девяткино</div>
          <div className={style.profilDataEmail}>Васька</div>
          <div className={style.profilDataPhone}>Петроградка</div>
          <div className={style.profilDataEmail}>Девяткино</div>
        </div>
      </div>
    </div>
  );
}

export default Account;
