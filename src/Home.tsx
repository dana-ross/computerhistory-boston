import Map from "./Map";
import Header from "./Header";
import fixLeafletIcons from "./fixLeafletIcons";
import "./App.css";
import MapContext from "./MapContext";
import Footer from "./Footer";
import Search from "./Search";
import Sidebar from "./Sidebar";

fixLeafletIcons();

export default function Home() {
  return (
    <div className="App flex overflow-clip">
      <MapContext>
        <title>Boston's Computer History</title>
        <link rel="canonical" href="https://www.computerhistory.boston/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Sidebar />
        <main className="flex-initial relative">
          <Header className="mb-0 mx-4 md:mx-0 pb-4 w-10/12 md:w-96 absolute top-4 md:left-4">
            {" "}
            <Search></Search>
          </Header>
          <div className="h-100 max-h-dvh">
            <Map></Map>
            <div className="absolute bottom-4 left-4 mr-4 w-fit z-[400]">
              <Footer />
            </div>
          </div>
        </main>
      </MapContext>
    </div>
  );
}
