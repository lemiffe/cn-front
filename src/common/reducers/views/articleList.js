import { handle } from 'redux-pack';
import { createSelector } from 'reselect';
import { types as articleTypes, getArticles } from '../entities/articles';

export const initialState = {
  isLoading: false,
  error: null,
  articleIds: [],
  page: 0
};

export const types = {
  SET_ARTICLES_PAGE: 'SET_ARTICLES_PAGE'
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case articleTypes.FETCH_ARTICLES:
      return handle(state, action, {
        start: prevState => ({ ...prevState, error: null, isLoading: true }),
        success: prevState => ({
          ...prevState,
          articleIds: payload ? payload.map(article => article.id) : []
        }),
        failure: prevState => ({ ...prevState, error: payload }),
        finish: prevState => ({ ...prevState, isLoading: false })
      });
    case types.SET_ARTICLES_PAGE:
      return { ...state, page: Math.max(payload, 0) };
    default:
      return state;
  }
};

export const actions = {
  setArticlesPage: page => ({
    type: types.SET_ARTICLES_PAGE,
    payload: page
  })
};

export const getArticleIds = state => state.views.articleList.articleIds;
export const getArticlesByIds = createSelector(
  [getArticles, getArticleIds],
  (articles, articleIds) => articleIds.map(id => articles[id])
);
