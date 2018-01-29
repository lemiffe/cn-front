export const notFoundMiddleware = (req, res, next) => {
  // TODO: Implement real 404 template
  res.status(404).send('404: Page not found');
};
