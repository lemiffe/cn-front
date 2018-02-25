import { parse } from 'date-fns';

export const mapObject = (obj, mapFn) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]: mapFn(obj[key])
    }),
    {}
  );
export const mapArticle = article => ({
  ...article,
  link: article.link && new URL(article.link),
  createdAt: parse(article.createdAt)
});
