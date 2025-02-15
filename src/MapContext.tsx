import React, { useContext, RefObject } from "react";
import Leaflet from "leaflet";

const MapContext = React.createContext(null);
let map: Leaflet.Map | null = null;
const markers = new Array<RefObject<Leaflet.Marker>>();

interface MapContextProps {
    children: any;
}

export function setMap(newMap: Leaflet.Map) {
    map = newMap;
}

export function useMap() {
    return useContext(MapContext);
}

export function getMap() {
    return map;
}

export function addMarker(marker: RefObject<Leaflet.Marker | null>) {
    if (marker.current instanceof Leaflet.Marker) {
        markers.push(marker as RefObject<Leaflet.Marker>);
    }
}

export function getMarkers() {
    return markers;
}

export default function MapProvider({ children }: MapContextProps) {
    return (
        <MapContext.Provider value={null}>
            {children}
        </MapContext.Provider>
    );
}