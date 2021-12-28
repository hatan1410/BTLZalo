import React, {memo} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import BaseImageView from '../../../components/BaseImageView';
import {AppColors} from '../../../theme/AppColors';

const RenderCommentItem = memo(() => {
  return (
    <SView>
      <SImageAvatar />
      <SCommentView>
        <SNameText>Ha Tan</SNameText>
        <SCommentText>Comment</SCommentText>
        <SSeparatorView />
      </SCommentView>
    </SView>
  );
});

const SView = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  margin: 10px 0px 0px 16px;
`;

const SImageAvatar = styled(BaseImageView)`
  width: 40px;
  height: 40px;
  background-color: green;
  border-radius: 25px;
  margin-right: 16px;
`;

const SCommentView = styled.View`
  width: 81%;
`;

const SNameText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;

const SCommentText = styled.Text`
  font-size: 15px;
  color: black;
`;

const SSeparatorView = styled.View`
  height: 0.6px;
  background-color: ${() => {
    return AppColors.lightGray;
  }};
  margin-top: 14px;
`;

export default RenderCommentItem;
