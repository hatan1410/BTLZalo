import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {IC_ARROW_LEFT, IC_SEND} from '../../assets';
import BaseSafeAreaView from '../../components/BaseSafeAreaView';
import BaseScreen from '../../components/BaseScreen';
import {AppColors} from '../../theme/AppColors';

const TinNhanDetailScreen = ({route, navigation}) => {
  const name = route.params?.name;
  const nav = useNavigation();
  const [textMessage, setTextMessage] = useState<string>('');

  const doGoback = useCallback(() => {
    nav.goBack();
  }, [nav]);

  const doSendMessage = useCallback(() => {
    console.log('SendMessage: ' + textMessage);
  }, [textMessage]);

  return (
    <BaseScreen>
      <SSearchBarView>
        <STouchBack onPress={doGoback}>
          <SImageBack source={IC_ARROW_LEFT} />
        </STouchBack>
      </SSearchBarView>

      <STextInputView>
        <STextInput
          onChangeText={val => {
            setTextMessage(val);
          }}
          placeholder="Nhập bình luận"
          placeholderTextColor={'#848D92'}
        />
        <TouchableWithoutFeedback onPress={doSendMessage}>
          <SSendImage source={IC_SEND} />
        </TouchableWithoutFeedback>
      </STextInputView>
    </BaseScreen>
  );
};

const SSearchBarView = styled.View`
  min-height: 50px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${() => {
    return AppColors.mainColor;
  }};
`;

const STouchBack = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  align-content: center;
  justify-content: center;
  position: absolute;
  left: 10px;
`;

const SImageBack = styled.Image`
  width: 25px;
  height: 25px;
  align-self: center;
`;

const STextInputView = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  background-color: #fafafa;
  justify-content: flex-end;
  position: absolute;
  bottom: 0px;
  padding: 0px 16px 0px 16px;
  border-top-width: 0.5px;
  border-color: ${() => {
    return AppColors.lightGray;
  }};
`;

const STextInput = styled.TextInput`
  flex: 1;
  width: 50%;
  color: black;
  font-size: 16px;
  padding: 2px 5px 2px 5px;
`;

const SSendImage = styled.Image`
  width: 22px;
  height: 22px;
  align-self: center;
  tint-color: ${() => {
    return AppColors.mainColor;
  }};
`;

export default TinNhanDetailScreen;
