import React from 'react'
import Background from '../../../components/firstpage/Background'
import Logo from '../../../components/firstpage/Logo'
import Header from '../../../components/firstpage/Header'
import Paragraph from '../../../components/firstpage/Paragraph'
import Button from '../../../components/firstpage/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
