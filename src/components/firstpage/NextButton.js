import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Dimensions } from 'react-native'

export default function BackButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen_Account')} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/firstpage/arrow_next.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10 + getStatusBarHeight(),
    right: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})
