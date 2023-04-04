import {Button, Header, Icon, SafeAreaView, Text, TextInput} from '@components';
import {BaseStyle, BaseColor} from '@config';
import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import getUser from '../../selectors/UserSelectors';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';

const ChangePassword = props => {
  const {navigation} = props;
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => getUser(state));
  const [email, setEmail] = useState(user != null ? user.user : '');
  const [hidePass, setHidePass] = useState(true);
  const [hideRePass, setHideRePass] = useState(true);
  const [modalAlert, setModalAlert] = useState(false);
  const [modalAlertNotMatch, setModalAlertNotMatch] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [messageAlertNotMatch, setMessageAlertNotMatch] = useState('');

  const changePassword = () => {
    if (password == repassword) {
      const formData = {
        email: email,
        pass: password,
      };
      console.log('formdaata change pass', formData);
      axios
        .post(
          'http://dev.ifca.co.id:8080/apiifcares/api/changepass_approval',
          formData,
        )
        .then(res => {
          if (res.data.Error == false) {
            setModalAlert(true);
            setMessageAlert(res.data.Pesan);

            // alert(res.data.Pesan);
          } else {
            setModalAlert(true);
            setMessageAlert(res.data.Pesan);
            // alert(res.data.Pesan);
          }
        })
        .catch(error => {
          console.log(error.response);
        });

      // alert('same password');
    } else {
      // alert('different password');
      setModalAlertNotMatch(true);
      setMessageAlertNotMatch('Passwords do not match.');
    }
  };

  const onCloseAlert = () => {
    setModalAlert(false);
    navigation.navigate('Home');
  };
  const onCloseAlertNotMatch = () => {
    setModalAlertNotMatch(false);
  };

  return (
    <SafeAreaView
      style={BaseStyle.safeAreaView}
      edges={['right', 'top', 'left']}
    >
      <Header
        title={t('change_password')}
        renderLeft={() => {
          return (
            <Icon
              name="angle-left"
              size={20}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={styles.contain}>
          <View style={styles.contentTitle}>
            <Text headline semibold>
              {t('password')}
            </Text>
          </View>
          <TextInput
            style={BaseStyle.textInput}
            onChangeText={text => setPassword(text)}
            autoCorrect={false}
            // secureTextEntry={true}
            placeholder={t('password')}
            placeholderTextColor={BaseColor.grayColor}
            value={password}
            selectionColor={colors.primary}
            secureTextEntry={hidePass}
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

          <View style={styles.contentTitle}>
            <Text headline semibold>
              {t('re_password')}
            </Text>
          </View>
          <TextInput
            style={BaseStyle.textInput}
            onChangeText={text => setRepassword(text)}
            autoCorrect={false}
            secureTextEntry={hideRePass}
            placeholder={t('password_confirm')}
            placeholderTextColor={BaseColor.grayColor}
            value={repassword}
            selectionColor={colors.primary}
            icon={
              <Icon
                onPress={() => setHideRePass(!hideRePass)}
                active
                name={hideRePass ? 'eye-slash' : 'eye'}
                size={20}
                color={colors.text}
              />
            }
          />
        </View>
      </ScrollView>
      <View style={{padding: 20}}>
        <Button
          loading={loading}
          full
          onPress={() => {
            changePassword();
            // setLoading(true);
            // setTimeout(() => {
            //   navigation.goBack();
            // }, 500);
          }}
        >
          {t('confirm')}
        </Button>
      </View>

      {/* ---- MODAL ALERT UNTUK GANTI PASSWORD ---- */}
      <View>
        <Modal
          isVisible={modalAlert}
          style={{height: '100%'}}
          onBackdropPress={() => onCloseAlert()}
        >
          <View
            style={{
              // flex: 1,

              // alignContent: 'center',
              padding: 10,
              backgroundColor: '#fff',
              // height: ,
              borderRadius: 8,
            }}
          >
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: colors.primary,
                  marginBottom: 10,
                }}
              >
                {messageAlert.includes('success') ? 'Success' : 'Failed'}
              </Text>
              <Text>{messageAlert}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                style={{
                  marginTop: 10,
                  // marginBottom: 10,

                  width: 70,
                  height: 40,
                }}
                onPress={() => onCloseAlert()}
              >
                <Text style={{fontSize: 13, color: colors.whiteColor}}>
                  {t('OK')}
                </Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
      {/* ---- CLOSE MODAL ALERT UNTUK GANTI PASSWORD ---- */}

      {/* ---- MODAL ALERT UNTUK PASSWORD TIDAK SAMA ---- */}
      <View>
        <Modal
          isVisible={modalAlertNotMatch}
          style={{height: '100%'}}
          onBackdropPress={() => onCloseAlertNotMatch()}
        >
          <View
            style={{
              // flex: 1,

              // alignContent: 'center',
              padding: 10,
              backgroundColor: '#fff',
              // height: ,
              borderRadius: 8,
            }}
          >
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: colors.primary,
                  marginBottom: 10,
                }}
              >
                {'Failed'}
              </Text>
              <Text>{messageAlertNotMatch}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                style={{
                  marginTop: 10,
                  // marginBottom: 10,

                  width: 70,
                  height: 40,
                }}
                onPress={() => onCloseAlertNotMatch()}
              >
                <Text style={{fontSize: 13, color: colors.whiteColor}}>
                  {t('OK')}
                </Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
      {/* ---- CLOSE MODAL ALERT UNTUK PASSWORD TIDAK SAMA ---- */}
    </SafeAreaView>
  );
};

export default ChangePassword;
