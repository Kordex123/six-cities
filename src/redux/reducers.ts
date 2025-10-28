import {combineReducers, PayloadAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/ActionType.ts';
import {ActionParams} from '../types/ActionParams.ts';
import {Offer} from '../types/Offer.ts';

interface OfferState {
  offers: Offer[];
}

const defaultState: OfferState = ({
  offers: []
});

export const offerReducer = (state: OfferState = defaultState, action: PayloadAction<ActionParams, ActionType>) => {
  switch (action.type) {
    case ActionType.SetOffers:
      return {...state, offers: action.payload.offers!};
    default:
      return state;
  }
};


export const reducers = combineReducers({offerReducer});
