import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Company from "./Company";
import { createRef } from "react";
import { addMarker } from "./MapContext";
import Leaflet from "leaflet";
import FullAddress from "./FullAddress";
import LandmarkLogo from "./LandmarkLogo";

interface CompanyMarkerProps {
  company: Company;
  interactive?: boolean;
}

export default function CompanyMarker({ company }: CompanyMarkerProps) {
  const ref = createRef<Leaflet.Marker>();
  addMarker(ref);

  return (
    <Marker position={company.location} ref={ref}>
      <Popup>
        <LandmarkLogo landmark={company}></LandmarkLogo>
        <h2>{company.name}</h2>
        <FullAddress address={company.address}></FullAddress>
        <p>{company.description}</p>
        <p>
          <a href={`/company/${company.slug}`}>
            Read more about {company.name}
          </a>
        </p>
      </Popup>
    </Marker>
  );
}
