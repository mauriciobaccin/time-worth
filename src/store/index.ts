import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './reducers';

import { Store } from '~/types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0,
};

const devToolsOptions = {};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (): Store => {
  const { releaseChannel } = Constants.manifest;
  let enhancers;

  if (!releaseChannel) {
    enhancers = devToolsEnhancer(devToolsOptions);
  }

  const store = createStore(persistedReducer, enhancers);
  const persistor = persistStore(store);

  return { store, persistor };
};
