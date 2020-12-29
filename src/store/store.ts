import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import {  reducer2, } from './reducer';



export const store = createStore(reducer2 );
// export const store = createStore(reducer, applyMiddleware(thunk)); 