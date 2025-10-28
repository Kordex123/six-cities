import {createStore} from '@reduxjs/toolkit';
import {reducers} from './reducers.ts';

export const store = createStore(reducers);
