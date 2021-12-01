import React, {memo, useEffect, useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import BaseScreen from '../../components/BaseScreen';
import RenderPostItem from './component/RenderPostItem';
import {apiService} from '../../helper/ApiService';
import {AppColors} from '../../theme/AppColors';

const NhatKyScreen = memo((props: any) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [listData, setListData] = useState<any>([]);
  const nav = useNavigation();

  const doPostBai = useCallback(() => {
    nav.navigate('PostBaiScreen');
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getDataFakeApi();
  };

  const getDataFakeApi = useCallback(() => {
    apiService
      .getFakeApi2()
      .then(data => {
        setListData(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const DangBaiView = memo(() => {
    return (
      <TouchableHighlight onPress={doPostBai}>
        <SViewPostBai>
          <STextPostBai>Hôm nay bạn thế nào?</STextPostBai>
        </SViewPostBai>
      </TouchableHighlight>
    );
  });

  const renderPost = useCallback(({item, index}) => {
    return <RenderPostItem id={item.id} name={item.body} />;
  }, []);
  return (
    <BaseScreen>
      <FlatList
        data={listData}
        renderItem={renderPost}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadData}
            title={'Loading...'}
            colors={[AppColors.mainColor]}
          />
        }
        ListHeaderComponent={<DangBaiView />}
      />
    </BaseScreen>
  );
});

const SViewPostBai = styled.View`
  height: 70px;
  flex-direction: row;
  background-color: white;
  align-items: center;
`;

const STextPostBai = styled.Text`
  color: #bebfbf;
  font-size: 16px;
  margin-left: 16px;
`;

export default NhatKyScreen;
