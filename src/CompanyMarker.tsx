import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Company from "./Company";
import { createRef } from "react";
import { addMarker } from "./MapContext";
import Leaflet from "leaflet";
import FullAddress from "./FullAddress";
import LandmarkLogo from "./LandmarkLogo";
import { Link } from "react-router-dom";

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
          <Link to={`/company/${company.slug}`} className="text-blue-500 visited:text-blue-500">
            Read more about {company.name}
          </Link>
        </p>
      </Popup>
    </Marker>
  );
}
