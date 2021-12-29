import React from 'react';
import Background from '../../../components/firstpage/Background';
import Logo from '../../../components/firstpage/Logo';
import Header from '../../../components/firstpage/Header';
import Button from '../../../components/firstpage/Button';
import Paragraph from '../../../components/firstpage/Paragraph';
import {StyleSheet} from 'react-native';

export default function StartScreen({navigation}) {
  return (
    <Background>
      <Logo />
      <Header>Chat.zalo.me</Header>
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Đăng nhập
      </Button>
      <Button
        style={styles.btn}
        mode="outlined"
        onPress={() => navigation.navigate('SignUpScreen')}>
        Đăng ký
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 24,
  },
});
