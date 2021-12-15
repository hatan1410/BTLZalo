import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../../../components/firstpage/Background';
import Logo from '../../../components/firstpage/Logo';
import Header from '../../../components/firstpage/Header';
import Button from '../../../components/firstpage/Button';
import TextInput from '../../../components/firstpage/TextInput';
import BackButton from '../../../components/firstpage/BackButton';
import NextButton from '../../../components/firstpage/NextButton';
import NameTips from '../../../components/firstpage/NameTips';
import { AppColors } from '../../../theme/AppColors'
import { emailValidator } from '../../../helper/firstpage/emailValidator';
import { passwordValidator } from '../../../helper/firstpage/passwordValidator';
import { nameValidator } from '../../../helper/firstpage/nameValidator';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' });

  const onNextSignup = () => {
    const nameError = nameValidator(name.value);
    if (nameError) {
      setName({ ...name, error: nameError });
      return;
    }
    navigation.navigate('SecondRegisterScreen')
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <Text style={{ fontWeight: '300', textAlign: 'left' }}>Zalo name</Text>
      <TextInput
        label="Contains 2-40 characters"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <NameTips />

    
      <TouchableOpacity   
        onPress={onNextSignup}
        style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/firstpage/arrow_next.png')}
        />
      </TouchableOpacity>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20 + getStatusBarHeight(),
    right: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});
