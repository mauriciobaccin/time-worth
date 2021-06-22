import { DefaultTheme } from 'react-native-paper';

import Colors from './Colors';

export default {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    accent: Colors.SECONDARY,
    background: Colors.WHITE,
    primary: Colors.PRIMARY,
    text: Colors.TEXT,
  },
};
