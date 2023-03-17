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
import HistoryScreen from '../screens/History';
import ProfileScreen from '../screens/Profile';
import Setting from '../screens/Setting';
// import AboutUs from '../screens/About';
// import AboutScreen from '../screens/About';

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
      headerShown: false,
      tabBarIcon: ({focused, color}) =>
        tabBarIcon({focused, color, name: 'home'}),

      // tabBarButton: ({onPress, props, color}) =>
      //   CustomTabBarButton({
      //     onPress,
      //     props,
      //     color,
      //     // color: '#58D68D',
      //     bgColor: '#FFFFFF',
      //     name: 'home',
      //   }),
    },
  },
  HistoryScreen: {
    component: HistoryScreen,
    options: {
      title: 'History',
      headerShown: false,
      tabBarIcon: ({focused, color}) =>
        tabBarIcon({focused, color, name: 'history'}),
    },
  },
  ProfileScreen: {
    component: ProfileScreen,
    options: {
      title: 'Profile',
      headerShown: false,
      tabBarIcon: ({focused, color}) =>
        tabBarIcon({focused, color, name: 'user'}),
    },
  },
};

function MainStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
        creenOptions={{presentation: 'modal'}}
      /> */}
      <Stack.Screen
        name="Menu"
        component={WalletMenu}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default MainStack;
