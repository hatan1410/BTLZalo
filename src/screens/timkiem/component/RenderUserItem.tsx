import React, {memo, useCallback, useMemo, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {AppColors} from '../../../theme/AppColors';
import BaseImageView from '../../../components/BaseImageView';

interface Props {
  avatar: number;
  name: string;
}

const RenderUserItem = memo((props: Props) => {
  const nav = useNavigation();

  const doSelectTinNhan = useCallback(() => {
    //nav.navigate('', {name: props.name});
  }, []);

  const doKetBan = useCallback(() => {
    console.log('Ket Ban');
  }, []);

  return (
    <TouchableOpacity onPress={doSelectTinNhan}>
      <SContainer>
        <SImageAvatar />
        <View>
          <STextName>{props.name}</STextName>
          <STextSDT>Số điện thoại:</STextSDT>
        </View>
        <SKetBanView>
          <TouchableOpacity onPress={doKetBan}>
            <SKetBanButton>
              <STextKetBan>KẾT BẠN</STextKetBan>
            </SKetBanButton>
          </TouchableOpacity>
        </SKetBanView>
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

const STextSDT = styled.Text`
  font-size: 14px;
  color: gray;
`;

const SKetBanView = styled.View`
  position: absolute;
  right: 16px;
`;

const SKetBanButton = styled.View`
  width: 88px;
  height: 30px;
  border-radius: 25px;
  justify-content: center;
  background-color: #eff7fa;
`;

const STextKetBan = styled.Text`
  font-size: 12px;
  align-self: center;
  font-weight: bold;
  color: ${() => {
    return AppColors.mainColor;
  }};
`;

export default RenderUserItem;
