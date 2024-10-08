import Map from "./Map";
import Header from "./Header";
import fixLeafletIcons from "./fixLeafletIcons";
import "./App.css";
import MapContext from "./MapContext";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Search from "./Search";

fixLeafletIcons();

export default function Home() {
  return (
    <div className="App">
      <MapContext>
        <main>
          <Map></Map>
        </main>
        <Helmet title="Boston's Computer History">
          <link rel="canonical" href="https://www.computerhistory.boston/" />
        </Helmet>
        <Header className="floating">
          {" "}
          <Search></Search>
        </Header>
        <Footer className="floating"></Footer>
      </MapContext>
    </div>
  );
}
