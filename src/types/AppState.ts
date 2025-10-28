import {offerReducer} from '../redux/reducers.ts';

export interface AppState {
  offerReducer: ReturnType<typeof offerReducer>;
}
