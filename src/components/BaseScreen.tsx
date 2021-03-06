import React, {memo} from 'react';
import styled from 'styled-components/native';
import {AppColors} from '../theme/AppColors';

interface Props {
  children: any;
}

const BaseScreen = memo((props: Props) => {
  return <SAreaView>{props.children}</SAreaView>;
});

const SAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${() => {
    return AppColors.backgroundColor;
  }}; ;
`;

export default BaseScreen;
