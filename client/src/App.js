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

function App() {
  return (
    <div style={{ maxHeight: "100vh", overflow: "hidden" }}>

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
