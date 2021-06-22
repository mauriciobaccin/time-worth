import React from 'react';
import { Text, View } from 'react-native';

import { TimeWorth } from '~/types';

import styles from './styles';

type PropsType = {
  item: TimeWorth;
  style: React.CSSProperties;
};

function ListValuePerHour(props: PropsType): JSX.Element {
  const { item, style: defaultStyle } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Valor:</Text>
      {/* <Text style={styles.textValue}>{`R$ ${item.valueHour}`}</Text> */}
    </View>
  );
}

export default ListValuePerHour;
