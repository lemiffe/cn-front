import { createSelector } from 'reselect';
import { getArticleDetails } from '../entities/articleDetails';

export const initialState = {
  isLoading: false,
  error: null,
  articleId: null
};

export const types = {
  SET_ARTICLE_ID: 'SET_ARTICLES_ID'
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_ARTICLE_ID:
      return { ...state, articleId: payload };
    default:
      return state;
  }
};

export const actions = {
  setArticleId: articleId => ({
    type: types.SET_ARTICLE_ID,
    payload: articleId
  })
};

export const getArticleId = state => state.views.articleDetail.articleId;
export const getArticleDetailById = createSelector(
  [getArticleDetails, getArticleId],
  (articleDetails, id) => articleDetails[id]
);
