import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  StartScreen,
  LoginScreen,
  FirstRegisterScreen,
  SecondRegisterScreen,
  CreatePassWord,
  ResetPasswordScreen,
} from './screens';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

export default function FirstScreen() {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="FirstRegisterScreen"
        component={FirstRegisterScreen}
      />
      <Stack.Screen
        name="SecondRegisterScreen"
        component={SecondRegisterScreen}
      />

      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />

      <Stack.Screen name="CreatePassWord" component={CreatePassWord} />
    </Stack.Navigator>
  );
}
