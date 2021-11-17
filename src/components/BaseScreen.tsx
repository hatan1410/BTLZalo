import React, {memo} from 'react';
import styled from 'styled-components/native';
import SearchBar from './SearchBar';

interface Props {
  children: any;
}

const BaseScreen = memo((props: Props) => {
  return <SAreaView>{props.children}</SAreaView>;
});

const SAreaView = styled.SafeAreaView`
  flex: 1;
`;

export default BaseScreen;
