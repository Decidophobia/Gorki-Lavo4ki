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
  primorski: [60.01765528144283,30.18463781197782],
  viborgski: [60.05075572433365,30.328757991380666],
  kalininski: [59.99758960674073,30.39412491186616],
  krasnogvardeiski: [59.96481434436298,30.458497928223586],
  nevski: [59.882431665486635,30.464506076416942],
  frunzenski: [59.869672449657564,30.391554641463816],
  moskovski: [59.85188679937314,30.321516799666927],
  kirovski: [59.876231736709144,30.25765876744037],
  admeralteiski: [59.91693929888723,30.296969222762637],
  vasileostrovski: [59.942019824388645,30.2451613408202],
  petrogradski: [59.96749521670879,30.28048973057514],
  centralni: [59.93453043675818,30.35026807401218],
};

function App() {
  localStorage.setItem('allAreaCoord', JSON.stringify(geoCoordsDistrict));
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
