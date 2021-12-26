import React, {memo, useCallback, useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {AppColors} from '../../../theme/AppColors';
import BaseImageView from '../../../components/BaseImageView';

interface Props {
  avatar: number;
  name: string;
}

const RenderBanBeItem = memo((props: Props) => {
  const nav = useNavigation();

  const doSelectTinNhan = useCallback(() => {
    //nav.navigate('', {name: props.name});
  }, []);
  return (
    <TouchableOpacity onPress={doSelectTinNhan}>
      <SContainer>
        <SImageAvatar />
        <STextName>{props.name}</STextName>
      </SContainer>
    </TouchableOpacity>
  );
});

const SContainer = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  padding: 12px 0px 12px 16px;
`;

const SImageAvatar = styled(BaseImageView)`
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 25px;
  margin-right: 16px;
`;
const STextName = styled.Text`
  font-size: 16px;
  color: black;
`;

export default RenderBanBeItem;
