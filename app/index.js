import React, {useEfffect, useState} from 'react';
import {View, Text} from 'react-native';
import App from '../app/navigation';
import {Provider} from 'react-redux';
// import Provider from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as Utils from '@utils';
// import { store } from './store';
import {persistor, store} from '../app/store/index';
// /Users/hany-macbook/Documents/Project/tuansingnewcreate/app/store/index.js
import firebase from 'firebase/app';
import {enableScreens} from 'react-native-screens';
enableScreens(false);

Utils.setupLayoutAnimation();

const AppApprovalPaku = () => {
  //   const firebaseConfig = {};

  //   if (firebase.apps.length === 0) {
  //   firebase.initializeApp(firebaseConfig);
  //   }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          {/* <View>
            <Text>ini bakal app</Text>
          </View> */}
          <App />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppApprovalPaku;
