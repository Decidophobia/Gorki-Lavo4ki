import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserAC } from "../../redux/actionCreators";
import style from "./Account.module.css";
import AccountMap from '../AccountMap/AccountMap'

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
        <div className={style.profInfo}>
                  <div className={style.profilTitle}>
                  <div className={style.profilTitleName}>{/*{account.name}*/} Александр Желтоногов</div>
                  <div className={style.profilTitleStatus}>{account.status ? account.status: "дизайнер"}</div>
                  {/* <button className={style.profilTitleEdit}>edit</button> */}
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
        <div className={style.map}><AccountMap /></div>
        <div className={style.mapArea}>
          <div className={style.link}>Васька</div>
          <div className={style.link}>Петроградка</div>
          <div className={style.link}>Девяткино</div>
          <div className={style.link}>Васька</div>
          <div className={style.link}>Петроградка</div>
          <div className={style.link}>Девяткино</div>
          <div className={style.link}>Васька</div>
          <div className={style.link}>Петроградка</div>
          <div className={style.link}>Девяткино</div>
          <div className={style.link}>Васька</div>
          <div className={style.link}>Петроградка</div>
          <div className={style.link}>Девяткино</div>
        </div>
      </div>
    </div>
  );
}

export default Account;
