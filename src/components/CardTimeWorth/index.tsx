import React from 'react';
import { List, TouchableRipple } from 'react-native-paper';

import { TimeWorth } from '~/types';

import Avatar from './Avatar';

import styles from './styles';

type PropsType = {
  item: TimeWorth;
};

function CardTimeWorth(props: PropsType): JSX.Element {
  const { item } = props;

  return (
    <TouchableRipple
      onPress={() => console.log('Edit do item', item)}
      rippleColor="rgba(23, 93, 131, 0.12)"
      style={styles.rippleContainer}>
      <List.Item
        title={item.title}
        description={item.description}
        left={(leftProps) => <Avatar {...leftProps} item={item} />}
      />
    </TouchableRipple>
  );
}

export default CardTimeWorth;
