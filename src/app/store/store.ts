import { createStore } from 'redux';
import { reducer } from './reducer';

declare var window: any; 

export const store = createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );