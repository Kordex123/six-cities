// import React from "react";
// import {getOffers} from '../mocks/offers.ts';
// import {Offer} from '../types/Offer.ts'

import {Page} from './Page.tsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {OfferDetails} from './OfferDetails.tsx';
import {Main} from './Main.tsx';
import {Favorites} from './Favorites.tsx';
import {useState} from 'react';
import {getOffers} from '../mocks/offers.ts';
import {Offer} from '../types/Offer.ts';

export const App = () => {

  const [offers, setOffers] = useState<Offer[]>(getOffers());
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>}>
          <Route index element={<Main offers={offers} setOffers={setOffers}/>}/>
          <Route path="/offer/:id" element={<OfferDetails offers={offers} setOffers={setOffers}/>}/>
          <Route path="/favorites" element={<Favorites offers={offers} setOffers={setOffers}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  // <ul>
  //   { getOffers().map ((offer: Offer) => (
  //     <li key={offer.id}>
  //       {offer.city.title}
  //       <img src={offer.previewImage} alt={offer.title}/>
  //     </li>))}
  // </ul>
  );
};
