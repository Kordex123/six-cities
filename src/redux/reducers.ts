import {combineReducers, PayloadAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/ActionType.ts';
import {AppState} from '../types/AppState.ts';
import {ActionParams} from '../types/ActionParams.ts';

const defaultState: AppState = ({
  offers: []
});

const offerReducer = (state: AppState = defaultState, action: PayloadAction<ActionParams, ActionType>) => {
  switch (action.type) {
    case ActionType.SetOffers:
      return { ...state, offers: action.payload.offers! };
  }
};


export const reducers = combineReducers({offerReducer});
