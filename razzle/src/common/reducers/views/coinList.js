import { handle } from 'redux-pack';
import { createSelector } from 'reselect';
import { types as coinTypes, getCoins } from '../entities/coins';

export const types = {
  SEARCH_COINS: 'SEARCH_COINS',
  SELECT_COINS: 'SELECT_COINS'
};

export const initialState = {
  isLoading: false,
  error: null,
  coinIds: [],
  coinsState: {},
  search: ''
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case coinTypes.FETCH_COINS:
      return handle(state, action, {
        start: prevState => ({ ...prevState, error: null, isLoading: true }),
        success: prevState => ({
          ...prevState,
          coinIds: payload.map(coin => coin.id)
        }),
        failure: prevState => ({ ...prevState, error: payload }),
        finish: prevState => ({ ...prevState, isLoading: false })
      });
    case types.SEARCH_COINS:
      return { ...state, search: payload };
    case types.SELECT_COINS:
      return {
        ...state,
        coinStates: payload.reduce(
          (acc, coinId) => ({
            ...acc,
            [coinId]: { ...acc[coinId], isSelected: true }
          }),
          state.coinsState
        )
      };
    default:
      return state;
  }
};

export const actions = {
  filterCoins: searchString => ({
    type: types.SEARCH_COINS,
    payload: searchString
  }),
  selectCoins: selectedCoinIds => ({
    type: types.SELECT_COINS,
    payload: selectedCoinIds
  })
};

export const getCoinIds = state => state.views.coinsList.coinIds;
export const getCoinsState = state => state.views.coinsList.coinsState;
export const getCoinsByIds = createSelector(
  [getCoins, getCoinIds, getCoinsState],
  (coins, coinIds, coinsState) =>
    coinIds.map(
      id =>
        coinsState[id] ? Object.assign(coins[id], coinsState[id]) : coins[id]
    )
);
