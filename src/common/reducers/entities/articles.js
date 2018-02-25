import { handle } from 'redux-pack';
import { fetchArticles } from '../../lib/api';

export const types = {
  FETCH_ARTICLES: 'FETCH_ARTICLES'
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
    default:
      return state;
  }
};

export const actions = {
  fetchArticles: (options = undefined) => ({
    type: types.FETCH_ARTICLES,
    promise: fetchArticles(options)
  }),
  fetchArticlesIfNeeded: () => (dispatch, getState) => {
    const articles = getArticles(getState());

    if (articles && Object.keys(articles).length === 0) {
      dispatch(actions.fetchArticles());
    }
  }
};

export const getArticles = state => state.entities.articles;
