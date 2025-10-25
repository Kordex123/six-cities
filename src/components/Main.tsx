import {CitiesTabs} from './CitiesTabs.tsx';
import {Places} from './Places.tsx';
import {Map} from './Map.tsx';
import {useState} from 'react';
import {City} from '../types/City.ts';

export const Main = () => {

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
          <Places currentCity={currentCity}/>
          <div className="cities__right-section">
            <Map/>
          </div>
        </div>
      </div>
    </main>
  );
};


