import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const emptyMessage = 'Nenhum valor salvo, adicione um!';

function EmptyValues(): JSX.Element {
  return <Text style={styles.text}>{emptyMessage}</Text>;
}

export default EmptyValues;
