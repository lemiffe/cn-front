import { handle } from 'redux-pack';
import { fetchPost, fetchPosts } from '../../lib/api';

export const types = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST'
};

export const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_POSTS:
      return handle(state, action, {
        success: prevState =>
          payload.reduce(
            (acc, post) => ({ ...acc, [post.id]: post }),
            prevState
          )
      });
    case types.FETCH_POST:
      return handle(state, action, {
        success: prevState => ({ ...prevState, [payload.id]: payload })
      });
    default:
      return state;
  }
};

export const actions = {
  fetchPosts: () => ({
    type: types.FETCH_POSTS,
    promise: fetchPosts()
  }),
  fetchPostsIfNeeded: () => (dispatch, getState) => {
    const { entities: { posts } } = getState();

    if (Object.keys(posts).length === 0) {
      dispatch(actions.fetchPosts());
    }
  },
  fetchPost: postId => ({
    type: types.FETCH_POST,
    promise: fetchPost(postId)
  }),
  fetchPostIfNeeded: postId => (dispatch, getState) => {
    const { entities: { posts } } = getState();

    if (!posts.hasOwnProperty(postId)) {
      dispatch(actions.fetchPost(postId));
    }
  }
};

export const getPosts = state => state.entities.posts;
