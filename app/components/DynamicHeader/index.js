import * as React from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const Header_Max_Height = 100;
const Header_Min_Height = 70;

export default function DynamicHeader({animHeaderValue, children}) {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['blue', 'red'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [10, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
        },
      ]}>
      {/* {children} */}
      {/* <View style={{backgroundColor: 'aqua'}}>
        <Text
          style={{
            marginVertical: 20,
            marginHorizontal: 10,
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          Over 31 Years in Industrial Development | Home to Over 150 Global
          Companies of 16 Countries
        </Text>
      </View>
      <View style={{backgroundColor: 'red'}}>
        <Text
          style={{
            marginVertical: 20,
            marginHorizontal: 10,
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          logo suryacipta
        </Text>
      </View> */}
      {/* <Text style={styles.headerText}>A List of Books</Text> */}
      <Text
        style={{
          marginVertical: 20,
          marginHorizontal: 10,
          alignSelf: 'center',
          textAlign: 'center',
        }}>
        logo suryacipta
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
