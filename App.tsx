import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'expo-status-bar';

import NavigationContainer from '~/navigation';
import createStore from '~/store';
import { theme } from '~/config';

export default function App(): JSX.Element {
  const { store, persistor } = createStore();

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor="transparent" translucent />
          <NavigationContainer />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}
