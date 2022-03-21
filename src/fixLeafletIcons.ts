import Leaflet from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


export default function fixLeafletIcons() {
    Leaflet.Marker.prototype.options.icon = Leaflet.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });;
    
}