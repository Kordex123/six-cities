import {Offer} from './Offer.ts';

export interface ActionParams {
  offers?: Offer[];
  currentOffer?: Offer;
}
