import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import {IC_CLOSE, IC_SEND, IC_SUA_POST, IC_XOA_POST} from '../../../assets';
import {apiService} from '../../../helper/ApiService';
import {AppColors} from '../../../theme/AppColors';
import RenderCommentItem from './RenderCommentItem';

interface Props {
  onPressSuaBai: () => void;
  onPressXoaBai: () => void;
}
const OptionModal = memo((props: Props) => {
  const doChinhSuaPost = useCallback(() => {
    console.log('doChinhSuaPost');
    props.onPressSuaBai();
  }, []);

  const doXoaPost = useCallback(() => {
    console.log('doXoaPost');
    props.onPressXoaBai();
  }, []);
  return (
    <SContainer>
      <SModalView>
        <TouchableOpacity onPress={doChinhSuaPost}>
          <SView>
            <SImage source={IC_SUA_POST} />
            <STextView>
              <STextAbove>Chỉnh sửa bài đăng</STextAbove>
              <STextBelow>Bao gồm quyền xem bài đăng, nội dung,...</STextBelow>
            </STextView>
          </SView>
        </TouchableOpacity>

        <SSeparatorView />
        <TouchableOpacity onPress={doXoaPost}>
          <SView>
            <SImage source={IC_XOA_POST} />
            <STextView>
              <STextAbove>Xóa bài đăng</STextAbove>
              <STextBelow>Xóa bài đăng của bạn</STextBelow>
            </STextView>
          </SView>
        </TouchableOpacity>
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
  background-color: white;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  padding: 10px 0px 25px 0px;
`;

const SView = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  padding: 16px 16px 0px 16px;
`;
const SImage = styled.Image`
  width: 23px;
  height: 23px;
  tint-color: #848d92;
  margin-right: 16px;
`;

const STextView = styled.View`
  width: 81%;
`;

const STextAbove = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;

const STextBelow = styled.Text`
  font-size: 14px;
  color: gray;
`;

const SSeparatorView = styled.View`
  height: 0.6px;
  background-color: ${() => {
    return AppColors.lightGray;
  }};
  margin-top: 14px;
  margin-left: 70px;
`;

export default OptionModal;
