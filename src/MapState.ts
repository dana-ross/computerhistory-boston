import { makeAutoObservable } from "mobx";
import Leaflet, { LatLngExpression, Marker } from "leaflet";
import { RefObject } from "react";

export default class MapState {
  map: Leaflet.Map | undefined;
  center: LatLngExpression | undefined;
  markers: Array<{location : LatLngExpression, marker: RefObject<Marker>}> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMap(map : Leaflet.Map) {
      this.map = map;
      console.log(this.map)
  }

  getMarkers() {
      return this.markers;
  }

  addMarker(obj : {location: LatLngExpression, marker: RefObject<Marker>}) {
      console.log(obj);
      this.markers.push(obj)
  }

  findMarker(center: LatLngExpression) {
    return this.getMarkers().find((ref) => {
          return ref.location.toString() === center.toString();
    });

  }
  setCenter(center : LatLngExpression) {
      this.center = center;
      if(this.map !== undefined) {
          this.map.flyTo(this.center);
// console.log(this.getMarkers());
            const ref = this.findMarker(center);
            if(ref) {
                console.log(ref.marker)                
            }
            else {
                console.log('not found');
            }


         
          
          // openPopup
      }
  }
  
}