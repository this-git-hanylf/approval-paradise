/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from 'app/index.js';
import {BaseSetting} from '@config';
import messaging from '@react-native-firebase/messaging';
// import {name as appName} from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('message', remoteMessage);
});
AppRegistry.registerComponent(BaseSetting.name, () => App);
