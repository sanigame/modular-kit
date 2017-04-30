import { combineReducers } from 'redux'
import posts from './feed/feedReducer'

export default combineReducers({
  feed: posts
});
