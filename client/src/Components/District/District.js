import React from 'react';
import styles from './District.module.css';
import { Link } from 'react-router-dom';

function District() {
  return (
    <div className={styles.boxMapWrapper}>
      <div className={styles.boxMap}>
        <div className={styles.map}>
          <Link
            className={styles.testLink}
            to={`/map/:60.01782388533916,30.184311442516837`}
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
          <Link
            className={styles.testLink}
            to="/map/:59.876231736709144,30.25765876744037"
          >
            <div className={styles.mapItem6}>
              <span className={styles.district}>Кировский</span>
            </div>
          </Link>
          <Link
            className={styles.testLink}
            to="/map/:59.85188679937314,30.321516799666927"
          >
            <div className={styles.mapItem7}>
              <span className={styles.district}>Московский</span>
            </div>
          </Link>
          <Link
            className={styles.testLink}
            to="/map/:59.869672449657564,30.391554641463816"
          >
            <div className={styles.mapItem8}>
              <span className={styles.district}>Фрунзенский</span>
            </div>
          </Link>
          <Link
            className={styles.testLink}
            to="/map/:59.882431665486635,30.464506076416942"
          >
            <div className={styles.mapItem9}>
              <span className={styles.district}>Невский</span>
            </div>
          </Link>
          <Link
            className={styles.testLink}
            to="/map/:59.96481434436298,30.458497928223586"
          >
            <div className={styles.mapItem10}>
              <span className={styles.district}>Красногвардейский</span>
            </div>
          </Link>
          <Link
            className={styles.testLink}
            to="/map/:59.99758960674073,30.39412491186616"
          >
            <div className={styles.mapItem11}>
              <span className={styles.district}>Калининский</span>
            </div>
          </Link>
          <Link
            className={styles.testLink}
            to="/map/:60.05075572433365,30.328757991380666"
          >
            <div className={styles.mapItem12}>
              <span className={styles.district}>Выборгский</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default District;
