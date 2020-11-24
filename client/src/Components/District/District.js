import React, { useEffect } from 'react';
import styles from './District.module.css';
import { Link } from 'react-router-dom';

function District() {
  // useEffect(() => {
  //   fetch(
  //     'https://geocode-maps.yandex.ru/1.x/?geocode=30.35971718325475,59.943801810221615&apikey=9c754c0b-5e74-4f99-9f5c-6d43b3daa95d&format=json'
  //   )
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className={styles.boxMapWrapper}>
      <div className={styles.boxMap}>
        <div className={styles.map}>
          <Link
            className={styles.testLink}
            to="/map/:60.01782388533916,30.184311442516837"
          >
            <div className={styles.mapItem1}>
              <span className={styles.district}>Приморский</span>
            </div>
          </Link>
          <Link
            className={styles.testLink}
            to="/map/:59.96679275244407,30.28764753161611"
          >
            <div className={styles.mapItem2}>
              <span className={styles.district}>Петроградский</span>
            </div>
          </Link>
          <Link className={styles.testLink} to="/map/:59.94153469,30.24667669">

            <div className={styles.mapItem3} onClick={null}>
              <span className={styles.district}>Василеостровский</span>
            </div>
          </Link>
          <Link
            className={styles.testLink}
            to="/map/:59.93628113088142,30.35416631518544"
          >
            <div className={styles.mapItem4}>
              <span className={styles.district}>Центральный</span>
            </div>
          </Link>
          <Link
            className={styles.testLink}
            to="/map/:59.91641957007944,30.297346399413943"
          >
            <div className={styles.mapItem5}>
              <span className={styles.district}>Адмиралтейский</span>
            </div>
          </Link>
          <div className={styles.mapItem6}>
            <span className={styles.district}>Кировский</span>
          </div>
          <div className={styles.mapItem7}>
            <span className={styles.district}>Московский</span>
          </div>
          <div className={styles.mapItem8}>
            <span className={styles.district}>Фрунзенский</span>
          </div>
          <div className={styles.mapItem9}>
            <span className={styles.district}>Невский</span>
          </div>
          <div className={styles.mapItem10}>
            <span className={styles.district}>Красногвардейский</span>
          </div>
          <div className={styles.mapItem11}>
            <span className={styles.district}>Калининский</span>
          </div>
          <div className={styles.mapItem12}>
            <span className={styles.district}>Выборгский</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default District;
