import {CitiesTabs} from './CitiesTabs.tsx';
import {Places} from './Places.tsx';
import {Map} from './Map.tsx';

export const Main = () => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <CitiesTabs/>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <Places/>
        <div className="cities__right-section">
          <Map/>
        </div>
      </div>
    </div>
  </main>
);


