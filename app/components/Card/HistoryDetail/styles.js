import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  cardList: {
    marginLeft: 50,
    marginRight: 50,
    marginVertical: 20,
    // backgroundColor: 'pink',
  },
  imageBackgroundLoading: {
    height: 80,
    width: '100%',
    justifyContent: 'flex-end',
  },
});
