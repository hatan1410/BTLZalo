import {useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import styled from 'styled-components/native';
import RenderTinNhanItem from './component/RenderTinNhanItem';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

const TinNhanScreen = memo((props: any) => {
  const nav = useNavigation();

  const renderItem = useCallback(({item}) => {
    return <RenderTinNhanItem id={item.id} title={item.title} />;
  }, []);

  return (
    <BaseScreen>
      <Text style={styles.baseText}>TinNhanScreen</Text>
      <SFlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </BaseScreen>
  );
});

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

const SFlatList = styled(FlatList)`
  flex: 1;
  padding-top: 20px;
`;

export default TinNhanScreen;
