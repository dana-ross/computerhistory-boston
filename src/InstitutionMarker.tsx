import { Marker, Popup } from "react-leaflet";
import {Marker as LeafletMarker } from "leaflet";
import "./Map.css";
import Institution from "./Institution";
import MapState from "./MapState";
import { useRef } from "react";

interface InstitutionMarkerProps {
  institution: Institution;
  mapState: MapState;
}

export default function InstitutionMarker({ institution, mapState }: InstitutionMarkerProps) {

  const ref = useRef<LeafletMarker>(null);
  mapState.addMarker({'location': institution.location, 'marker': ref});

  return (
    <Marker position={institution.location} ref={ref}>
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
