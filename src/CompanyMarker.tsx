import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Company from "./Company";
import MapState from "./MapState";
import { Marker as LeafletMarker} from "leaflet";
import { useRef } from "react";

interface CompanyMarkerProps {
  company: Company;
  mapState: MapState;
}

export default function CompanyMarker({ company, mapState }: CompanyMarkerProps) {

  const ref = useRef<LeafletMarker>(null);
  mapState.addMarker({'location': company.location, 'marker': ref});

  return (
    <Marker position={company.location} ref={ref}>
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
