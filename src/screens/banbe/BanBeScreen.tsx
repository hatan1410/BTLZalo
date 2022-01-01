import React, {memo, useEffect, useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import {apiService} from '../../helper/ApiService';
import styled from 'styled-components/native';
import RenderBanBeItem from './component/RenderBanBeItem';
import {AppColors} from '../../theme/AppColors';

const BanBeScreen = ({navigation}) => {
  const [listData, setListData] = useState<any>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    loadData();
  });

  const loadData = () => {
    getUserFollowList();
  };

  const getUserFollowList = useCallback(() => {
    apiService
      .postUserFollowList()
      .then(data => {
        setListData(data.data.users);
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
      <RenderBanBeItem
        avatar={item.avatar}
        name={item.fullname}
        onPress={() => {}}
      />
    );
  }, []);

  return (
    <BaseScreen>
      <SFlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadData}
            title={'Loading...'}
            colors={[AppColors.mainColor]}
          />
        }
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
  background-color: gray;
  border-radius: 25px;
  margin-right: 8px;
`;
export default BanBeScreen;
