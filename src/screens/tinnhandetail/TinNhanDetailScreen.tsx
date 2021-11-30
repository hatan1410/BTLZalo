import React, {memo} from 'react';
import styled from 'styled-components/native';
import BaseSafeAreaView from '../../components/BaseSafeAreaView';

const TinNhanDetailScreen = memo((props: any) => {
  const name = props.route.params?.name;
  return (
    <BaseSafeAreaView>
      <SText>TinNhanDetailScreen</SText>
      <SText>name: {name}</SText>
    </BaseSafeAreaView>
  );
});

const SText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: red;
`;

export default TinNhanDetailScreen;
