import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';

export default StyleSheet.create({
  contain: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  themeIcon: {
    width: 16,
    height: 16,
  },
  ...Platform.select({
    ios: {
      shadowProps: {
        shadowColor: '#007638',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
    },
    android: {
      shadowProps: {
        elevation: 30,
        shadowColor: '#003017',
      },
    },
  }),
});
