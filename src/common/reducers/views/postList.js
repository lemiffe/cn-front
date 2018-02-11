import { handle } from 'redux-pack';
import { createSelector } from 'reselect';
import { types as postTypes, getPosts } from '../entities/posts';

export const initialState = {
  isLoading: false,
  error: null,
  postIds: [],
  page: 0
};

export const types = {
  SET_POSTS_PAGE: 'SET_POSTS_PAGE'
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case postTypes.FETCH_POSTS:
      return handle(state, action, {
        start: prevState => ({ ...prevState, error: null, isLoading: true }),
        success: prevState => ({
          ...prevState,
          postIds: payload.map(post => post.id)
        }),
        failure: prevState => ({ ...prevState, error: payload }),
        finish: prevState => ({ ...prevState, isLoading: false })
      });
    case types.SET_POSTS_PAGE:
      return { ...state, page: Math.max(payload, 0) };
    default:
      return state;
  }
};

export const actions = {
  setPostsPage: page => ({
    type: types.SET_POSTS_PAGE,
    payload: page
  })
};

export const getPostIds = state => state.views.postList.postIds;
export const getPostsByIds = createSelector(
  [getPosts, getPostIds],
  (posts, postIds) => postIds.map(id => posts[id])
);
