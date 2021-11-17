import React, {memo, useCallback, useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {AppColors} from '../../../theme/AppColors';

interface Props {
  id: number;
  title: string;
}

const RenderTinNhanItem = memo((props: Props) => {
  const nav = useNavigation();

  const doSelectTinNhan = useCallback(() => {
    nav.navigate('TinNhanDetailScreen', {id: props.id});
  }, []);
  return (
    <TouchableOpacity onPress={doSelectTinNhan}>
      <SContainer>
        <STextId>{props.id}</STextId>
        <STextTitle>{props.title}</STextTitle>
      </SContainer>
    </TouchableOpacity>
  );
});

const SContainer = styled.View`
  border-bottom-width: 1px;
  border-color: gray;
`;

const STextId = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: red;
`;
const STextTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${() => {
    return AppColors.mainColor;
  }};
`;

export default RenderTinNhanItem;
