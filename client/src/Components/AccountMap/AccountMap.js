import React, { useEffect } from 'react';
import { fetchGetCordsAC } from '../../redux/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import {
  Map,
  Placemark,
  Clusterer,
} from 'react-yandex-maps';

function AccountMap() {
  const coordForStaticPlacemark = useSelector((store) => store.coords);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetCordsAC());
  }, []);

  return (
    <>
      <Map
        width={'790px'}
        height={'500px'}
        defaultState={{
          center: [59.95006023462294, 30.23918528022138],
          zoom: 13,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
      >
        {coordForStaticPlacemark &&
          coordForStaticPlacemark.map((el, index) => (
            <Placemark
              key={index}
              geometry={el.coord[0]}
              properties={{
                // iconContent: "Грязюка",
                balloonContentHeader:
                  `<span class="description">${el.id}</span>`,
                balloonContentBody:  `<span class="description">${el.description}</span>
                <img src="${el.photo}" style="width: 50%; heigh: 35%"/>
                `,
              }}
              options={{
                // preset: "islands#redStretchyIcon",
                iconLayout: 'default#image',
                iconImageHref:
                  //ссылка сломалась, подставили пока ссылку на пнг картинку с марком
                  // "https://psv4.userapi.com/c856220/u8423482/docs/d4/a62869fdf7ee/placemark-06.png?extra=vfLVfiI9KJh8kPP143yaJMZHXyG1-PszB1QCpBhesI3Yo0CcPhYjkihP7JU7lZATowUotK2FMNFhmXsG-_vjU-mo3LtlPD6zBmatW_cmGr4PEIswQDlVTvla69SHqKK2BjWlVuKBSx4ojVHrrw"
                  'http://localhost:3000/place.svg',
                iconImageSize: [45, 60],
                iconImageOffset: [-20, -20],
              }}
            />
          ))}
      </Map>
    </>
  );
}

export default AccountMap;
