import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Landmark from "./Landmark";
import { createRef } from "react";
import { addMarker} from "./MapContext";
import Leaflet from "leaflet";

interface LandmarkMarkerProps {
  landmark: Landmark;
}

export default function LandmarkMarker({ landmark }: LandmarkMarkerProps) {

  const ref = createRef<Leaflet.Marker>();
  addMarker(ref);

  return (
    <Marker position={landmark.location} ref={ref}>
      <Popup>
        <h2>{landmark.name}</h2>
        <p>{landmark.description}</p>
        {!!landmark.links.length && (
          <div className="company-links">
            <h3>Links:</h3>
            <ul>
              {landmark.links.map((link, index) => {
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
