// import React from "react";
import {getOffers} from '../mocks/offers.ts';
import {Offer} from '../types/Offer.ts';

export const App = () => (
  <ul>
    { getOffers().map ((offer: Offer) => (
      <li key={offer.id}>
        {offer.city.title}
        <img src={offer.previewImage} alt={offer.title}/>
      </li>))}
  </ul>
);
