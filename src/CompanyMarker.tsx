import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Company from "./Company";
import { createRef } from "react";
import { addMarker} from "./MapContext";
import Leaflet from "leaflet";
import FullAddress from "./FullAddress";

interface CompanyMarkerProps {
  company: Company;
}

export default function CompanyMarker({ company }: CompanyMarkerProps) {

  const ref = createRef<Leaflet.Marker>();
  addMarker(ref);

  return (
    <Marker position={company.location} ref={ref}>
      <Popup>
        <h2>{company.name}</h2>
        <FullAddress address={company.address}></FullAddress>
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
