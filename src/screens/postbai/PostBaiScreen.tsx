import React, {memo, useCallback, useEffect, useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {IC_ARROW_LEFT} from '../../assets';
import {AppColors} from '../../theme/AppColors';
import {apiService} from '../../helper/ApiService';

const PostBaiScreen = ({route, navigation}) => {
  const postId = route.params.postId || null;
  const nav = useNavigation();
  const [isEmtyPost, setIsEmtyPost] = useState<boolean>(true);
  const [content, setContent] = useState<string>(route.params.content);

  const goBack = () => {
    Keyboard.dismiss();
    nav.goBack();
  };

  const doGoback = useCallback(() => {
    if (!isEmtyPost) {
      Alert.alert('', 'Nội dung chưa được lưu. Bạn có chắc muốn hủy?', [
        {text: 'Không'},
        {text: 'Có', onPress: () => goBack()},
      ]);
      return;
    }
    goBack();
  }, [nav, isEmtyPost]);

  const doPostBai = useCallback(() => {
    if (isEmtyPost) {
      return;
    }
    if (postId === null) {
      postBai(content);
    } else {
      suaBai(postId);
    }
    Keyboard.dismiss();
    navigation.navigate('NhatKyScreen');
  }, [nav, content, isEmtyPost]);

  const postBai = useCallback(content => {
    apiService.postCreatePost(content).catch(error => {
      console.error(error);
    });
  }, []);

  const suaBai = postId => {
    apiService.postEditPost(postId, content).catch(error => {
      console.error(error);
    });
  };
  const NavigationBar = memo(() => {
    return (
      <SNavBarView>
        <STouchBack onPress={doGoback}>
          <SImageBack source={IC_ARROW_LEFT} />
        </STouchBack>
        <SText>Tạo bài viết</SText>
        <STouchPost isEmty={isEmtyPost} onPress={doPostBai}>
          <STextPost>ĐĂNG</STextPost>
        </STouchPost>
      </SNavBarView>
    );
  });

  return (
    <BaseScreen>
      <NavigationBar />
      <SViewContent>
        <STextInput
          multiline={true}
          value={content}
          onChangeText={val => {
            setContent(val);
            if (val === '') {
              setIsEmtyPost(true);
            } else {
              setIsEmtyPost(false);
            }
          }}
          placeholder="Bạn đang nghĩ gì?"
          placeholderTextColor={'#bebfbf'}
        />
      </SViewContent>
    </BaseScreen>
  );
};

const SViewContent = styled.View`
  flex: 94;
`;

const SNavBarView = styled.View`
  width: 100%;
  min-height: 50px;
  align-items: center;
  flex-direction: row;
  background-color: #fafafa;
`;

const STouchBack = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  align-content: center;
  justify-content: center;
  margin-left: 4px;
`;

const SImageBack = styled.Image`
  width: 25px;
  height: 25px;
  tint-color: #4a4a4a;
  align-self: center;
`;

const SText = styled.Text`
  color: black;
  font-size: 18px;
  margin-left: 5px;
`;

const STouchPost = styled.TouchableOpacity<{isEmty: boolean}>`
  align-content: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  opacity: ${props => {
    if (props.isEmty) {
      return 0.5;
    } else {
      return 1;
    }
  }};
`;

const STextPost = styled.Text`
  color: ${() => {
    return AppColors.mainColor;
  }};
  font-weight: bold;
`;

const STextInput = styled.TextInput`
  height: 100%;
  border-top-width: 0.5px;
  border-color: ${() => {
    return AppColors.lightGray2;
  }};
  background-color: white;
  text-align-vertical: top;
  color: black;
  padding: 16px;
  font-size: 18px;
`;
export default PostBaiScreen;
