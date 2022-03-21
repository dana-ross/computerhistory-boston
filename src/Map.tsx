import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import CompanyMarker from "./CompanyMarker";
import LandmarkMarker from "./LandmarkMarker";
import InstitutionMarker from "./InstitutionMarker";
import "./Map.css";
import Company from "./Company";
import Landmark from "./Landmark";
import Institution from "./Institution";
import MapState from "./MapState";

interface MapProps {
  zoom: number;
  companydata: Array<Company>;
  landmarkdata: Array<Landmark>;
  institutiondata: Array<Institution>;
  mapState: MapState;
}

function Map({
  zoom,
  companydata,
  landmarkdata,
  institutiondata,
  mapState,
}: MapProps) {
  return (
    <MapContainer
      center={mapState.center}
      zoom={zoom}
      whenCreated={(map) => {
        mapState.setMap(map);
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {companydata.map((company: Company) => {
        return (
          <CompanyMarker
            company={company}
            key={company.key()}
            mapState={mapState}
          />
        );
      })}
      {landmarkdata.map((landmark: Landmark) => {
        return (
          <LandmarkMarker
            landmark={landmark}
            key={landmark.key()}
            mapState={mapState}
          />
        );
      })}
      {institutiondata.map((institution: Institution) => {
        return (
          <InstitutionMarker
            institution={institution}
            key={institution.key()}
            mapState={mapState}
          />
        );
      })}
    </MapContainer>
  );
}

export default Map;
