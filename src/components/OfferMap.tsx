import {map, tileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const OfferMap = () => {
  setTimeout(() => {
    const offersMap = map('map').setView([51.505, -0.09], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(offersMap);
  }, 0);
  return (
    <div id="map"></div>
  );
};
