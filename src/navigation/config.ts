import { DefaultTheme } from '@react-navigation/native';
import { HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';

import { Colors } from '~/config';

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.WHITE,
    card: Colors.WHITE,
    primary: Colors.PRIMARY,
  },
};

const rootOptions = {
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: Colors.TEXT,
  },
};

const screenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  ...rootOptions,
};

export { appTheme, rootOptions, screenOptions };
