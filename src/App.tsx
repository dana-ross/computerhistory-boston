import React from "react";
import Map from "./Map";
import About from "./About";
import Search from "./Search";
import Config from "./Config";
import fixLeafletIcons from "./fixLeafletIcons";
import "./App.css";

fixLeafletIcons();
const config = new Config();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map zoom={config.defaultZoom} companydata={config.companies} landmarkdata={config.landmarks} institutiondata={config.institutions}></Map>
        <About></About>
        <Search></Search>
      </header>
    </div>
  );
}

export default App;
