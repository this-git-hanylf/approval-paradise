/** @format */

import React from 'react';
import {Icon, Text} from '@components';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {BaseColor, BaseStyle} from '@config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
// import styles from '../../screens/SignIn/styles';
import {TabBg} from './TabBg';
import {Button} from '../../components';

export const tabBarIcon = ({focused, color, name}) => (
  // console.log('colorrr', color);
  //   console.log('name icon', name),
  //   (
  // (<FontAwesome5 name={'comments'} solid />)
  <Icon name={name} size={20} solid color={color} focused={focused} />
);

//   )
//   tesicon

export const CustomTabBarButton = ({
  children,
  onPress,
  color,
  name,
  bgColor,
  //   component,
  props,
}) => {
  console.log('onpress', onPress);
  console.log('color', color);
  return (
    <View
      style={{position: 'relative', width: 75, alignItems: 'center'}}
      pointerEvents="box-none"
    >
      <TabBg color={bgColor} style={{position: 'absolute', top: 0}} />

      <TouchableOpacity
        style={{
          top: -22.5,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 50,
          borderRadius: 27,
          backgroundColor: 'pink',
        }}
        onPress={onPress}
      >
        {tabBarIcon({color, name})}
      </TouchableOpacity>
    </View>
  );
};

export const tabBarIconHaveNoty = ({color, name}) => {
  const {colors} = useTheme();
  const data = useSelector(state => state.apiReducer.data);
  let sum = 0;
  data.map((item, index) => {
    sum += parseInt(item.IsRead);
  });

  const counter = useSelector(state => state.counter);
  console.log('counter badge di tabbar', counter);
  const total = data.length;
  const finalCount = total - sum;

  return (
    <View>
      {tabBarIcon({color, name})}
      <View
        style={{
          borderWidth: 1,
          borderColor: BaseColor.whiteColor,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: 20,
          height: 20,
          backgroundColor: 'red',
          top: -5,
          right: -12,
          borderRadius: 10,
        }}
      >
        <Text whiteColor caption2>
          {/* {notifData_FromRed} */}
          {finalCount < 0 ? 0 : finalCount}
        </Text>
      </View>
    </View>
  );
};

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigatorMazi = ({tabScreens = {}}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowIcon: true,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: BaseColor.greyColor,
        tabBarActiveTintColor: BaseColor.greenColor,
        tabBarStyle: {
          position: 'absolute', //membuat seperti transparan belakang lingkarannya
          //   borderTopColor: 'rgba(0, 0, 0, .2)',
          backgroundColor: 'transparent',
          // backgroundColor: '#FFFFFF',
          elevation: 30,
          // display: 'flex',
          // borderRadius: 20,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          paddingBottom: 3,
        },
        tabBarItemStyle: {
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',
          // backgroundColor: 'transparent',

          //   elevation: 30,
        },
      }}

      // tabBar={props => (
      //   <View
      //     style={{
      //       position: 'absolute',
      //       bottom: 0,
      //       left: 0,
      //       right: 0,
      //       shadowColor: '#000',
      //       shadowOffset: {
      //         width: 0,
      //         height: 1,
      //       },
      //       shadowOpacity: 0.22,
      //       shadowRadius: 2.22,
      //       // backgroundColor: 'red',
      //     }}>
      //     <BottomTabBar {...props} />
      //   </View>
      // )}
    >
      {Object.keys(tabScreens).map((name, index) => {
        const {options, component} = tabScreens[name];
        console.log('name tab', name);
        return (
          <BottomTab.Screen
            key={index}
            name={name}
            component={component}
            options={{
              ...options,
              title: t(options.title),
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
