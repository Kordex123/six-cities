import {map, tileLayer, marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../types/Offer.ts';
import {getBoundsForOffers} from '../mocks/offers.ts';
import {useEffect, useRef} from 'react';

interface OfferMapProps {
  offers: Offer[];
}

export const OfferMap = ({offers}:OfferMapProps) => {
  const mapRef = useRef(null);
  const isMapRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isMapRenderedRef.current && offers.length > 0) {
      const newMap = map(mapRef.current);
      newMap.fitBounds(getBoundsForOffers(offers));
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(newMap);
      offers.forEach((offer) => marker([offer.position.lat, offer.position.lng]).addTo(newMap));
      isMapRenderedRef.current = true;
    }
  }, [offers]);
  return (
    <div id="map" ref={mapRef}></div>
  );
};
