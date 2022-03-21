import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Company from "./Company";

interface CompanyMarkerProps {
  company: Company;
}

export default function CompanyMarker({ company }: CompanyMarkerProps) {

  return (
    <Marker position={company.location}>
      <Popup>
        <h2>{company.name}</h2>
        <p>{company.description}</p>
        {!!company.links.length && (
          <div className="company-links">
            <h3>Links:</h3>
            <ul>
              {company.links.map((link, index) => {
                return (
                  <li key={link.key()}>
                    <a href={link.href} target="_blank" rel="noreferrer">
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
