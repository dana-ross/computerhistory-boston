import { MapContainer, TileLayer } from "react-leaflet";
import CompanyMarker from "./CompanyMarker";
import LandmarkMarker from "./LandmarkMarker";
import InstitutionMarker from "./InstitutionMarker";
import "./Map.css";
import Company from "./Company";
import Landmark from "./Landmark";
import Institution from "./Institution";
import Config from "./Config";

interface MapProps {
  zoom: number;
  companydata: Array<Company>;
  landmarkdata: Array<Landmark>;
  institutiondata: Array<Institution>;
}

const config = new Config();

function Map({
  zoom,
  companydata,
  landmarkdata,
  institutiondata,
}: MapProps) {
  return (
    <MapContainer
      center={config.center}
      zoom={zoom}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {companydata.map((company: Company) => {
        return (
          <CompanyMarker
            company={company}
            key={company.key()}
          />
        );
      })}
      {landmarkdata.map((landmark: Landmark) => {
        return (
          <LandmarkMarker
            landmark={landmark}
            key={landmark.key()}
          />
        );
      })}
      {institutiondata.map((institution: Institution) => {
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
