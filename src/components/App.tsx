// import React from "react";
// import {getOffers} from '../mocks/offers.ts';
// import {Offer} from '../types/Offer.ts'

import {Page} from './Page.tsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Offer} from './Offer.tsx';
import {Main} from './Main.tsx';

export const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Main/>}/>
        <Route path="/offer/:id" element={<Offer/>}/>
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
