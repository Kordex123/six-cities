import {offerReducer} from '../redux/reducers.ts';

export interface AppState {
  reducer: ReturnType<typeof offerReducer>;
}
