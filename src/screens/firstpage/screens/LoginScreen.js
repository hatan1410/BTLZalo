import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Alert} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../../components/firstpage/Background'
import Logo from '../../../components/firstpage/Logo'
import Header from '../../../components/firstpage/Header'
import Button from '../../../components/firstpage/Button'
import TextInput from '../../../components/firstpage/TextInput'
import BackButton from '../../../components/firstpage/BackButton'
import Paragraph from '../../../components/firstpage/Paragraph'
import { AppColors } from '../../../theme/AppColors'
import { emailValidator } from '../../../helper/firstpage/emailValidator'
import { phoneValidator } from '../../../helper/firstpage/phoneValidator'
import { passwordValidator } from '../../../helper/firstpage/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const phoneError = phoneValidator(phone.value)
    const passwordError = passwordValidator(password.value)
    if (phoneError || passwordError) {
      setPhone({ ...phone, error: phoneError })
      setPassword({ ...password, error: passwordError })
      return
    }
    Alert.alert("log in")
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Text style={{textAlign: 'center'}}>You can login with your mobile number or username</Text>
      <Header>zalo.chat.me</Header>
      <TextInput style={styles.login_input}
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
      <TextInput style={styles.login_input}
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Recover password</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed} style={{borderRadius: 24}}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('FirstRegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: AppColors.colors.primary,
  },
  link: {
    fontWeight: 'bold',
    color: AppColors.colors.primary,
    borderRadius: 24
  },

  login_input: {
    border: 'none',
    backgroundColor: 'white',
    borderColor: '#ccc'
  }
})
