import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Landmark from "./Landmark";
import MapState from "./MapState";
import {useRef} from "react";
import {Marker as LeafletMarker} from "leaflet";

interface LandmarkMarkerProps {
  landmark: Landmark;
  mapState: MapState;
}

export default function LandmarkMarker({ landmark, mapState }: LandmarkMarkerProps) {

  const ref = useRef<LeafletMarker>(null);
  mapState.addMarker({'location': landmark.location, 'marker': ref});

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
