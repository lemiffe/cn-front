import { Router } from 'express';
import { renderReactMiddleware } from './middlewares/render';
import { redirectMiddleware } from './middlewares/redirect';
import { reduxStoreMiddleware } from './middlewares/redux';
import { sendHtmlResponse } from './lib/html';
import { actions as postActions } from '../common/reducers/entities/posts';
import { actions as currencyActions } from '../common/reducers/entities/currencies';

export const router = Router();

router.get(
  '/*',
  (req, res, next) => {
    res.locals.actions = [
      postActions.fetchPosts(),
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
  '/posts/:postId',
  (req, res, next) => {
    const { postId } = req.params;
    res.locals.actions = [postActions.fetchPost(postId)];
    next();
  },
  reduxStoreMiddleware,
  renderReactMiddleware,
  redirectMiddleware,
  sendHtmlResponse
);
