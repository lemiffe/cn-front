import { handle } from 'redux-pack';
import { fetchCoins } from '../../lib/api';

export const types = {
  FETCH_COINS: 'FETCH_COINS'
};

export const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_COINS:
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
  fetchCoins: () => ({
    type: types.FETCH_COINS,
    promise: fetchCoins()
  }),
  fetchCoinsIfNeeded: () => (dispatch, getState) => {
    const { entities: { coins } } = getState();

    if (Object.keys(coins).length === 0) {
      dispatch(actions.fetchCoins());
    }
  }
};

export const getCoins = state => state.entities.coins;
