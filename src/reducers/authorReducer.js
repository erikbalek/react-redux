import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function authorReducer(state = initalState.authors, action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
      // return [...state,
      //   Object.assign({}, action.course)
      // ];

    default:
      return state;
  }
}
