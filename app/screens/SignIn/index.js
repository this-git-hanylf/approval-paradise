import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '@config';
import React, {useCallback, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Platform,
  Text,
  Alert,
  useColorScheme,
} from 'react-native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import messaging from '@react-native-firebase/messaging';
import {useTheme} from '@react-navigation/native';
import {DefaultTheme} from '@config';
import {TextInput, Icon, Button} from '@components';
import SliderIntro from 'react-native-slider-intro';

//selectors
// import getUser from '../../selectors/UserSelectors';

//actions
import {login, actionTypes} from '../../actions/UserActions';

const SignIn = props => {
  const {colors} = useTheme();
  const {navigation} = props;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [intro, setIntro] = useState(false);
  const [token_firebase, setTokenFirebase] = useState('');
  const [token, setTokenBasic] = useState('');
  const scheme = useColorScheme();
  const user = useSelector(state => state.user);

  const passwordChanged = useCallback(value => setPassword(value), []);
  const emailChanged = useCallback(value => setEmail(value), []);

  useEffect(() => {
    requestUserPermission();
  }, []);

  useEffect(() => {
    console.log('user for reset? ', user.user);
    if (user.user != null) {
      // console.log('user', user);

      // loadProject();
      // props.navigation.navigate('MainStack');
      props.navigation.navigate('MainStack');
      // navigation.navigate('MainStack');
    } else {
      setIntro(true);
      console.log('truee');
    }
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
      console.log('Authorization status:', authStatus);
    }
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      console.log('Your Firebase Token is:', fcmToken);
      setTokenFirebase(fcmToken);
    } else {
      console.log('Failed', 'No token received');
    }
  };

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  const slides = [
    {
      key: 's1',
      title: 'Find information and update Approval',
      // titleStyle: styles.textTitle,
      // textStyle: styles.textTitle,
      text:
        'Find information and updates on approvals developed by IFCA and get detailed information on documents to be approved.',
      image: require('@assets/images/slide-01.png'),
      // imageStyle: styles.images_waskita,
      backgroundColor: colors.primary,
      // width: 550,
      // height: 550,
      // bottomSpacer: styles.bottom_Spacer,
    },
    {
      key: 's2',
      title: 'See Approval Document',
      // titleStyle: styles.textTitle,
      // textStyle: styles.textTitle,
      text: 'Get detailed info about your currently approved document.',
      image: require('@assets/images/slide-02.png'),
      // imageStyle: styles.images_waskita,
      backgroundColor: colors.primary,
      // width: 200,
      // height: 200,
      // bottomSpacer: styles.bottom_Spacer,
    },
    {
      key: 's3',
      title: 'Approval Document',
      // titleStyle: styles.textTitle,
      // textStyle: styles.textTitle,
      text: 'Document approvals have become very easy via online.',
      image: require('@assets/images/slide-03.png'),
      // imageStyle: styles.images_waskita,
      backgroundColor: colors.primary,
      // width: 200,
      // height: 200,
      // bottomSpacer: styles.bottom_Spacer,
    },
  ];

  const loginklik = () => {
    // alert('alert sign in');
    loginUser();
  };

  const loginUser = useCallback(
    () => dispatch(login(email, password, token_firebase)),
    [email, password, token_firebase, dispatch],
  );

  const renderDoneButton = () => {
    return (
      <View style={styles.nextButton}>
        <Text style={styles.text}>Done</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.nextButton}>
        <Text style={styles.text}>Next</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View>
        <Text style={styles.text}>Skip</Text>
      </View>
    );
  };

  const _onDone = () => {
    console.log('done');
    setIntro(false);
  };

  const _onSkip = () => {
    setIntro(false);
  };

  return intro == false ? (
    // && user != null
    <SafeAreaView
      style={BaseStyle.safeAreaView}
      edges={['right', 'top', 'left']}
    >
      <View>
        {scheme == 'dark' ? (
          <Image
            // source={require('../../assets/images/pakubuwono.png')}
            source={require('../../assets/images/image-home/vector-logo-pbi.png')}
            style={{
              height: 100,
              width: 200,
              alignSelf: 'center',
              resizeMode: 'contain',
              borderWidth: 1,
              borderStyle: 'solid',
              // borderColor: 'black',
              // marginHorizontal: 100,
              // marginBottom: 15,
              // marginTop: -15,
              // flexDirection: 'row',
            }}
          />
        ) : (
          <Image
            // source={require('../../assets/images/pakubuwono.png')}
            source={require('../../assets/images/image-home/pakubuwono.png')}
            style={{
              height: 100,
              width: 200,
              alignSelf: 'center',
              resizeMode: 'contain',
              borderWidth: 1,
              borderStyle: 'solid',
              // borderColor: 'black',
              // marginHorizontal: 100,
              // marginBottom: 15,
              // marginTop: -15,
              // flexDirection: 'row',
            }}
          />
        )}
      </View>
      {/* <View
        style={{
          // flex: 1,
          // justifyContent: 'center',
          paddingHorizontal: 20,
          // paddingVertical: 10,
          // paddingTop: 50,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.text}}>
          Login
        </Text>
        <Text style={{color: colors.text}}>
          Welcome to Suryacipta City of Industry
        </Text>
      </View> */}
      <View style={styles.contain}>
        <View style={{paddingBottom: 30}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.text}}>
            Login
          </Text>
          <Text style={{color: colors.text}}>
            Welcome to The Pakubuwono Residence Approval
          </Text>
        </View>

        <TextInput
          style={[BaseStyle.textInput]}
          onChangeText={emailChanged}
          autoCorrect={false}
          placeholder={t('input_id')}
          value={email}
          selectionColor={colors.primary}
        />
        <TextInput
          style={[BaseStyle.textInput, {marginTop: 10}]}
          onChangeText={passwordChanged}
          autoCorrect={false}
          placeholder={t('input_password')}
          secureTextEntry={hidePass}
          value={password}
          selectionColor={colors.primary}
          icon={
            <Icon
              onPress={() => setHidePass(!hidePass)}
              active
              name={hidePass ? 'eye-slash' : 'eye'}
              size={20}
              color={colors.text}
            />
          }
        />
        <View style={{width: '100%', marginVertical: 16}}>
          <Button
            full
            loading={loading}
            style={{marginTop: 20}}
            // onPress={loginUser}
            onPress={loginklik}
          >
            {t('sign_in')}
          </Button>
        </View>
        <View style={styles.contentActionBottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}
          >
            <Text body2 grayColor>
              {t('forgot_your_password')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Skip')}>
            <Text body2 primaryColor>
              {t('Skip Login')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  ) : (
    <SliderIntro
      data={slides}
      renderNextButton={renderNextButton} //ini ngerender doang supaya buttonnya di gaya-gayain
      renderDoneButton={renderDoneButton} //ini ngerender doang supaya buttonnya di gaya-gayain
      renderSkipButton={renderSkipButton} //ini ngerender doang supaya buttonnya di gaya-gayain
      onDone={_onDone}
      onSkip={_onSkip}
      navContainerMaxSizePercent={0.3}
    />
  );
};

export default SignIn;
