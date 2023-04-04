import {ApplicationActions} from '@actions'; //blm
import {BaseSetting} from '@config';
import {
  NavigationContainer,
  useNavigation,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {languageSelect} from '@selectors'; //blm
import * as Utils from '@utils';
import i18n from 'i18next';
import React, {useEffect, useRef, useState} from 'react';
import {initReactI18next} from 'react-i18next';
import {Platform, StatusBar, useColorScheme, View} from 'react-native';
// import {DarkModeProvider} from 'react-native-dark-mode';
// import {useDarkMode} from 'react-native-dark-mode';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {BaseColor} from '../config';
import {AppearanceProvider} from 'react-native-appearance';

import SignIn from '../screens/SignIn';
import Loading from '../screens/Loading'; //blm

const RootStack = createStackNavigator();
import MainStack from './MainStack';
// import Notification from '../screens/Notification'; //blm
import getUser from '../selectors/UserSelectors'; //blm
// import Skip from '../screens/Skip'; //blm
// import EProductDetail from '../screens/EProductDetail'; //blm
// import messaging from '@react-native-firebase/messaging'; //blm
import Home from '../screens/Home'; //blm
// import ResetPassword from '../screens/ResetPassword'; //blm

const Navigator = props => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  //   const isDarkMode = useDarkMode();
  const language = useSelector(languageSelect);
  const {navigation, route} = props;

  console.log('navigation from app for notif', props);
  // const navigation = useNavigation();
  console.log('route from app for notif', route);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigationRef = useRef(null);

  const user = useSelector(state => getUser(state)); //blm
  const [initialRoute, setInitialRoute] = useState('MainStack');
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'red',
    },
  };
  //  console.log('user null ?? ', user); //blm

  useEffect(() => {
    // Hide screen loading
    // SplashScreen.hide();
    console.log('scheme apasih', scheme);
    console.log('darkthem color', DarkTheme.colors.primary);
    console.log('defaulttheme color', DefaultTheme.colors.primary);
    // Config status bar
    // if (Platform.OS == 'android') {
    //   StatusBar.setBackgroundColor(
    //     scheme === 'dark'
    //       ? DarkTheme.colors.primary
    //       : DefaultTheme.colors.primary,
    //     // true,
    //   );
    // }
    StatusBar.setBackgroundColor(
      scheme === 'dark'
        ? DarkTheme.colors.primary
        : DefaultTheme.colors.primary,
      // true,
    );
    StatusBar.setBarStyle(
      scheme === 'dark' ? DarkTheme.colors.text : DefaultTheme.colors.text,
      true,
    );
    // setTimeout(() => {
    //   Utils.enableExperimental();
    //   setLoading(false);
    //   //    navigationRef?.current?.dispatch(StackActions.replace('OnBoard'));
    // }, 300);
    const onProcess = async () => {
      // Get current language of device
      const languageCode = language ?? BaseSetting.defaultLanguage;
      dispatch(ApplicationActions.onChangeLanguage(languageCode));
      // Config language for app
      await i18n.use(initReactI18next).init({
        compatibilityJSON: 'v3',
        resources: BaseSetting.resourcesLanguage,
        lng: languageCode,
        fallbackLng: languageCode,
      });
      setTimeout(() => {
        Utils.enableExperimental();
        setLoading(false);
        //    navigationRef?.current?.dispatch(StackActions.replace('OnBoard'));
      }, 300);
    };
    onProcess();
  }, []);

  console.log('loadin navigasi', loading);
  if (loading) {
    return null;
  }

  return (
    // <View style={{flex: 1, position: 'relative'}}>
    // <AppearanceProvider>
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRoute}
      >
        {loading ? (
          <RootStack.Screen name="Loading" component={Loading} />
        ) : user == null || user == '' || user == 0 ? (
          <RootStack.Screen name="SignIn" component={SignIn} />
        ) : (
          <RootStack.Screen
            name="MainStack"
            component={MainStack}
            options={{headerShown: false}}
          />
        )}
        {/* <RootStack.Screen name="MainStack" component={MainStack} /> */}
        {/* <RootStack.Screen name="Notification" component={Notification} />
            
              <RootStack.Screen name="Skip" component={Skip} />
              <RootStack.Screen
                name="ResetPassword"
                component={ResetPassword}
              />
              <RootStack.Screen
                name="EProductDetail"
                component={EProductDetail}
              /> */}
      </RootStack.Navigator>
    </NavigationContainer>
    // </AppearanceProvider>
    // </View>
  );
};

export default Navigator;
