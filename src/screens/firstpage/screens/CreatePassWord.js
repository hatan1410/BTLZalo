import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../../components/firstpage/Background'
import Logo from '../../../components/firstpage/Logo'
import Header from '../../../components/firstpage/Header'
import Button from '../../../components/firstpage/Button'
import TextInput from '../../../components/firstpage/TextInput'
import BackButton from '../../../components/firstpage/BackButton'
import Paragraph from '../../../components/firstpage/Paragraph'
import { AppColors } from '../../../theme/AppColors'
import { passwordValidator } from '../../../helper/firstpage/passwordValidator'
import { confirmPasswordValidator } from '../../../helper/firstpage/confirmPasswordValidator'

export default function CreatePassWord({ navigation }) {
  const [password, setPassword] = useState({ value: '', error: '' })
  const [comfirmPassword, setConfirmPassword] = useState({ value: '', error: '' })

  const onUpdatePassword = () => {
    
    const passwordError = passwordValidator(password.value)
    const confirmPasswordError = confirmPasswordValidator(password.value, comfirmPassword.value)
    if (passwordError || confirmPasswordError) {
      setPassword({ ...password, error: passwordError })
      setConfirmPassword({ ...comfirmPassword, error: confirmPasswordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Text style={{textAlign: 'center'}}>You can login with your mobile number or username</Text>
      <Header>zalo.chat.me</Header>
      <TextInput style={styles.login_input}
        label="Enter new password"
        returnKeyType="next"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        keyboardType="password"
      />
      <TextInput style={styles.login_input}
        label="Confirm new password"
        returnKeyType="done"
        value={comfirmPassword.value}
        onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
        error={!!comfirmPassword.error}
        errorText={comfirmPassword.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onUpdatePassword} style={{borderRadius: 24}}>
        Update password
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({

  login_input: {
    border: 'none',
    backgroundColor: 'white',
    borderColor: '#ccc'
  }
})
