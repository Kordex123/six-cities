import {CitiesTabs} from './CitiesTabs.tsx';
import {Places} from './Places.tsx';
import {OfferMap} from './OfferMap.tsx';
import {useState} from 'react';
import {City} from '../types/City.ts';
import {Offer} from '../types/Offer.ts';
import styled from 'styled-components';


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
            <MapWrapper className="cities__map map">
              <OfferMap offers={offers}/>
            </MapWrapper>
          </div>
        </div>
      </div>
    </main>
  );
};

const MapWrapper = styled.section`
  //display: flex;
  //justify-content: center;
  #map {
    width: 100%;
    height: 100%;
  }
`;

