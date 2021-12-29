import React, {memo, useEffect, useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import styled from 'styled-components/native';
import RenderTinNhanItem from './component/RenderTinNhanItem';
import {apiService} from '../../helper/ApiService';
import FakeApiModel from '../../model/FakeApiModel';

const TinNhanScreen = ({navigation}) => {
  const [listData, setListData] = useState<any>([]);
  const postId = 1;
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getDataFakeApi();
  };

  const getDataFakeApi = useCallback(() => {
    apiService
      .getFakeApi(postId)
      .then(data => {
        //console.log('getApi ', data.data);
        setListData(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderItem = useCallback(({item}) => {
    return (
      <RenderTinNhanItem
        id={item.id}
        name={item.name}
        onPress={() => {
          navigation.navigate('TinNhanDetailScreen', {name: item.name});
        }}
      />
    );
  }, []);

  return (
    <BaseScreen>
      <SView>
        <SFlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SView>
    </BaseScreen>
  );
};

const SView = styled.View`
  flex: 1;
  background-color: white;
`;

const SFlatList = styled(FlatList)`
  flex: 1;
`;

export default TinNhanScreen;
