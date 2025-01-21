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
        <Helmet title="Boston's Computer History">
          <link rel="canonical" href="https://www.computerhistory.boston/" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
        <Header className="mb-0 pb-4 w-70 absolute top-4 left-2">
          {" "}
          <Search></Search>
        </Header>
        <main>
          <Map></Map>
        </main>
        <div className="w-full fixed bottom-0 left-0 z-[400]">
          <Footer />
        </div>
      </MapContext>
    </div>
  );
}
