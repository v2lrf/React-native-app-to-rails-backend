import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';



const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(thunk, logger),
  ),
  autoRehydrate()
);

persistStore(store, { storage: AsyncStorage });

export default store;