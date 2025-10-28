import {map, tileLayer, marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../types/Offer.ts';
import {getBoundsForOffers, getCenterOfOffers} from '../mocks/offers.ts';

interface OfferMapProps {
  offers: Offer[];
}

export const OfferMap = ({offers}:OfferMapProps) => {
  setTimeout(() => {
    const { lat, lng } = getCenterOfOffers(offers);
    const offersMap = map('map').setView([lat, lng], 3);
    offersMap.fitBounds(getBoundsForOffers(offers));
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(offersMap);

    offers.forEach((offer) => marker([offer.position.lat, offer.position.lng]).addTo(offersMap));
  }, 0);
  return (
    <div id="map"></div>
  );
};
