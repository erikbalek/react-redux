import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import myAjaxStatusReducer from './ajaxStatusReducer';

//store.state.properties and their reducers
const rootReducer = combineReducers({
  courses, authors, ajaxCallsInProgress: myAjaxStatusReducer
});

export default rootReducer;
