import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Landmark from "./Landmark";
import { createRef } from "react";
import { addMarker } from "./MapContext";
import Leaflet from "leaflet";
import FullAddress from "./FullAddress";
import LandmarkLogo from "./LandmarkLogo";

interface LandmarkMarkerProps {
  landmark: Landmark;
}

export default function LandmarkMarker({ landmark }: LandmarkMarkerProps) {
  const ref = createRef<Leaflet.Marker>();
  addMarker(ref);

  const landmarkTitle = `${landmark.name} in ${landmark.address.city}`;

  return (
    <Marker position={landmark.location} ref={ref} alt={landmarkTitle}>
      <Popup>
        <LandmarkLogo landmark={landmark}></LandmarkLogo>
        <h2>{landmark.name}</h2>
        <FullAddress address={landmark.address}></FullAddress>
        <p>{landmark.description}</p>
        {!!landmark.links.length && (
          <div className="company-links">
            <h3>Links:</h3>
            <ul>
              {landmark.links.map((link, index) => {
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
