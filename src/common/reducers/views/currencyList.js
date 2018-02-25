import { handle } from 'redux-pack';
import { createSelector } from 'reselect';
import { types as currencyTypes, getCurrencies } from '../entities/currencies';

export const CURRENCIES_SHOWN_STEP = 10;

export const types = {
  SEARCH_CURRENCIES: 'SEARCH_CURRENCIES',
  UPDATE_CURRENCIES: 'UPDATE_CURRENCIES',
  SET_CURRENCIES_SHOWN: 'SET_CURRENCIES_SHOWN'
};

export const initialState = {
  isLoading: false,
  error: null,
  currencyIds: [],
  currenciesState: {},
  search: '',
  currenciesShown: CURRENCIES_SHOWN_STEP
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case currencyTypes.FETCH_CURRENCIES:
      return handle(state, action, {
        start: prevState => ({ ...prevState, error: null, isLoading: true }),
        success: prevState => ({
          ...prevState,
          currencyIds: payload.map(coin => coin.id)
        }),
        failure: prevState => ({ ...prevState, error: payload }),
        finish: prevState => ({ ...prevState, isLoading: false })
      });
    case types.SEARCH_CURRENCIES:
      return { ...state, search: payload };
    case types.SET_CURRENCIES_SHOWN:
      return { ...state, currenciesShown: payload };
    case types.UPDATE_CURRENCIES:
      return {
        ...state,
        currenciesState: payload.reduce(
          (acc, currency) => ({
            ...acc,
            [currency.id]: {
              ...acc[currency.id],
              ...currency
            }
          }),
          state.currenciesState
        )
      };
    default:
      return state;
  }
};

export const actions = {
  searchCurrencies: searchString => ({
    type: types.SEARCH_CURRENCIES,
    payload: searchString
  }),
  updateCurrencies: currencies => ({
    type: types.UPDATE_CURRENCIES,
    payload: currencies
  }),
  setCurrenciesShown: amount => ({
    type: types.SET_CURRENCIES_SHOWN,
    payload: amount
  })
};

export const getCurrencyIds = state => state.views.currencyList.currencyIds;
export const getCurrencySearch = state => state.views.currencyList.search;
export const getCurrenciesState = state =>
  state.views.currencyList.currenciesState;
export const getCurrenciesByIds = createSelector(
  [getCurrencies, getCurrencyIds, getCurrenciesState, getCurrencySearch],
  (currencies, currencyIds, currenciesState, search) =>
    currencyIds
      .map(id => ({ ...currencies[id], ...currenciesState[id] }))
      .filter(c => c.name.toLowerCase().indexOf(search) > -1)
);
