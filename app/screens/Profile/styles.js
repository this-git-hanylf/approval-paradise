import {StyleSheet, Platform} from 'react-native';
import {BaseColor, Fonts} from '@config';
import {useTheme, DefaultTheme, DarkTheme} from '@react-navigation/native';

export default StyleSheet.create({
  contentTitle: {
    alignItems: 'flex-start',
    width: '100%',
    height: 32,
    justifyContent: 'center',
  },
  contain: {
    alignItems: 'center',
    width: '100%',
  },
  containe: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  textInput: {
    height: 56,
    backgroundColor: BaseColor.fieldColor,
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 20,
    paddingTop: 20,
  },
  follow: {
    minWidth: 80,
    height: 28,
    paddingHorizontal: 16,
    marginRight: 24,
  },
  viewFollow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
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
