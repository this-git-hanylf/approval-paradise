import {ImageBackground, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from '@components';
import {BaseStyle, BaseColor} from '@config';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {Header} from '@components';
import {ProgressBar, MD3Colors} from 'react-native-paper';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Contact = props => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'top', 'left']}
      >
        {/* {renderContent()} */}
        <Header title="Contact Us" />
        <ProgressBar progress={0.2} color={BaseColor.blueColor} />
        <View
          style={{
            backgroundColor: BaseColor.blueColor,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <Text style={{color: BaseColor.whiteColor, textAlign: 'center'}}>
            Over 31 Years in Industrial Development | Home to Over 150 Global
            Companies of 16 Countries
          </Text>
        </View>
        <View
          style={{
            height: 70,
            paddingHorizontal: 15,
            borderColor: 'black',
            borderWidth: 0.5,
          }}
        >
          <View
            style={{flexDirection: 'column', justifyContent: 'space-between'}}
          >
            <View>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{
                  height: 70,
                  width: 140,
                  resizeMode: 'contain',
                  alignContent: 'center',
                }}
              />
            </View>
            <View
              style={{
                // flex: 1,
                // overflow: 'hidden',
                // position: 'relative',
                // margin: 140,
                height: 140,
                width: 280,
                // borderColor: 'black',
                // borderWidth: 0.5,
                //   resizeMode: 'contain',
                //   alignContent: 'center',
              }}
            >
              <Image
                source={require('../../assets/images/resepsionist.jpeg')}
                style={{
                  flex: 1,
                  height: 140,
                  width: 560,
                  resizeMode: 'cover',
                  //   alignContent: 'flex-start',
                }}
              />
            </View>
            <View
              style={{
                alignSelf: 'center',
              }}
            >
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {' '}
                We Are Ready to Help You
              </Text>
              <View
                style={{
                  // borderColor: 'black',
                  // borderWidth: 0.5,
                  // flexDirection: 'column',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    maxWidth: 100,
                    borderWidth: 2,
                    borderColor: 'red',
                    borderRadius: 50,
                    paddingLeft: 50,
                    paddingRight: 50,
                    // flexDirection: 'column',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}
                />
              </View>
              {/* <Icon name={'bell'} color={colors.text} solid size={20}></Icon> */}
            </View>
          </View>

          {/* <Text>ini home</Text> */}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Contact;
