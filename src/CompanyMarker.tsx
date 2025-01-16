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

  const markerTitle = `${company.name} in ${company.address.city}`;

  return (
    <Marker position={company.location} ref={ref} alt={markerTitle}>
      <Popup>
        <LandmarkLogo landmark={company} className="h-16"></LandmarkLogo>
        <h2 className="mb-4">{company.name}</h2>
        <FullAddress address={company.address} className="mb-4"></FullAddress>
        <p className="mb-4 leading-normal">{company.description}</p>
        <p>
          <a href={`/company/${company.slug}`}>
            Read more about {company.name}
          </a>
        </p>
      </Popup>
    </Marker>
  );
}
