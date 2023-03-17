import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    padding: 40,
    justifyContent: 'center',
    height: 220,
    // height: '100%',
    width: '100%',
    borderRadius: 20,
    marginBottom: 0,
    borderWidth: StyleSheet.hairlineWidth,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        // shadowColor: 'rgba(0,118,56,255)',
        shadowColor: '#000',
        shadowOffset: {height: 0, width: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    }),
  },
  container: {width: '50%', marginRight: 10},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIcon: {
    borderRadius: 15,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
