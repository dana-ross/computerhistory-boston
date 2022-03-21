import React from "react";
import Map from "./Map";
import About from "./About";
import Search from "./Search";
import fixLeafletIcons from "./fixLeafletIcons";
import "./App.css";
import ConfigContext from "./ConfigContext";

fixLeafletIcons();

function App() {
  return (
    <ConfigContext>
      <div className="App">
        <header className="App-header">
          <Map></Map>
          <About></About>
          <Search></Search>
        </header>
      </div>
    </ConfigContext>
  );
}

export default App;
