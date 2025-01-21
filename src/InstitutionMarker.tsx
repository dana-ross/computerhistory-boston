import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Institution from "./Institution";
import { createRef } from "react";
import { addMarker } from "./MapContext";
import Leaflet from "leaflet";
import FullAddress from "./FullAddress";
import LandmarkLogo from "./LandmarkLogo";

interface InstitutionMarkerProps {
  institution: Institution;
}

export default function InstitutionMarker({
  institution,
}: InstitutionMarkerProps) {
  const ref = createRef<Leaflet.Marker>();
  addMarker(ref);
  const institutionTitle = `${institution.name} in ${institution.address.city}`;

  return (
    <Marker position={institution.location} ref={ref} alt={institutionTitle}>
      <Popup>
        <LandmarkLogo landmark={institution}></LandmarkLogo>
        <h2>{institution.name}</h2>
        <FullAddress address={institution.address}></FullAddress>
        <p>{institution.description}</p>
        {!!institution.links.length && (
          <div className="institution-links">
            <h3>Links:</h3>
            <ul>
              {institution.links.map((link, index) => {
                return (
                  <li key={link.key()}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="text-blue-500 visited:text-blue-500">
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Popup>
    </Marker>
  );
}
