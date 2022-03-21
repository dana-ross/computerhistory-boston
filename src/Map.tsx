import { MapContainer, TileLayer } from "react-leaflet";
import CompanyMarker from "./CompanyMarker";
import LandmarkMarker from "./LandmarkMarker";
import InstitutionMarker from "./InstitutionMarker";
import "./Map.css";
import Company from "./Company";
import Landmark from "./Landmark";
import Institution from "./Institution";
import {getDefaultCenter, getDefaultZoom, getCompanies, getLandmarks, getInstitutions} from "./ConfigContext";


function Map() {

  return (
    <MapContainer
      center={getDefaultCenter()}
      zoom={getDefaultZoom()}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {getCompanies().map((company: Company) => {
        return (
          <CompanyMarker
            company={company}
            key={company.key()}
          />
        );
      })}
      {getLandmarks().map((landmark: Landmark) => {
        return (
          <LandmarkMarker
            landmark={landmark}
            key={landmark.key()}
          />
        );
      })}
      {getInstitutions().map((institution: Institution) => {
        return (
          <InstitutionMarker
            institution={institution}
            key={institution.key()}
          />
        );
      })}
    </MapContainer>
  );
}

export default Map;
