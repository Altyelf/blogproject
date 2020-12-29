import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import {  reducer2, reducer3, rootReducer } from './reducer';



export const store = createStore(rootReducer);
// export const store = createStore(reducer, applyMiddleware(thunk)); 