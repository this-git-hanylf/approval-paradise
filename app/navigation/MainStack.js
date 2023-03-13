import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//Components
import {
  BottomTabNavigatorMazi,
  tabBarIcon,
  CustomTabBarButton,
} from './components';

// Screens Declare Import
import HomeScreen from '../screens/Home';
import ContactScreen from '../screens/Contact';
// import AboutUs from '../screens/About';
import AboutScreen from '../screens/About';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, Icon} from '../components';
import {View} from 'react-native';
import {TabBg} from './components/TabBg';

export const WalletMenu = () => (
  <BottomTabNavigatorMazi tabScreens={WalletTabScreens} />
);

export const WalletTabScreens = {
  HomeScreen: {
    component: HomeScreen,
    options: {
      title: 'Home',
      tabBarIcon: ({focused, color}) =>
        tabBarIcon({focused, color, name: 'home'}),
      headerShown: false,
    },
  },
  ProfileScreen: {
    component: HomeScreen,
    options: {
      title: 'Profile',
      tabBarIcon: ({focused, color}) =>
        tabBarIcon({focused, color, name: 'user'}),
    },
  },
  AboutScreen: {
    component: AboutScreen,
    options: {
      title: 'About',
      tabBarIcon: ({focused, color}) =>
        tabBarIcon({focused, color, name: 'building'}),
      headerShown: false,
      tabBarButton: (props, color) => (
        <CustomTabBarButton
          {...props}
          bgColor={'#FFFFFF'}
          name={'users'}
          color={color}
        />
      ),
      // tabBarButton: ({props, color}) => {
      //   return (
      //     <CustomTabBarButton
      //       bgColor={'#FFFFFF'}
      //       name={'bell'}
      //       color={color}
      //       {...props}
      //     />
      //   );
      // },
    },
  },
  NotificationScreen: {
    component: HomeScreen,
    options: {
      title: 'Notification',

      tabBarIcon: ({focused, color}) =>
        tabBarIcon({focused, color, name: 'bell'}),
    },
  },
  EmegerncyScreen: {
    component: ContactScreen,
    options: {
      title: 'Contact',
      headerShown: false,
      tabBarIcon: ({focused, color}) =>
        tabBarIcon({focused, color, name: 'phone'}),
    },
  },

  //   ProfileScreen: {
  //     component: ProfileScreen,
  //     options: {
  //       title: 'account',
  //       tabBarIcon: ({color}) => tabBarIcon({color, name: 'cog'}),
  //     },
  //   },
};

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={WalletMenu}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="AboutUs"
        component={AboutScreen}
        options={{headerShown: false}}
        creenOptions={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
