import {Offer} from './Offer.ts';

export interface ActionPayload {
  offers?: Offer[];
  currentOffer?: Offer;
  id?: number;
}
