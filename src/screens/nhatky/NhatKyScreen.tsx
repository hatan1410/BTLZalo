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
  ActivityIndicator,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import BaseScreen from '../../components/BaseScreen';
import RenderPostItem from './component/RenderPostItem';
import {apiService} from '../../helper/ApiService';
import {AppColors} from '../../theme/AppColors';
import CommentModal from './component/CommentModal';
import OptionModal from './component/OptionModal';

const NhatKyScreen = ({route, navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [listData, setListData] = useState<any>([]);
  const [isShowCommentModal, setIsShowCommentModal] = useState<boolean>(false);
  const [isShowOptionModal, setIsShowOptionModal] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState(true);
  const [userAvatar, setUserAvatar] = useState<any>();
  const [postId, setpostId] = useState('');
  const [contentPost, setContentPost] = useState('');
  const nav = useNavigation();
  const isListChanged = route.params?.isListChanged || null;

  const doPostBai = useCallback(() => {
    navigation.navigate('PostBaiScreen', {
      postId: '',
      content: '',
    });
  }, []);

  useEffect(() => {
    console.log('useEffect');
    loadData();
  }, []);

  // useEffect(() => {
  //   console.log('useEffect post bai');
  //   loadData();
  // }, [isListChanged]);

  const loadData = () => {
    getListPost();
    getUserProfile();
  };

  const getListPost = useCallback(() => {
    apiService
      .postListPost()
      .then(data => {
        setListData(data.data.feeds);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setisLoading(false));
  }, []);

  const getUserProfile = useCallback(() => {
    apiService
      .postUserProfile()
      .then(data => {
        setUserAvatar(data.data.user.avatar);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setisLoading(false));
  }, []);

  const doSuaBai = useCallback(() => {
    navigation.navigate('PostBaiScreen', {
      postId: postId,
      content: contentPost,
    });
  }, [contentPost, postId]);

  const doXoaBai = () => {
    Alert.alert('', 'Bạn có muốn xóa bài đăng không?', [
      {text: 'Không'},
      {text: 'Có', onPress: () => removePost()},
    ]);
    changeOptionModalVisible(false);
  };

  const removePost = () => {
    apiService
      .postRemovePost(postId)
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        getListPost();
      });
  };
  const DangBaiView = useCallback(() => {
    console.log('ava', userAvatar);
    return (
      <TouchableHighlight onPress={doPostBai}>
        <SViewPostBai>
          <SAvatar source={{uri: `${apiService.baseUrl}${userAvatar}`}} />
          <STextPostBai>Hôm nay bạn thế nào?</STextPostBai>
        </SViewPostBai>
      </TouchableHighlight>
    );
  }, [userAvatar]);

  const changeCommentModalVisible = bool => {
    setIsShowCommentModal(bool);
  };

  const changeOptionModalVisible = bool => {
    setIsShowOptionModal(bool);
  };

  const likePost = post_id => {
    apiService.postLikePost(post_id).catch(error => {
      console.error(error);
    });
  };
  const renderPost = useCallback(({item, index}) => {
    return (
      <RenderPostItem
        content={item.content}
        likes={item.likes}
        comments={item.comments}
        since={item.since}
        name={item.user_fullname}
        avatar={item.user_avatar}
        onPressComment={() => {
          setpostId(item._id);
          changeCommentModalVisible(true);
        }}
        onPressOption={() => {
          setpostId(item._id);
          setContentPost(item.content);
          changeOptionModalVisible(true);
        }}
        opPressLike={() => {
          likePost(item._id);
        }}
      />
    );
  }, []);

  return (
    <BaseScreen>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={listData}
          renderItem={renderPost}
          keyExtractor={item => `key-${item._id}`}
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
      )}
      <Modal
        isVisible={isShowCommentModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modalStyle}
        backdropOpacity={0.3}
        onBackdropPress={() => changeCommentModalVisible(false)}>
        <CommentModal
          postId={postId}
          onPressClose={() => changeCommentModalVisible(false)}
        />
      </Modal>

      <Modal
        isVisible={isShowOptionModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modalStyle}
        backdropOpacity={0.3}
        onBackdropPress={() => changeOptionModalVisible(false)}>
        <OptionModal
          onPressSuaBai={() => {
            doSuaBai();
          }}
          onPressXoaBai={() => {
            doXoaBai();
          }}
        />
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
  background-color: gray;
  border-radius: 25px;
  margin-left: 16px;
`;
export default NhatKyScreen;
