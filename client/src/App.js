import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Signup } from "./Components/Signup/Signup";
import { Login } from "./Components/Login/Login";
import Chat from "./Components/Chat/Chat";
import Account from "./Components/Account/Account";
import MapPage from "./Components/Map/Map";
import { YMaps } from "react-yandex-maps";
import District from "./Components/District/District";
import Blog from "./Components/Blog/Blog";
import { useState, useEffect } from "react";

const geoCoordsDistrict = {
  primorski: [60.01239620431274, 30.462827966796766],
  viborgski: [60.05053279677578, 30.61663656054677],
  kalininski: [59.997954621218305, 30.684614465820196],
  krasnogvardeiski: [59.96492152233858, 30.749159143554568],
  nevski: [59.880813437083845, 30.755338953124895],
  frunzenski: [59.87045750679821, 30.677748010742082],
  moskovski: [59.8524995588916, 30.60977010546863],
  kirovski: [59.87667145337892, 30.54522542773426],
  admeralteiski: [59.91772323610016, 30.586424158203016],
  vasileostrovski: [59.94219207685737, 30.530805872070193],
  petrogradski: [59.968105839013326, 30.568571374999895],
  centralni: [59.93263070682042, 30.647535608398332],
};

function App() {
  const [geoDistrict, setGeoDistrict] = useState(geoCoordsDistrict)
  
  return (
    <div style={{ maxHeight: "100vh"}}>

      <Navbar />
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/chat">
          <Chat room={'room1'} />
        </Route>
        <Route path="/chat2">
          <Chat room={'room2'} />
        </Route>
        <Route path="/account">
          <YMaps
            query={{
              ns: 'use-load-option',
              load:
                'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
            }}
          >
            <Account />
          </YMaps>
        </Route>
        <Route path="/map/:coordId">
<div className="wrapperDistrictPage">
  <YMaps
            query={{
              ns: 'use-load-option',
              load:
                'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
            }}
          >
            <MapPage />
          </YMaps>
          <Chat />
</div>
        </Route>
        <Route path="/district">
          <District />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
