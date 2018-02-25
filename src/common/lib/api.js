import axios from 'axios';
import { stringify } from 'qs';

const pluckData = res => res.data;
const withOptions = (endpoint, options) =>
  `${endpoint}${stringify(options, { addQueryPrefix: Boolean(options) })}`;
const api = axios.create({
  baseURL: 'http://private-036c6-projectcn.apiary-mock.com',
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => data.response
  ]
});
const coinMarketCapApi = axios.create({
  baseURL: 'https://api.coinmarketcap.com/v1/'
});

export const fetchArticles = async options => {
  return api.get(withOptions('articles', options)).then(res => res.data);
};
export const fetchArticle = async (articleId, options) => {
  return api.get(withOptions(`articles/${articleId}`, options)).then(pluckData);
};
export const fetchCurrencies = async options => {
  const defaultOptions = { convert: 'EUR', limit: 200, start: 0 };
  return coinMarketCapApi
    .get(withOptions('ticker/', { ...defaultOptions, options }))
    .then(pluckData);
};
