import { createStore, compose } from 'redux';
import reducer from './reducers';
/*
const{
    createStore,
    combineReducers,
    compose,
    bindActionsCreators,
    applyMiddelware
} = Redux

//compose agarra varias funciones y la simplifica en 1 
*/

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(reducer, composeEnhancers());

export default store;
