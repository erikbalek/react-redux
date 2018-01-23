import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //used?
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
