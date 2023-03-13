import {StyleSheet, Platform} from 'react-native';
import {BaseColor, Fonts} from '@config';
import * as Utils from '@utils';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 0,
  },
  scrollText: {
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000',
  },
  overline: {
    fontSize: 12,
    fontWeight: '100',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  spacer: {
    height: 10,
  },
  imageBackground: {
    height: ((Utils.getWidthDevice() - 30) * 3) / 8,
    width: '100%',
  },
  viewBackground: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
  },
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1,
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  styleThumb: {
    borderWidth: 1,
    borderColor: BaseColor.whiteColor,
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
