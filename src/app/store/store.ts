import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import { IAppState } from './IappState';
import { reducer } from './reducer';

declare var window: any; 

const DevToolsExtension: GenericStoreEnhancer = (
    window.DevToolsExtension
) ? window.DevToolsExtension() : (f) => f;

export const store = createStore<IAppState>(reducer,
    compose(DevToolsExtension) as GenericStoreEnhancer
);