import { handle } from 'redux-pack';
import { fetchArticle, fetchArticles } from '../../lib/api';

export const types = {
  FETCH_ARTICLES: 'FETCH_ARTICLES',
  FETCH_ARTICLE: 'FETCH_ARTICLE'
};

export const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_ARTICLES:
      return handle(state, action, {
        success: prevState =>
          payload
            ? payload.reduce(
                (acc, article) => ({ ...acc, [article.id]: article }),
                prevState
              )
            : prevState
      });
    case types.FETCH_ARTICLE:
      return handle(state, action, {
        success: prevState => ({ ...prevState, [payload.id]: payload })
      });
    default:
      return state;
  }
};

export const actions = {
  fetchArticles: () => ({
    type: types.FETCH_ARTICLES,
    promise: fetchArticles()
  }),
  fetchArticlesIfNeeded: () => (dispatch, getState) => {
    const articles = getArticles(getState());

    if (articles && Object.keys(articles).length === 0) {
      dispatch(actions.fetchArticles());
    }
  },
  fetchArticle: articleId => ({
    type: types.FETCH_ARTICLE,
    promise: fetchArticle(articleId)
  }),
  fetchArticleIfNeeded: articleId => (dispatch, getState) => {
    const articles = getArticles(getState());

    if (!articles.hasOwnProperty(articleId)) {
      dispatch(actions.fetchArticle(articleId));
    }
  }
};

export const getArticles = state => state.entities.articles;
