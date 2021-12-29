import React, {memo} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import BaseImageView from '../../../components/BaseImageView';
import {apiService} from '../../../helper/ApiService';
import {AppColors} from '../../../theme/AppColors';

interface Props {
  content: string;
  name: string;
  avatar: string;
}

const RenderCommentItem = memo((props: Props) => {
  return (
    <SView>
      <SContainerView>
        <SImageAvatar source={{uri: `${apiService.baseUrl}${props.avatar}`}} />
        <SCommentView>
          <SNameText>{props.name}</SNameText>
          <SCommentText>{props.content}</SCommentText>
        </SCommentView>
      </SContainerView>
      <SSeparatorView />
    </SView>
  );
});

const SView = styled.View``;

const SContainerView = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  margin: 10px 0px 0px 16px;
`;
const SImageAvatar = styled.Image`
  width: 40px;
  height: 40px;
  background-color: gray;
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
  margin-left: 70px;
`;

export default RenderCommentItem;
