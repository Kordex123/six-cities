import {ActionType} from '../types/ActionType.ts';
import {Offer} from '../types/Offer.ts';

export const actions = {
  setOffers: (offers: Offer[]) => ({
    type: ActionType.SetOffers,
    payload: { offers }
  })
};

export type SetOffersPayload = ReturnType<typeof actions.setOffers>;
