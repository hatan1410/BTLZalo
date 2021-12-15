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
import { phoneValidator } from '../../../helper/firstpage/phoneValidator';


export default function SecondRegisterScreen({ navigation }) {
 
  const [phone, setPhone] = useState({ value: '', error: '' });

  const onNextSignup = () => {
    const phoneError = phoneValidator(phone.value);
    if (phoneError) {
      setPhone({ ...phone, error: phoneError });
      return;
    }
    navigation.navigate('SecondRegisterScreen')
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <Text>Create Account</Text>
      <Text style={{ textAlign: 'center' }}>Enter your new phone numer to register new account</Text>
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        autoCapitalize="none"
        autoCompleteType="phone"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
      />
     
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
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: AppColors.colors.primary,
  },
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
