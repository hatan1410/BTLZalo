import React, {memo} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

const CommentModal = memo(() => {
  return (
    <SContainer>
      <SModalView>
        <SText>Comment</SText>
      </SModalView>
    </SContainer>
  );
});

const SText = styled.Text`
  color: black;
`;

const SContainer = styled.View`
  flex: 1;
  background-color: '#00000058';
  justify-content: flex-end;
`;

const SModalView = styled.View`
  width: 100%;
  height: 55%;
  background-color: white;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

export default CommentModal;
