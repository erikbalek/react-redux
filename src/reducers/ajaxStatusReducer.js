import initalState from './initialState';
import * as types from '../actions/actionTypes';

function actiontypeEndsInSuccess(actionType) {
  return  actionType.substring(actionType.length-8) == '_SUCCESS';
}


export default function ajaxStatusReducer(state = initalState.ajaxCallsInProgress, action) {
  if(action.type == types.BEGIN_AJAX_CALL) {
    return state +1;
  } else if (action.type == types.ERROR_AJAX_CALL || actiontypeEndsInSuccess(action.type)) {
    return state -1;
  }
  return state;
}
