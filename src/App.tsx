import Map from "./Map";
import About from "./About";
import fixLeafletIcons from "./fixLeafletIcons";
import "./App.css";
import ConfigContext from "./ConfigContext";
import MapContext from "./MapContext";

fixLeafletIcons();

function App() {
  return (
    <div className="App">
      <ConfigContext>
        <MapContext>
          <Map></Map>
          <About></About>
        </MapContext>
      </ConfigContext>
    </div>
  );
}

export default App;
