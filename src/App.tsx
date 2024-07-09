import Home from "./Home";
import fixLeafletIcons from "./fixLeafletIcons";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import ConfigContext from "./ConfigContext";
import FourOhFour from "./404";

fixLeafletIcons();

function App() {
  return (
    <ConfigContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:slug" element={<CompanyDetails />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </BrowserRouter>
    </ConfigContext>
  );
}

export default App;
