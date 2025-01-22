import Home from "./Home";
import fixLeafletIcons from "./fixLeafletIcons";
import "./App-tw.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfigContext from "./ConfigContext";
import FourOhFour from "./404";
import CompanyList from "./CompanyList";
import InstitutionList from "./InstitutionList";
import LandmarkList from "./LandmarkList";
import DetailsPage from "./DetailsPage";

fixLeafletIcons();

function App() {
  return (
    <ConfigContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:slug" element={<DetailsPage />} />
          <Route path="/institution/:slug" element={<DetailsPage />} />
          <Route path="/landmark/:slug" element={<DetailsPage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/institutions" element={<InstitutionList />} />
          <Route path="/landmarks" element={<LandmarkList />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </BrowserRouter>
    </ConfigContext>
  );
}

export default App;
