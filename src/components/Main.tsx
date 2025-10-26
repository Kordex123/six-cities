import {CitiesTabs} from './CitiesTabs.tsx';
import {Places} from './Places.tsx';
import {Map} from './Map.tsx';
import {useState} from 'react';
import {City} from '../types/City.ts';
import {Offer} from '../types/Offer.ts';


interface MainProps {
  offers: Offer[];
  setOffers: (offers: Offer[]) => void;
}

export const Main = ({offers, setOffers}: MainProps) => {

  const [currentCity, setCurrentCity] = useState<City>();

  const handleCityClick = (city: City) => {
    setCurrentCity(city);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesTabs onCityClick={handleCityClick}/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <Places currentCity={currentCity} offers={offers} setOffers={setOffers} />
          <div className="cities__right-section">
            <Map/>
          </div>
        </div>
      </div>
    </main>
  );
};


