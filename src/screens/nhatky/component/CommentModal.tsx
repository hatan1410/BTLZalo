import React, {memo, useCallback, useEffect, useState} from 'react';
import {FlatList, Keyboard, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {IC_CLOSE, IC_SEND} from '../../../assets';
import {apiService} from '../../../helper/ApiService';
import {AppColors} from '../../../theme/AppColors';
import RenderCommentItem from './RenderCommentItem';

interface Props {
  postId: string;
  onPressClose: () => void;
}
const CommentModal = memo((props: Props) => {
  const [listData, setListData] = useState<any>([]);
  const [textComment, setTextComment] = useState<string>('');
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getDataFakeApi();
  };

  const getDataFakeApi = useCallback(() => {
    apiService
      .postListComment(props.postId)
      .then(data => {
        setListData(data.data.comments);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const doCloseModal = useCallback(() => {
    console.log('CloseModal');
    props.onPressClose();
  }, []);

  const doSendComment = useCallback(() => {
    Keyboard.dismiss();
    setTextComment('');
    console.log('SendComment: ' + textComment);
    if (textComment !== '' || textComment !== null) {
      apiService
        .postCreateComment(props.postId, textComment)
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          loadData();
        });
    }
  }, [textComment]);

  const renderComment = useCallback(({item, index}) => {
    return (
      <RenderCommentItem
        content={item.content}
        name={item.user_username}
        avatar={item.user_avatar}
      />
    );
  }, []);

  return (
    <SContainer>
      <SModalView>
        <STitleView>
          <SText>Bình luận</SText>
          <SCloseView>
            <TouchableWithoutFeedback onPress={doCloseModal}>
              <SCloseImage source={IC_CLOSE} />
            </TouchableWithoutFeedback>
          </SCloseView>
        </STitleView>
        <SSeparatorView />

        <FlatList
          data={listData}
          renderItem={renderComment}
          keyExtractor={(item, index) => index.toString()}
        />
        <STextInputView>
          <STextInput
            value={textComment}
            onChangeText={val => {
              setTextComment(val);
            }}
            placeholder="Nhập bình luận"
            placeholderTextColor={'#848D92'}
          />
          <TouchableWithoutFeedback onPress={doSendComment}>
            <SSendImage source={IC_SEND} />
          </TouchableWithoutFeedback>
        </STextInputView>
      </SModalView>
    </SContainer>
  );
});

const SContainer = styled.View`
  flex: 1;
  background-color: '#00000058';
  justify-content: flex-end;
`;

const SModalView = styled.View`
  width: 100%;
  min-height: 55%;
  background-color: white;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const STitleView = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 14px 0px 14px 0px;
`;

const SText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

const SCloseView = styled.View`
  align-self: center;
  position: absolute;
  right: 16px;
`;

const SCloseImage = styled.Image`
  width: 18px;
  height: 18px;
`;

const SSeparatorView = styled.View`
  height: 0.6px;
  background-color: ${() => {
    return AppColors.lightGray;
  }};
`;

const STextInputView = styled.View`
  height: 50px;
  flex-direction: row;
  background-color: #fafafa;
  justify-content: flex-end;
  padding: 0px 16px 0px 16px;
  border-top-width: 0.5px;
  border-color: ${() => {
    return AppColors.lightGray;
  }};
`;

const STextInput = styled.TextInput`
  flex: 1;
  width: 50%;
  color: black;
  font-size: 16px;
  padding: 2px 5px 2px 5px;
`;

const SSendImage = styled.Image`
  width: 22px;
  height: 22px;
  align-self: center;
  tint-color: ${() => {
    return AppColors.mainColor;
  }};
`;

export default CommentModal;
