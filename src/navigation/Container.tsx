import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateTimeWorth from '~/screens/create-time-worth';
import DetailsTimeWorth from '~/screens/details-time-worth';
import ListTimeWorth from '~/screens/list-time-worth';

import { appTheme, screenOptions } from './config';

const Stack = createStackNavigator();

function Container(): JSX.Element {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator initialRouteName="ListTimeWorth" screenOptions={screenOptions}>
        <Stack.Screen
          name="CreateTimeWorth"
          component={CreateTimeWorth}
          options={{ title: 'Criar novo valor' }}
        />
        <Stack.Screen
          name="DetailsTimeWorth"
          component={DetailsTimeWorth}
          options={{ title: 'Detalhes' }}
        />
        <Stack.Screen
          name="ListTimeWorth"
          component={ListTimeWorth}
          options={{ title: 'Listagem de valores' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Container;
