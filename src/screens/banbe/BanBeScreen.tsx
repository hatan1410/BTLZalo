import React, {memo, useEffect, useCallback, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import {apiService} from '../../helper/ApiService';
import styled from 'styled-components/native';
import RenderBanBeItem from './component/RenderBanBeItem';

const BanBeScreen = ({navigation}) => {
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
        setListData(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const doLoiMoiKetBan = useCallback(() => {
    //nav.navigate('', {name: props.name});
  }, []);

  const ListHeaderComponent = memo(() => {
    return (
      <View>
        <TouchableOpacity onPress={doLoiMoiKetBan}>
          <SViewHeader>
            <SImage />
            <STextKetBan>Lời mời kết bạn</STextKetBan>
          </SViewHeader>
        </TouchableOpacity>
        <SViewHeader2>
          <STextBanBe>Bạn bè</STextBanBe>
        </SViewHeader2>
      </View>
    );
  });
  const renderItem = useCallback(({item}) => {
    return (
      <RenderBanBeItem avatar={item.name} name={item.name} onPress={() => {}} />
    );
  }, []);

  return (
    <BaseScreen>
      <SFlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<ListHeaderComponent />}
      />
    </BaseScreen>
  );
};

const SFlatList = styled(FlatList)`
  flex: 1;
`;

const SViewHeader = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  padding: 12px 0px 12px 16px;
  margin-bottom: 8px;
`;

const SViewHeader2 = styled.View`
  background-color: white;
  padding: 8px 0px 5px 0px;
`;

const STextKetBan = styled.Text`
  color: black;
  font-size: 16px;
  margin-left: 10px;
`;

const STextBanBe = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 14px;
  margin-left: 16px;
`;
const SImage = styled.Image`
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 25px;
  margin-right: 8px;
`;
export default BanBeScreen;
