import { 
  FETCH_POSTS_REQUEST, 
  FETCH_POSTS_SUCCESS, 
  FETCH_POSTS_FAILURE 
} from '../../constants/ActionTypes'

function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error.message
  };
}

function fetchPostsSuccess(data) {
  return {
    type: FETCH_POSTS_SUCCESS,
    meta: {
      receivedAt: Date.now()
    },
    payload: data
  };
}

function fetchPosts() {
  return dispatch => {
    dispatch({
      type: FETCH_POSTS_REQUEST
    });
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(
        data => dispatch(fetchPostsSuccess(data)),
        error => dispatch(fetchPostsFailure(error))
      );
  };
}

function shouldFetchPosts(state) {
  const posts = state.posts
  //return !(posts.value.children instanceof Array || posts.isFetching);
  return true
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts())
    }
  };
}
