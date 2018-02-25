import { handle } from 'redux-pack';
import { fetchArticle } from '../../lib/api';

export const types = {
  FETCH_ARTICLE: 'FETCH_ARTICLE'
};

export const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_ARTICLE:
      return handle(state, action, {
        success: prevState => ({ ...prevState, [payload.id]: payload })
      });
    default:
      return state;
  }
};

export const actions = {
  fetchArticleDetail: articleId => ({
    type: types.FETCH_ARTICLE,
    promise: fetchArticle(articleId)
  }),
  fetchArticleDetailIfNeeded: articleId => (dispatch, getState) => {
    const articles = getArticleDetails(getState());

    if (!articles.hasOwnProperty(articleId)) {
      dispatch(actions.fetchArticleDetail(articleId));
    }
  }
};

export const getArticleDetails = state => state.entities.articleDetails;
