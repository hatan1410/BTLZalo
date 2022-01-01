import React, {memo, useCallback, useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import BaseImageView from '../../../components/BaseImageView';
import {AppColors} from '../../../theme/AppColors';

interface Props {
  id: number;
  name: string;
  onPress: () => void;
}

const RenderTinNhanItem = memo((props: Props) => {
  const doSelectTinNhan = useCallback(() => {
    props.onPress();
  }, []);
  return (
    <TouchableOpacity onPress={doSelectTinNhan}>
      <SView>
        <SContainerView>
          <SImageAvatar />
          <SMessageView>
            <SNameText>Ha Tan</SNameText>
            <SMessageText>Tin nhắn</SMessageText>
          </SMessageView>
        </SContainerView>
        <SSeparatorView />
      </SView>
    </TouchableOpacity>
  );
});

const SView = styled.View``;

const SContainerView = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  padding: 16px 0px 0px 16px;
`;
const SImageAvatar = styled(BaseImageView)`
  width: 48px;
  height: 48px;
  background-color: green;
  border-radius: 25px;
  margin-right: 16px;
`;

const SMessageView = styled.View`
  width: 81%;
`;

const SNameText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

const SMessageText = styled.Text`
  font-size: 14px;
  color: black;
`;

const SSeparatorView = styled.View`
  height: 0.6px;
  background-color: ${() => {
    return AppColors.lightGray;
  }};
  margin-top: 14px;
  margin-left: 75px;
`;

export default RenderTinNhanItem;
