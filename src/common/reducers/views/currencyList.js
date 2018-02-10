import { handle } from 'redux-pack';
import { createSelector } from 'reselect';
import { types as currencyTypes, getCurrencies } from '../entities/currencies';

export const types = {
  SEARCH_CURRENCIES: 'SEARCH_CURRENCIES',
  UPDATE_CURRENCIES: 'UPDATE_CURRENCIES'
};

export const initialState = {
  isLoading: false,
  error: null,
  currencyIds: [],
  currenciesState: {},
  search: ''
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
  filterCurrencies: searchString => ({
    type: types.SEARCH_CURRENCIES,
    payload: searchString
  }),
  updateCurrencies: currencies => ({
    type: types.UPDATE_CURRENCIES,
    payload: currencies
  })
};

export const getCurrencyIds = state => state.views.currencyList.currencyIds;
export const getCurrenciesState = state =>
  state.views.currencyList.currenciesState;
export const getCurrenciesByIds = createSelector(
  [getCurrencies, getCurrencyIds, getCurrenciesState],
  (currencies, currencyIds, currenciesState) =>
    currencyIds.map(
      id =>
        currenciesState[id]
          ? Object.assign(currencies[id], currenciesState[id])
          : currencies[id]
    )
);
