import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

//store state corresponds to these names (normally), so I cannot use other names in import
const rootReducer = combineReducers({
  courses, authors, ajaxCallsInProgress
});

export default rootReducer;
