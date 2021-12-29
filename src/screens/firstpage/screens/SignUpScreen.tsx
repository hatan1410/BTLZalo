import React, {useCallback, useState} from 'react';
import {Keyboard, View} from 'react-native';
import styled from 'styled-components/native';
import {IC_ARROW_LEFT} from '../../../assets';
import BaseScreen from '../../../components/BaseScreen';
import Button from '../../../components/firstpage/Button';
import {apiService} from '../../../helper/ApiService';
import {AppColors} from '../../../theme/AppColors';

const SignUpScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassWord] = useState('');
  const [isErrorSignUp, setisErrorSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const doGoback = useCallback(() => {
    navigation.goBack();
  }, []);

  const doSignUp = useCallback(() => {
    Keyboard.dismiss();
    if (password !== confirmPassword) {
      console.log('Confirm password is not matched');
      setisErrorSignUp(true);
      setErrorMessage('Mật khẩu không trùng khớp');
    } else {
      apiService
        .postSignUp(username, password, phone, confirmPassword)
        .then(data => {
          console.log('postSignUp ', data.data);
          if (data.data.code === 1) {
            console.log('dang ky thanh cong');
            navigation.replace('LoginScreen');
          } else if (data.data.message === 'Username existed') {
            setisErrorSignUp(true);
            console.log('Username existed');
            setErrorMessage('Tên đăng nhập đã tồn tại');
          } else if (data.data.message === 'Phone number existed') {
            setisErrorSignUp(true);
            console.log('Phone number existed');
            setErrorMessage('Số điện thoại đã tồn tại');
          }
        })
        .catch(error => {
          console.log('postSignUpnerror ', error);
        });
    }
  }, [username, password, phone, confirmPassword]);
  return (
    <SView>
      <SSearchBarView>
        <STouchBack onPress={doGoback}>
          <SImageBack source={IC_ARROW_LEFT} />
        </STouchBack>
        <STitleText>Tạo tài khoản</STitleText>
      </SSearchBarView>
      <SContainerView>
        <STextInput
          placeholder="Số điện thoại"
          placeholderTextColor={'#808080'}
          onChangeText={val => {
            setPhone(val);
          }}
        />
        <STextInput
          placeholder="Tên đăng nhập"
          placeholderTextColor={'#808080'}
          onChangeText={val => {
            setUsername(val);
          }}
        />
        <STextInput
          placeholder="Mật khẩu"
          placeholderTextColor={'#808080'}
          onChangeText={val => {
            setPassword(val);
          }}
        />
        <STextInput
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor={'#808080'}
          onChangeText={val => {
            setConfirmPassWord(val);
          }}
        />
        {isErrorSignUp && <SErrorText>{errorMessage}</SErrorText>}
        <Button mode="contained" onPress={doSignUp} style={{borderRadius: 24}}>
          Đăng ký
        </Button>
      </SContainerView>
    </SView>
  );
};

const SView = styled.View`
  flex: 1;
  background-color: white;
`;

const SContainerView = styled.View`
  padding: 0px 16px 0px 16px;
`;
const SSearchBarView = styled.View`
  min-height: 50px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: ${() => {
    return AppColors.mainColor;
  }};
`;

const STouchBack = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  align-content: center;
  justify-content: center;
  margin-left: 10px;
`;

const SImageBack = styled.Image`
  width: 25px;
  height: 25px;
  align-self: center;
`;

const STitleText = styled.Text`
  color: white;
  margin-left: 10px;
  font-size: 18px;
`;

const STextInput = styled.TextInput`
  color: #000000;
  border-width: 0.5px;
  border-color: ${() => {
    return AppColors.gray;
  }};
  margin: 16px 0px 16px 0px;
`;

const SErrorText = styled.Text`
  color: #ff0000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  align-self: center;
`;
export default SignUpScreen;
