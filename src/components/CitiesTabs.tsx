import {CITIES} from '../mocks/cities.ts';

export const CitiesTabs = () => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      { CITIES.map((city) => (
        <li key={city.title} className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>{city.title}</span>
          </a>
        </li>
      )) }
    </ul>
  </section>
);
