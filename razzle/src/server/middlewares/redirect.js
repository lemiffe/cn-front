export const redirectMiddleware = (req, res, next) => {
  const { routerContext } = res.locals;

  if (routerContext.url) {
    res.redirect(routerContext.url);
  } else {
    next();
  }
};
