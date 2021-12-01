import React, {memo, useCallback, useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {AppColors} from '../../../theme/AppColors';

interface Props {
  id: number;
  name: string;
}

const RenderPostItem = memo((props: Props) => {
  return (
    <View>
      <SContainer>
        <STextId>id: {props.id}</STextId>
        <STextTitle>name: {props.name}</STextTitle>
      </SContainer>
    </View>
  );
});

const SContainer = styled.View`
  margin-top: 8px;
  background-color: white;
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

export default RenderPostItem;
