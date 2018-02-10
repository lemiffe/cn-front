export const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500);

  if (req.xhr) {
    res.json({ error: 'Internal server error' });
  } else {
    // TODO: Implement real error template
    res.send('<div>Internal server error</div>');
  }
};
