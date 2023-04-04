import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
  useWindowDimensions,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {BaseStyle, useTheme, DefaultTheme} from '@config';
import {Header, SafeAreaView, Icon, Text, Image, Button} from '@components';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {CardHistoryDetail} from '../../components';
import {AuthActions, UserAuth} from '@actions';

import styles from './styles';

const HistoryDetail = props => {
  console.log('prop di history detail', props.route.params);
  console.log('prop di history detail', props.route.name);
  const propsData = props.route.params;
  const {t, i18n} = useTranslation();
  const user = useSelector(state => state.user);
  const colors = DefaultTheme.light.colors;
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();
  const [orientation, setOrientation] = useState(null);
  const [detail, setDetail] = useState([]);
  const [message, setMessage] = useState('');
  const scheme = useColorScheme();
  const [loading, setLoading] = useState(true);
  const [modalSuccessVisible, showModalSuccess] = useState(false);
  const [statusResult, setStatus] = useState('');
  const dispatch = useDispatch();
  console.log('user history detail', user);
  const {remove} = UserAuth;

  useEffect(() => {
    if (width > height) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  }, [width, height]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      getDetail();
    }, 1000);
  }, []);

  console.log('height', height);
  console.log('width', width);

  const getDetail = async () => {
    try {
      await axios
        .get(
          `http://dev.ifca.co.id:8080/apiifcares/api/getapproval_detail/${propsData.status}/${propsData.req_no}`,
        )
        .then(result => {
          const pasing = result.data.Data;
          setDetail(pasing);
          console.log('first result history detail', pasing);
        })
        .catch(error => console.log(error.response.data));
      // .finally(() => setLoading(false));
    } catch (error) {
      alert(error);
      console.log('ini konsol eror data', error);
    }
  };

  const klikApprove = async () => {
    // console.log(
    //   'url >',
    //   `http://dev.ifca.co.id:8080/apiifcares/api/update_approval_mobile/${propsData.req_no}/${user.user.name}/P`,
    // );
    const formData = new FormData();
    formData.append('req_no', propsData.req_no);
    formData.append('audit_user', user.user.name);
    formData.append('status', 'P');
    try {
      await axios
        .post(
          'http://dev.ifca.co.id:8080/apiifcares/api/update_approval_mobile',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then(result => {
          // Status OK Failed
          const pasing = result.data;
          setMessage(pasing.Pesan);
          setStatus(pasing.Status);
          showModalSuccess(true);
          dispatch(
            remove(false, response => {
              setLoading(false);
            }),
          );
          console.log('klik approve', pasing);
        })
        .catch(error => console.log(error.response.data));
      // .finally(() => setLoading(false));
    } catch (error) {
      alert(error);
      console.log('ini konsol eror data', error);
    }
  };

  const klikRevise = async () => {
    const formData = new FormData();
    formData.append('req_no', propsData.req_no);
    formData.append('audit_user', user.user.name);
    formData.append('status', 'V');
    console.log('formData', formData);
    try {
      await axios
        .post(
          'http://dev.ifca.co.id:8080/apiifcares/api/update_approval_mobile',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then(result => {
          const pasing = result.data;
          setMessage(pasing.Pesan);
          setStatus(pasing.Status);
          showModalSuccess(true);
          dispatch(
            remove(false, response => {
              setLoading(false);
            }),
          );
          console.log('first result history detail', pasing);
        })
        .catch(error => console.log(error.response.data));
      // .finally(() => setLoading(false));
    } catch (error) {
      alert(error);
      console.log('ini konsol eror data', error);
    }
  };

  const onCloseModal = () => {
    showModalSuccess(false);
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView
      style={BaseStyle.safeAreaView}
      edges={['right', 'top', 'left']}
    >
      {propsData.status == 'C' ? (
        <Header
          title={t('history_detail')}
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
      ) : propsData.status == 'R' ? (
        <Header
          title={t('unapprove_detail')}
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
      ) : (
        propsData.status == 'P' && (
          <Header
            title={t('approve_detail')}
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
        )
      )}
      <ScrollView
        vertical={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: 'rgb(0, 118, 56)',
            width: width,
            height: height / 4,
            padding: 10,
            paddingHorizontal: 30,
          }}
        >
          <View style={{marginVertical: 20}}>
            {propsData.status == 'C' ? (
              <Text bold style={{color: '#FFFFFF', fontSize: 24}}>
                {' '}
                This Material Request Was Closed
              </Text>
            ) : (
              propsData.status == 'P' && (
                <Text bold style={{color: '#FFFFFF', fontSize: 24}}>
                  This Material Request Was Approved
                </Text>
              )
            )}
            {propsData.status == 'R' && (
              <Text bold style={{color: '#FFFFFF', fontSize: 24}}>
                This Material Request Was Unapproved
              </Text>
            )}

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Icon
                name={'user'}
                size={20}
                color={'#FFFFFF'}
                style={{marginRight: 10}}
              />
              <Text style={{color: '#FFFFFF'}}>
                Request by: {propsData.request_by}
              </Text>
            </View>
          </View>
        </View>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color="#37BEB7" />
          </View>
        ) : (
          detail.map((data, index) => (
            <CardHistoryDetail
              item_cd={data.item_cd}
              item_descs={data.item_descs}
              req_no={data.req_no}
              req_qty={data.req_qty}
              uom={data.uom}
              status={data.status}
              height={height}
              width={width}
            />
          ))
        )}
        {propsData.status == 'R' ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 15,
            }}
          >
            <TouchableOpacity
              style={[
                styles.shadowProps,
                {
                  backgroundColor: '#C4C106',
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingRight: 40,
                  paddingLeft: 40,
                  borderRadius: 20,
                  borderWidth: 0.5,
                  borderColor: '#000000',
                },
              ]}
              onPress={() => {
                klikRevise();
              }}
            >
              <Text style={{color: '#FFFFFF'}}>Revise</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.shadowProps,
                {
                  backgroundColor: '#FF2424',
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingRight: 40,
                  paddingLeft: 40,
                  borderRadius: 20,
                  borderWidth: 0.5,
                  borderColor: '#000000',
                },
              ]}
              onPress={() => {
                klikApprove();
              }}
            >
              <Text style={{color: '#FFFFFF'}}>Approve</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>

      <View>
        <Modal
          isVisible={modalSuccessVisible}
          style={{height: '100%'}}
          // onBackdropPress={() => showModalSuccess(true)}>
          onBackdropPress={() => showModalSuccess(true)}
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
            {statusResult == 'OK' ? (
              <View style={{alignItems: 'center'}}>
                <Text bold style={{fontSize: 20, marginBottom: 10}}>
                  Result
                </Text>
                {/* <Text>{message}</Text> */}
                <IconAnt
                  name="checkcircleo"
                  size={80}
                  color={colors.primary}
                ></IconAnt>
                <Text> </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: colors.primary,
                    marginBottom: 10,
                    textAlign: 'center',
                  }}
                >
                  {message}
                </Text>
                {/* <Text>Schedule Success Booked on Ticket</Text> */}
                {/* <Text bold>{messageResult}</Text> */}
              </View>
            ) : (
              <View style={{alignItems: 'center'}}>
                <Text bold style={{fontSize: 20, marginBottom: 10}}>
                  Result
                </Text>
                {/* <Text>{message}</Text> */}
                <IconAnt
                  name="closecircleo"
                  size={80}
                  color={'salmon'}
                ></IconAnt>
                <Text> </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'salmon',
                    marginBottom: 10,
                    textAlign: 'center',
                  }}
                >
                  {message}
                </Text>
                {/* <Text bold>{messageResult}</Text> */}
              </View>
            )}

            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Button
                style={{
                  marginTop: 10,
                  // marginBottom: 10,

                  width: 70,
                  height: 40,
                }}
                onPress={() => {
                  onCloseModal();
                }}
              >
                <Text style={{fontSize: 13, color: '#FFF'}}>{t('OK')}</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default HistoryDetail;
