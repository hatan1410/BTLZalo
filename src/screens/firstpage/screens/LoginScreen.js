import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Alert,
  Keyboard,
} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../../../components/firstpage/Background';
import Logo from '../../../components/firstpage/Logo';
import Header from '../../../components/firstpage/Header';
import Button from '../../../components/firstpage/Button';
import TextInput from '../../../components/firstpage/TextInput';
import BackButton from '../../../components/firstpage/BackButton';
import Paragraph from '../../../components/firstpage/Paragraph';
import {AppColors} from '../../../theme/AppColors';
import {emailValidator} from '../../../helper/firstpage/emailValidator';
import {phoneValidator} from '../../../helper/firstpage/phoneValidator';
import {passwordValidator} from '../../../helper/firstpage/passwordValidator';
import {apiService} from '../../../helper/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [isLoginFail, setIsLoginFail] = useState(false);

  const onLoginPressed = () => {
    Keyboard.dismiss();
    setIsLoginFail(false);
    apiService
      .postSignIn(username.value, password.value)
      .then(data => {
        console.log('postSignIn ', data.data);
        if (data.data.code === 1) {
          console.log('dang nhap thanh cong');
          AsyncStorage.setItem('access_token', data.data.access_token);
          navigation.navigate('App');
        } else {
          console.log('dang nhap that bai');
          setIsLoginFail(true);
        }
      })
      .catch(error => {
        console.log('postSignInerror ', error);
      });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>zalo.chat.me</Header>
      <TextInput
        style={styles.login_input}
        label="Tên đăng nhập"
        returnKeyType="next"
        onChangeText={text => setUsername({value: text, error: ''})}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.login_input}
        label="Mật khẩu"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Lấy lại mật khẩu</Text>
        </TouchableOpacity>
      </View>
      {isLoginFail && <SErrorText>Đăng nhập thất bại</SErrorText>}
      <Button
        mode="contained"
        onPress={onLoginPressed}
        style={{borderRadius: 24}}>
        Đăng nhập
      </Button>
      <View style={styles.row}>
        <Text>Bạn chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
          <Text style={styles.link}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: AppColors.mainColor,
  },
  link: {
    fontWeight: 'bold',
    color: AppColors.mainColor,
    borderRadius: 24,
  },

  login_input: {
    backgroundColor: 'white',
  },
});

const SErrorText = styled.Text`
  color: #ff0000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;
