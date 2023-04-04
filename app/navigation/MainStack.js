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
import ThemeSetting from '../screens/ThemeSetting';
import SelectFontOption from '../screens/SelectFontOption';
import ProfileEdit from '../screens/ProfileEdit';
import HistoryDetail from '../screens/HistoryDetail';
import Approved from '../screens/Approved';
import Unapproved from '../screens/Unapproved';
import SearchHistory from '../screens/SearchHistory';
import SearchApproved from '../screens/SearchApproved';
import SearchUnapproved from '../screens/SearchUnapproved';
import ChangePassword from '../screens/ChangePassword';
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
      <Stack.Screen
        name="Home"
        component={WalletMenu}
        options={{headerShown: false}}
      ></Stack.Screen>

      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="ThemeSetting"
        component={ThemeSetting}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="SelectFontOption"
        component={SelectFontOption}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="HistoryDetail"
        component={HistoryDetail}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="Approved"
        component={Approved}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="Unapproved"
        component={Unapproved}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="SearchHistory"
        component={SearchHistory}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="SearchApproved"
        component={SearchApproved}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="SearchUnapproved"
        component={SearchUnapproved}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default MainStack;
