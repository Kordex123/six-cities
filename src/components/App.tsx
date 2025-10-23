// import React from "react";
import {getOffers} from "../mocks/offers.ts";


export const App = () => {
  return (<ul>
      { getOffers().map ((offer: any) => <li key={offer.id}> {offer.city }</li>) }
    </ul>);
}
