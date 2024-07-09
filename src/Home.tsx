import Map from "./Map";
import Header from "./Header";
import fixLeafletIcons from "./fixLeafletIcons";
import "./App.css";
import MapContext from "./MapContext";
import Footer from "./Footer";

fixLeafletIcons();

export default function Home() {
  return (
    <div className="App">
      <MapContext>
        <main>
          <Map></Map>
        </main>
        <Header className="floating"></Header>
        <Footer className="floating"></Footer>
      </MapContext>
    </div>
  );
}
