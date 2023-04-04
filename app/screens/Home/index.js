import {
  FlatList,
  ImageBackground,
  View,
  useWindowDimensions,
  Alert,
  ScrollView,
  useColorScheme,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Image from '@components/Image';
import {CardSlide, Text, CardReport06, CardVertical} from '@components';
import {BaseStyle, BaseColor} from '@config';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme, DarkTheme} from '@react-navigation/native';
import jsondummy from './dummy.json';
import {MaterialRequestData} from '@data';
import {useSelector, useDispatch} from 'react-redux';
import {getdata} from '../../actions/UserActions';
import {useNavigation} from '@react-navigation/native';
// import {Images} from '@config';

// const wait = timeout => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };
const Home = props => {
  const key = props.route.params;
  console.log('key props di home', key);
  const getData = useSelector(state => state);
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user);
  const {width, height} = useWindowDimensions();
  const [orientation, setOrientation] = useState(null);
  const [statusPending, setStatusPending] = useState('R');
  const [statusApproved, setStatusApproved] = useState('P');
  const [statusClosed, setStatusClosedd] = useState('C');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const pasingDataApprove = getData.data_approve.data;
  // const pasingDataApprove = null;
  const pasingDataRequest = getData.data_request.data;
  // const pasingDataRequest = null;
  const [material, setMaterial] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  console.log('scheme in home', scheme);
  console.log('getData in home', getData);
  console.log('pasingDataApprove', pasingDataApprove);
  console.log('pasingDataRequest', pasingDataRequest);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      getDataRequest();
      getDataApprove();
      getDataClosed();
      getTop();
    }, 2000);
  }, []);

  const getDataRequest = useCallback(() => dispatch(getdata(statusPending)), [
    statusPending,
    dispatch,
  ]);
  const getDataApprove = useCallback(() => dispatch(getdata(statusApproved)), [
    statusApproved,
    dispatch,
  ]);
  const getDataClosed = useCallback(() => dispatch(getdata(statusClosed)), [
    statusClosed,
    dispatch,
  ]);

  const getTop = async () => {
    try {
      await axios
        .get('http://dev.ifca.co.id:8080/apiifcares/api/gettopapproval_mobile')
        .then(result => {
          const pasing = result.data.Data;
          setMaterial(pasing);
          console.log('first result home ', pasing);
        })
        .catch(error => console.log(error.response.data));
      // .finally(() => setLoading(false));
    } catch (error) {
      alert(error);
      console.log('ini konsol eror data', error);
    }
  };
  console.log('first getData HOME', getData);

  useEffect(() => {
    if (width > height) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  }, [width, height]);
  // const goPostDetail = () => () => {
  //   navigation.navigate("PostDetail", { item: item });

  // };

  console.log('orientation', orientation);
  console.log('user home', user);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getDataRequest();
    getDataApprove();
    getDataClosed();
    setRefreshing(false);
  });

  // useEffect(() => {
  //   const intervalId = setInterval(onRefresh, 10000); // refresh setiap 60 detik
  //   return () => clearInterval(intervalId); // membersihkan interval saat komponen tidak lagi dirender
  // }, []);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'top', 'left']}
      >
        {orientation == 'portrait' ? (
          <View style={styles.backgroundStyle}>
            <View style={{marginVertical: 10, marginHorizontal: 10}}>
              {/* ICON BELL AND USER */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  {user.login ? (
                    user.user && (
                      <Image
                        source={{uri: user.user.pict}}
                        style={[styles.thumb]}
                      />
                    )
                  ) : (
                    <IconAntDesign
                      name={'user'}
                      color={'#000000'}
                      solid
                      size={28}
                    />
                  )}

                  <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 16}} numberOfLines={1}>
                      HII!
                    </Text>
                    {user.user && (
                      <Text bold style={{fontSize: 18}} numberOfLines={2}>
                        {user.user.name}
                      </Text>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {/* <TouchableOpacity onPress={() => alert('Press Notification')}>
                <IconFeather
                  name={'bell'}
                  color={'#000000'}
                  solid
                  size={26}
                />
              </TouchableOpacity> */}
                </View>
              </View>
            </View>

            <View style={{marginVertical: 20}}>
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              >
                <View
                  style={{
                    marginHorizontal: 25,
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {pasingDataApprove == null ? (
                    <CardReport06
                      disable
                      icon="file-signature"
                      title="Approved"
                      color="#007638"
                      colorText="#FFFFFF"
                      colorIcon="#FFFFFF"
                      // price="$0.68"
                      quantity={
                        pasingDataApprove == null ? 0 : pasingDataApprove.length
                      }
                      // quantity={60}
                      // onPress={() => navigation.navigate('FCryptol02')}
                      onPress={() => navigation.navigate('Approved')}
                      style={[styles.shadowProps]}
                    />
                  ) : (
                    <CardReport06
                      icon="file-signature"
                      title="Approved"
                      color="#007638"
                      colorText="#FFFFFF"
                      colorIcon="#FFFFFF"
                      // price="$0.68"
                      quantity={
                        pasingDataApprove == null ? 0 : pasingDataApprove.length
                      }
                      // quantity={60}
                      // onPress={() => navigation.navigate('FCryptol02')}
                      onPress={() => navigation.navigate('Approved')}
                      style={[styles.shadowProps]}
                    />
                  )}
                  {pasingDataRequest == null ? (
                    <CardReport06
                      disable
                      icon="file-signature"
                      title="Unapproved"
                      color="#FFFFFF"
                      colorText="#000000"
                      colorIcon="#007638"
                      // price="$0.68"
                      quantity={
                        pasingDataRequest == null ? 0 : pasingDataRequest.length
                      }
                      // onPress={() => navigation.navigate('FCryptol02')}
                      onPress={() => navigation.navigate('Unapproved')}
                      style={[styles.shadowProps]}
                    />
                  ) : (
                    <CardReport06
                      icon="file-signature"
                      title="Unapproved"
                      color="#FFFFFF"
                      colorText="#000000"
                      colorIcon="#007638"
                      // price="$0.68"
                      quantity={
                        pasingDataRequest == null ? 0 : pasingDataRequest.length
                      }
                      // onPress={() => navigation.navigate('FCryptol02')}
                      onPress={() => navigation.navigate('Unapproved')}
                      style={[styles.shadowProps]}
                    />
                  )}
                </View>
              </ScrollView>
            </View>

            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              vertical={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={{marginBottom: 60}}
            >
              {material.map((item, index) => (
                <CardVertical
                  request={item.request_by}
                  status={item.status}
                  req_no={item.req_no}
                />
              ))}
            </ScrollView>
          </View>
        ) : (
          <ScrollView
            // contentContainerStyle={styles.containe}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.backgroundStyle}>
              <View style={{marginVertical: 10, marginHorizontal: 10}}>
                {/* ICON BELL AND USER */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 10,
                    }}
                  >
                    {user.login ? (
                      user.user && (
                        <Image
                          source={{uri: user.user.pict}}
                          style={[styles.thumb]}
                        />
                      )
                    ) : (
                      <IconAntDesign
                        name={'user'}
                        color={'#000000'}
                        solid
                        size={28}
                      />
                    )}

                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{color: '#000000', fontSize: 16}}
                        numberOfLines={1}
                      >
                        HII!
                      </Text>
                      {user.user && (
                        <Text
                          bold
                          style={{color: '#000000', fontSize: 18}}
                          numberOfLines={2}
                        >
                          {user.user.name}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {/* <TouchableOpacity onPress={() => alert('Press Notification')}>
                <IconFeather
                  name={'bell'}
                  color={'#000000'}
                  solid
                  size={26}
                />
              </TouchableOpacity> */}
                  </View>
                </View>
              </View>

              <View style={{marginVertical: 20}}>
                <View
                  style={{
                    marginHorizontal: 25,
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {pasingDataApprove == null ? (
                    <CardReport06
                      disable
                      icon="file-signature"
                      title="Approved"
                      color="#007638"
                      colorText="#FFFFFF"
                      colorIcon="#FFFFFF"
                      // price="$0.68"
                      quantity={
                        pasingDataApprove == null ? 0 : pasingDataApprove.length
                      }
                      // quantity={60}
                      // onPress={() => navigation.navigate('FCryptol02')}
                      onPress={() => navigation.navigate('Approved')}
                      style={[styles.shadowProps]}
                    />
                  ) : (
                    <CardReport06
                      icon="file-signature"
                      title="Approved"
                      color="#007638"
                      colorText="#FFFFFF"
                      colorIcon="#FFFFFF"
                      // price="$0.68"
                      quantity={
                        pasingDataApprove == null ? 0 : pasingDataApprove.length
                      }
                      // quantity={60}
                      // onPress={() => navigation.navigate('FCryptol02')}
                      onPress={() => navigation.navigate('Approved')}
                      style={[styles.shadowProps]}
                    />
                  )}

                  {pasingDataRequest == null ? (
                    <CardReport06
                      disable
                      icon="file-signature"
                      title="Unapproved"
                      color="#FFFFFF"
                      colorText="#000000"
                      colorIcon="#007638"
                      // price="$0.68"
                      quantity={
                        pasingDataRequest == null ? 0 : pasingDataRequest.length
                      }
                      // onPress={() => navigation.navigate('FCryptol02')}
                      onPress={() => navigation.navigate('Unapproved')}
                      style={[styles.shadowProps]}
                    />
                  ) : (
                    <CardReport06
                      icon="file-signature"
                      title="Unapproved"
                      color="#FFFFFF"
                      colorText="#000000"
                      colorIcon="#007638"
                      // price="$0.68"
                      quantity={
                        pasingDataRequest == null ? 0 : pasingDataRequest.length
                      }
                      // onPress={() => navigation.navigate('FCryptol02')}
                      onPress={() => navigation.navigate('Unapproved')}
                      style={[styles.shadowProps]}
                    />
                  )}
                </View>
              </View>

              <ScrollView
                vertical={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{marginBottom: 60}}
              >
                {material.map((item, index) => (
                  <CardVertical
                    request={item.request_by}
                    status={item.status}
                    req_no={item.req_no}
                  />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Home;
