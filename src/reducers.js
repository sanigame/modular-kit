import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { project } from './config';
import { reducers as featureReducers }  from './features'

export default combineReducers({
  form: formReducer,
  [project.name]: featureReducers
});
