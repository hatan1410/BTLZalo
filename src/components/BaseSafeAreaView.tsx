import React, {memo} from 'react';
import styled from 'styled-components/native';

interface Props {
  children: any;
}

const BaseSafeAreaView = memo((props: Props) => {
  return <SAreaView>{props.children}</SAreaView>;
});

const SAreaView = styled.SafeAreaView`
  flex: 1;
`;

export default BaseSafeAreaView;
