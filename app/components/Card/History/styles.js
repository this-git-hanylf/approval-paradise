import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardList: {
    marginHorizontal: 20,
    marginVertical: 20,
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
        elevation: 10,
        shadowColor: '#007638',
      },
    },
  }),
});
