import {ActionType} from '../types/ActionType.ts';
import {Offer} from '../types/Offer.ts';

export const actions = {
  setOffers: (offers: Offer[]) => ({
    type: ActionType.SetOffers,
    payload: { offers }
  }),
  toggleFavorite: (currentOffer: Offer) => ({
    type: ActionType.ToggleFavorite,
    payload: { currentOffer }
  }),
  setCurrentOffer: (id: number) => ({
    type: ActionType.SetCurrentOffer,
    payload: {id}
  })
};
