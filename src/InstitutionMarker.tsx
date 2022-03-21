import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Institution from "./Institution";

interface InstitutionMarkerProps {
  institution: Institution;
}

export default function InstitutionMarker({ institution }: InstitutionMarkerProps) {

  return (
    <Marker position={institution.location}>
      <Popup>
        <h2>{institution.name}</h2>
        <p>{institution.description}</p>
        {!!institution.links.length && (
          <div className="institution-links">
            <h3>Links:</h3>
            <ul>
              {institution.links.map((link, index) => {
                return (
                  <li key={link.key()}>
                    <a href={link.href} target="_blank" rel="noreferrer">{link.title}</a>
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
