import { Router } from 'express';
import { renderReactMiddleware } from './middlewares/render';
import { redirectMiddleware } from './middlewares/redirect';
import { reduxStoreMiddleware } from './middlewares/redux';
import { sendHtmlResponse } from './lib/html';
import { actions as articleActions } from '../common/reducers/entities/articles';
import { actions as articleDetailsActions } from '../common/reducers/entities/articleDetails';
import { actions as articleDetailActions } from '../common/reducers/views/articleDetail';
import { actions as currencyActions } from '../common/reducers/entities/currencies';

export const router = Router();

router.get(
  '/',
  (req, res, next) => {
    res.locals.actions = [
      articleActions.fetchArticles(),
      currencyActions.fetchCurrencies()
    ];
    next();
  },
  reduxStoreMiddleware,
  renderReactMiddleware,
  redirectMiddleware,
  sendHtmlResponse
);

router.get(
  '/p/:articleId',
  (req, res, next) => {
    const { articleId } = req.params;
    res.locals.actions = [
      articleDetailActions.setArticleId(articleId),
      articleDetailsActions.fetchArticleDetail(articleId)
    ];
    next();
  },
  reduxStoreMiddleware,
  renderReactMiddleware,
  redirectMiddleware,
  sendHtmlResponse
);

router.get(
  '*',
  reduxStoreMiddleware,
  renderReactMiddleware,
  redirectMiddleware,
  sendHtmlResponse
);
