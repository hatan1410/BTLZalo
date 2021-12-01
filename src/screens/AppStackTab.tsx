import React, {memo, useEffect, useCallback, useState} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TinNhanScreen from './tinnhan/TinNhanScreen';
import NhatKyScreen from './nhatky/NhatKyScreen';
import LoginScreen from './login/LoginScreen';
import BanBeScreen from './banbe/BanBeScreen';
import styled from 'styled-components/native';
import {IC_BAN_BE, IC_NHAT_KY, IC_TIM_KIEM, IC_TIN_NHAN} from '../assets';
import TimKiemScreen from './timkiem/TimKiemScreen';
import {useNavigation} from '@react-navigation/native';
import TinNhanDetailScreen from './tinnhandetail/TinNhanDetailScreen';
import {AppColors} from '../theme/AppColors';
import PostBaiScreen from './postbai/PostBaiScreen';
//import { useUserData } from "../stores/user/hooks";

class Screens_Name {
  TinNhanScreen: string = 'TinNhanScreen';
  BanBeScreen: string = 'BanBeScreen';
  NhatKyScreen: string = 'NhatKyScreen';
  TimKiemScreen: string = 'TimKiemScreen';
  TinNhanDetailScreen: string = 'TinNhanDetailScreen';
  PostBaiScreen: string = 'PostBaiScreen';
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabStack = createStackNavigator();
export const screensName = new Screens_Name();

export const AppStackTab = memo(() => {
  //const userData = useUserData();
  const [isLoged, setIsLoged] = useState<boolean>();
  const nav = useNavigation();

  const doGoTimKiemScreen = useCallback(() => {
    console.log('Pressed');
    nav.navigate('TimKiemScreen');
  }, [nav]);

  useEffect(() => {
    setIsLoged(true);
  }, []);

  const stackNav = useCallback((stack_key: string) => {
    return (
      <TabStack.Navigator
        initialRouteName={stack_key}
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Stack.Screen
          name={screensName.TinNhanScreen}
          component={TinNhanScreen}
        />
        <Stack.Screen name={screensName.BanBeScreen} component={BanBeScreen} />
        <Stack.Screen
          name={screensName.NhatKyScreen}
          component={NhatKyScreen}
        />
        <Stack.Screen
          name={screensName.TinNhanDetailScreen}
          component={TinNhanDetailScreen}
        />
      </TabStack.Navigator>
    );
  }, []);

  const stackTinNhanScreen = memo(() => {
    return stackNav(screensName.TinNhanScreen);
  });

  const stackBanBeScreen = memo(() => {
    return stackNav(screensName.BanBeScreen);
  });

  const stackNhatKyScreen = memo(() => {
    return stackNav(screensName.NhatKyScreen);
  });

  const SearchBar = memo(() => {
    return (
      <TouchableWithoutFeedback onPress={doGoTimKiemScreen}>
        <SViewSearchBar>
          <SImageSearch source={IC_TIM_KIEM} />
          <STextSearch>Tìm bạn bè</STextSearch>
        </SViewSearchBar>
      </TouchableWithoutFeedback>
    );
  });

  const StackScreen = memo(() => {
    return (
      <SView>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: 'transparent',
            },
          }}>
          <Stack.Screen name={'TabBar'} component={TabBar} />
          <Stack.Screen
            name={screensName.TimKiemScreen}
            component={TimKiemScreen}
          />
          <Stack.Screen
            name={screensName.PostBaiScreen}
            component={PostBaiScreen}
          />
        </Stack.Navigator>
      </SView>
    );
  });

  const TabBar = memo(() => {
    return (
      <SView>
        <SearchBar />
        <SViewTabBar>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let images = {
                  stackTinNhanScreen: IC_TIN_NHAN,
                  stackBanBeScreen: IC_BAN_BE,
                  stackNhatKyScreen: IC_NHAT_KY,
                };
                let iconName = images[route.name];
                return <SImage color={color} source={iconName} />;
              },
              tabBarActiveTintColor: AppColors.mainColor,
              tabBarInactiveTintColor: 'black',
            })}>
            <Tab.Screen
              name="stackTinNhanScreen"
              component={stackTinNhanScreen}
              options={{title: 'Tin nhắn', headerShown: false}}
            />
            <Tab.Screen
              name="stackBanBeScreen"
              component={stackBanBeScreen}
              options={{title: 'Bạn bè', headerShown: false}}
            />
            <Tab.Screen
              name="stackNhatKyScreen"
              component={stackNhatKyScreen}
              options={{title: 'Nhật ký', headerShown: false}}
            />
          </Tab.Navigator>
        </SViewTabBar>
      </SView>
    );
  });

  return (
    <SView>
      {isLoged && <StackScreen />}
      {!isLoged && <LoginScreen />}
    </SView>
  );
});

const SView = styled.View`
  flex: 1;
`;

const SImage = styled.Image<{color: string}>`
  width: 20px;
  height: 20px;
  tint-color: ${$p => $p.color};
`;

const SViewSearchBar = styled.View`
  flex: 6;
  flex-direction: row;
  background-color: ${() => {
    return AppColors.mainColor;
  }};
  align-items: center;
`;

const SViewTabBar = styled.View`
  flex: 94;
`;

const SImageSearch = styled.Image`
  width: 18px;
  height: 18px;
  margin: 0px 20px 0px 20px;
`;

const STextSearch = styled.Text`
  font-size: 16px;
`;
