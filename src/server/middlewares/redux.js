import configureStore from '../../common/store/configureStore';

const configuredStore = configureStore();

export const reduxStoreMiddleware = async (req, res, next) => {
  const store = { ...configuredStore };
  const { actions } = res.locals;

  try {
    const promises = [];
    for (const action of actions) {
      if (action.promise) {
        promises.push(action.promise);
      }
      store.dispatch(action);
    }
    await Promise.all(promises);
  } catch (error) {
    console.error(error);
  }

  res.locals.store = store;
  next();
};
