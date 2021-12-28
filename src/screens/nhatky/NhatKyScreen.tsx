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
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import BaseScreen from '../../components/BaseScreen';
import RenderPostItem from './component/RenderPostItem';
import {apiService} from '../../helper/ApiService';
import {AppColors} from '../../theme/AppColors';
import CommentModal from './component/CommentModal';

const NhatKyScreen = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [listData, setListData] = useState<any>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const nav = useNavigation();

  const doPostBai = useCallback(() => {
    navigation.navigate('PostBaiScreen');
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
          <SAvatar />
          <STextPostBai>Hôm nay bạn thế nào?</STextPostBai>
        </SViewPostBai>
      </TouchableHighlight>
    );
  });

  const changeModalVisible = bool => {
    setIsShowModal(bool);
  };

  const renderPost = useCallback(({item, index}) => {
    return (
      <RenderPostItem
        id={item.id}
        name={item.body}
        onPressComment={() => {
          changeModalVisible(true);
        }}
      />
    );
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
      <Modal
        isVisible={isShowModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modalStyle}
        backdropOpacity={0.3}
        onBackdropPress={() => changeModalVisible(false)}>
        <CommentModal />
      </Modal>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
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

const SAvatar = styled.Image`
  width: 48px;
  height: 48px;
  background-color: green;
  border-radius: 25px;
  margin-left: 16px;
`;
export default NhatKyScreen;
