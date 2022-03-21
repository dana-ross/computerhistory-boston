import React from "react";
import Map from "./Map";
import About from "./About";
import Search from "./Search";
import Config from "./Config";
import fixLeafletIcons from "./fixLeafletIcons";
import MapState from "./MapState";
import "./App.css";

fixLeafletIcons();
const config = new Config();

const mapState = new MapState();
mapState.setCenter(config.center);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map zoom={config.defaultZoom} companydata={config.companies} landmarkdata={config.landmarks} institutiondata={config.institutions} mapState={mapState}></Map>
        <About></About>
        <Search mapState={mapState}></Search>
      </header>
    </div>
  );
}

export default App;
