import Map from "./Map";
import Header from "./Header";
import fixLeafletIcons from "./fixLeafletIcons";
import "./App.css";
import ConfigContext from "./ConfigContext";
import MapContext from "./MapContext";
import Footer from "./Footer";

fixLeafletIcons();

function App() {
  return (
    <div className="App">
      <ConfigContext>
        <MapContext>
          <Map></Map>
          <Header></Header>
          <Footer></Footer>
        </MapContext>
      </ConfigContext>
    </div>
  );
}

export default App;
