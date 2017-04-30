import { combineReducers } from 'redux'
import { project } from './config';
import { reducers as featureReducers }  from './features'

export default combineReducers({
  [project.name]: featureReducers
});
