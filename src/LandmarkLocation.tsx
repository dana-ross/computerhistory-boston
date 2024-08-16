import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Company from "./Company";
import Leaflet, { LatLngTuple } from "leaflet";
import { setMap } from "./MapContext";
import { PropsWithChildren } from "react";

function updateMapContext(map: Leaflet.Map) {
  setMap(map);
}

function googleMapsUrl(latlng: LatLngTuple) {
  return `https://www.google.com/maps/search/?api=1&query=${latlng[0]}%2C${latlng[1]}`;
}

interface LandmarkLocationProps {
  company: Company;
}

export default function LandmarkLocation(
  props: PropsWithChildren<LandmarkLocationProps>
) {
  return (
    <div className="landmark-location">
      <address>
        {props.company.address.street}
        <br />
        {props.company.address.city}, {props.company.address.state}{" "}
        {props.company.address.zip}
      </address>
      <p>
        <a href={googleMapsUrl(props.company.location)} target="_blank">
          Open in Google Maps
        </a>
      </p>
      <div className="map">
        <MapContainer
          center={props.company.location as LatLngTuple}
          zoom={12}
          whenCreated={updateMapContext}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={props.company.location} />
        </MapContainer>
      </div>
    </div>
  );
}
