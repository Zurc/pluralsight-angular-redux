import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './IappState';

declare var window: any; 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const DevToolsExtension: GenericStoreEnhancer = (window.DevToolsExtension) 
    ? window.DevToolsExtension() : (f) => f;

// export const store = createStore<IAppState>(reducer, 
//     compose(DevToolsExtension) as GenericStoreEnhancer);

export const store = createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );