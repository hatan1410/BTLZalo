import {useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import BaseScreen from '../../components/BaseScreen';

const CaNhanScreen = memo((props: any) => {
  const nav = useNavigation();
  const [listData, setListData] = useState<any>([]);
  const postId = 1;
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {};

  return (
    <BaseScreen>
      <Text style={styles.baseText}>CaNhanScreen</Text>
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

export default CaNhanScreen;
