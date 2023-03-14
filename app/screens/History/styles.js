import {StyleSheet, Platform} from 'react-native';
import {BaseColor, Fonts} from '@config';
import {useTheme, DefaultTheme, DarkTheme} from '@react-navigation/native';

export default StyleSheet.create({
  styleHeaderContent: {
    backgroundColor: DefaultTheme.colors.primary,
    height: '32%',
    width: '100%',
    paddingHorizontal: 15,
    // borderColor: 'black',
    // borderWidth: 0.5,
    // borderBottomRightRadius: 40,
    // borderBottomLeftRadius: 40,
  },
  backgroundStyle: {
    backgroundColor: '#D6CDA4',
    height: '100%',
    width: '100%',
  },
  paddingFlatList: {
    // padding: 24,
    // paddingTop: 24,
    paddingLeft: 25,
  },
  imageBackground: {
    // height: 335,
    height: 120,
    width: '100%',
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
  },
  ...Platform.select({
    ios: {
      shadowProps: {
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
    },
    android: {
      shadowProps: {
        elevation: 20,
        shadowColor: 'black',
      },
    },
  }),
});
