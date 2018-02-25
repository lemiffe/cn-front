import { handle } from 'redux-pack';
import { fetchCurrencies } from '../../lib/api';

export const types = {
  FETCH_CURRENCIES: 'FETCH_CURRENCIES'
};

export const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_CURRENCIES:
      return handle(state, action, {
        success: prevState =>
          payload.reduce(
            (acc, coin) => ({ ...acc, [coin.id]: coin }),
            prevState
          )
      });
    default:
      return state;
  }
};

export const actions = {
  fetchCurrencies: () => ({
    type: types.FETCH_CURRENCIES,
    promise: fetchCurrencies()
  }),
  fetchCurrenciesIfNeeded: () => (dispatch, getState) => {
    const { entities: { currencies } } = getState();

    if (currencies && Object.keys(currencies).length === 0) {
      dispatch(actions.fetchCurrencies());
    }
  }
};

export const getCurrencies = state => state.entities.currencies;
