import { 
  FETCH_POSTS_REQUEST, 
  FETCH_POSTS_SUCCESS, 
  FETCH_POSTS_FAILURE 
} from '../../constants/ActionTypes'

function posts(state = {
  isFetching: false,
  error: false,
  lastUpdated: 0,
  value: []
}, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        value: action.payload
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default posts;
