import { Marker, Popup } from "react-leaflet";
import "./Map.css";
import Landmark from "./Landmark";
import { createRef } from "react";
import { addMarker } from "./MapContext";
import Leaflet from "leaflet";
import FullAddress from "./FullAddress";
import LandmarkLogo from "./LandmarkLogo";
import { Link } from "react-router-dom";

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
        <p>
          <Link to={`/landmark/${landmark.slug}`} className="text-blue-500 visited:text-blue-500">
            Read more about {landmark.name}
          </Link>
        </p>
      </Popup>
    </Marker>
  );
}
