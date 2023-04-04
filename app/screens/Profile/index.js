import {AuthActions, UserAuth} from '@actions';
import {
  Button,
  Icon,
  ProfileDetail,
  ProfilePerformance,
  SafeAreaView,
  Tag,
  Text,
  Header,
} from '@components';
import {BaseStyle, useTheme, DefaultTheme} from '@config';
// Load sample data
// import {UserData} from '@data';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
// import getUser from '../../selectors/UserSelectors';

// const {authentication} = AuthActions;

const Profile = props => {
  // const {colors} = useTheme();
  const {authentication} = UserAuth;
  const {t} = useTranslation();
  const {navigation} = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.user);
  const login = user.login.success;
  // const login = true;
  useEffect(() => {
    if (user == null) {
      props.navigation.navigate('SignIn');
    }
  });
  console.log('login', login);
  console.log('userz', user);

  const onLogOut = () => {
    setLoading(true);
    dispatch(
      authentication(false, response => {
        setLoading(false);
      }),
    );
  };

  const onLogIn = () => {
    navigation.navigate('SignIn');
  };

  const styleItem = {
    ...styles.profileItem,
    borderBottomColor: DefaultTheme.light.colors.border,
  };

  return (
    <SafeAreaView
      style={BaseStyle.safeAreaView}
      edges={['right', 'top', 'left']}
    >
      <Header
        title={t('setting')}
        // renderLeft={() => {
        //   return (
        //     <Icon
        //       name="angle-left"
        //       size={20}
        //       color={DefaultTheme.light.colors.primary}
        //       enableRTL={true}
        //     />
        //   );
        // }}
        // onPressLeft={() => {
        //   navigation.goBack();
        // }}
      />
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={styles.containe}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {user.user && (
            <ProfileDetail
              image={user.user.pict}
              // image={{uri: user.pict}}
              // image={{uri: `${user.pict}`}}
              textFirst={user.user.name}
              textSecond={user.user.user}
            />
          )}

          <View style={{width: '100%'}}>
            <TouchableOpacity
              style={styleItem}
              onPress={() => {
                navigation.navigate('Setting');
              }}
            >
              <Text body1>{t('setting')}</Text>
              <Icon
                name="angle-right"
                size={18}
                color={DefaultTheme.light.colors.primary}
                style={{marginLeft: 5}}
                enableRTL={true}
              />
            </TouchableOpacity>
            {login && (
              <TouchableOpacity
                style={styleItem}
                onPress={() => {
                  navigation.navigate('ProfileEdit');
                }}
              >
                <Text body1>{t('edit_profile')}</Text>
                <Icon
                  name="angle-right"
                  size={18}
                  color={DefaultTheme.light.colors.primary}
                  style={{marginLeft: 5}}
                  enableRTL={true}
                />
              </TouchableOpacity>
            )}
            {login && (
              <TouchableOpacity
                style={styleItem}
                onPress={() => {
                  navigation.navigate('ChangePassword');
                }}
              >
                <Text body1>{t('change_password')}</Text>
                <Icon
                  name="angle-right"
                  size={18}
                  color={DefaultTheme.light.colors.primary}
                  style={{marginLeft: 5}}
                  enableRTL={true}
                />
              </TouchableOpacity>
            )}

            {/* <TouchableOpacity
              style={styleItem}
              onPress={() => {
                navigation.navigate('ContactUs');
              }}
            >
              <Text body1>{t('contact_us')}</Text>
              <Icon
                name="angle-right"
                size={18}
                color={DefaultTheme.light.colors.primary}
                style={{marginLeft: 5}}
                enableRTL={true}
              />
            </TouchableOpacity> */}

            {/* <TouchableOpacity
              style={styleItem}
              onPress={() => {
                navigation.navigate('AboutUs');
              }}
            >
              <Text body1>{t('about_us')}</Text>
              <Icon
                name="angle-right"
                size={18}
                color={DefaultTheme.light.colors.primary}
                style={{marginLeft: 5}}
                enableRTL={true}
              />
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 0.5, padding: 12}}>
        {login ? (
          <Button full loading={loading} onPress={() => onLogOut()}>
            {t('sign_out')}
          </Button>
        ) : (
          <Button full loading={loading} onPress={() => onLogIn()}>
            {t('sign_in')}
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
