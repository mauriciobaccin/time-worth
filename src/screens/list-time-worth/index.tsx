import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView } from 'react-native';
import { FAB } from 'react-native-paper';

import { CardTimeWorth, EmptyValues } from '~/components';
import { Colors } from '~/config';
import { RootState, TimeWorth } from '~/types';

import styles from './styles';

function ListValue(): JSX.Element {
  const navigation = useNavigation();

  const listValues: TimeWorth[] = useSelector(({ timeWorth }: RootState) => timeWorth);

  function renderItem({ item }) {
    return <CardTimeWorth item={item} key={item.uuid} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListEmptyComponent={EmptyValues}
        data={listValues}
        keyExtractor={(item) => item.uuid}
        renderItem={renderItem}
      />

      <FAB
        color={Colors.WHITE}
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('CreateTimeWorth')}
      />
    </SafeAreaView>
  );
}

export default ListValue;
