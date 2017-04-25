import { createStore } from 'redux';
import { IAppState } from './IappState';
import { reducer } from './reducer';

export const store = createStore<IAppState>(reducer);