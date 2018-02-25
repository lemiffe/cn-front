import { parse } from 'date-fns';

export const mapArticle = article => ({
  ...article,
  createdAt: parse(article.createdAt)
});
