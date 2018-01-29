import { handle } from 'redux-pack';
import { createSelector } from 'reselect';
import { types, getPosts } from '../entities/posts';

export const initialState = {
  isLoading: false,
  error: null,
  postIds: [],
  page: 0
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_POSTS:
      return handle(state, action, {
        start: prevState => ({ ...prevState, error: null, isLoading: true }),
        success: prevState => ({
          ...prevState,
          postIds: payload.map(post => post.id)
        }),
        failure: prevState => ({ ...prevState, error: payload }),
        finish: prevState => ({ ...prevState, isLoading: false })
      });
    default:
      return state;
  }
};

export const getPostIds = state => state.views.postsList.postIds;
export const getPostsByIds = createSelector(
  [getPosts, getPostIds],
  (posts, postIds) => postIds.map(id => posts[id])
);
