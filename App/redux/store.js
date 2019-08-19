import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// UPDATE https://github.com/rt2zz/redux-persist/blob/master/docs/MigrationGuide-v5.md

import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';

// Create store with middleware
const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(thunk, logger))
);

// Combine store and AsyncStorage
// const persistedReducer = persistReducer(persistConfig, rootReducer)
persistStore(store, { storage: AsyncStorage });

export default store;
