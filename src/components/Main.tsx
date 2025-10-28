import {CitiesTabs} from './CitiesTabs.tsx';
import {Places} from './Places.tsx';
import {OfferMap} from './OfferMap.tsx';
import {Dispatch, useEffect, useState} from 'react';
import {City} from '../types/City.ts';
import {Offer} from '../types/Offer.ts';
import styled from 'styled-components';
import {AppState} from '../types/AppState.ts';
import {connect} from 'react-redux';
import {actions} from '../redux/actions.ts';
import {getOffers} from '../mocks/offers.ts';


interface MainProps {
  offers: Offer[];
  setOffers: (offers: Offer[]) => void;
}

const MainComponent = ({offers, setOffers}: MainProps) => {

  const [currentCity, setCurrentCity] = useState<City>();

  const handleCityClick = (city: City) => {
    setCurrentCity(city);
  };

  useEffect(() => {
    setOffers(getOffers());
  }, [setOffers]);

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

const mapStateToProps = (state: AppState) => ({
  offers: state.offers
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setOffers: (offers: Offer[]) => dispatch(actions.setOffers(offers))
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
