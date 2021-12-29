import {useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import Button from '../../components/firstpage/Button';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CaNhanScreen = ({route, navigation}) => {
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {};

  const doLogOut = () => {
    AsyncStorage.setItem('access_token', '');
    navigation.replace('Auth');
  };
  return (
    <BaseScreen>
      <SView>
        <Button mode="contained" onPress={doLogOut} style={styles.logout}>
          Đăng xuất
        </Button>
      </SView>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  logout: {
    width: '90%',
    borderRadius: 24,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 20,
  },
});

const SView = styled.View`
  flex: 1;
  padding: 0px 16px 0px 16px;
`;
export default CaNhanScreen;
