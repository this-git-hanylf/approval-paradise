import {
  FlatList,
  ImageBackground,
  View,
  Image,
  ScrollView,
  useColorScheme,
  RefreshControl,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CardSlide, Text, CardReport06, CardHistory} from '@components';
import {BaseStyle, BaseColor} from '@config';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme, DarkTheme} from '@react-navigation/native';
// import jsondummy from './dummy.json';
import {HomePopularData} from '@data';
// import {Images} from '@config';
// import {MaterialRequestData} from '@data';
import {getdata} from '../../actions/UserActions';
import {err} from 'react-native-svg/lib/typescript/xml';
import {useNavigation} from '@react-navigation/native';

// const wait = timeout => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };

const History = props => {
  const [popular, setPopular] = useState(HomePopularData);
  const {colors} = useTheme();
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user);
  const getData = useSelector(state => state);
  const dispatch = useDispatch();
  const pasingData = getData.data_close.data;
  const navigation = useNavigation();
  // const [material, setMaterial] = useState([]);
  console.log('history getData', getData);
  console.log('history pasongData', pasingData);
  const [material, setMaterial] = useState(pasingData);
  const scheme = useColorScheme();
  const [refreshing, setRefreshing] = useState(false);
  const {width, height} = useWindowDimensions();
  console.log('material history', material);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getDataRequest();
    getDataApprove();
    getDataClosed();
    setRefreshing(false);
  });

  // const getDataClosed = useCallback(() => dispatch(getdata(statusClosed)), [
  //   statusClosed,
  //   dispatch,
  // ]);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'top', 'left']}
      >
        {/* {renderContent()} */}
        <View style={styles.backgroundStyle}>
          <View style={{}}>
            {/* ICON BELL AND USER */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
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
                {user.user ? (
                  <Image
                    source={{uri: user.user.pict}}
                    style={[styles.thumb]}
                  />
                ) : scheme == 'dark' ? (
                  <IconAntDesign
                    name={'user'}
                    color={'#FFFFFF'}
                    solid
                    size={28}
                  />
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
                  marginRight: 10,
                }}
              >
                {pasingData == null ? (
                  <TouchableOpacity
                    disabled
                    onPress={() => navigation.navigate('SearchHistory')}
                  >
                    {scheme == 'dark' ? (
                      <IconFeather
                        name={'search'}
                        color={'#FFFFFF'}
                        solid
                        size={26}
                      />
                    ) : (
                      <IconFeather
                        name={'search'}
                        color={'#000000'}
                        solid
                        size={26}
                      />
                    )}
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SearchHistory')}
                  >
                    {scheme == 'dark' ? (
                      <IconFeather
                        name={'search'}
                        color={'#FFFFFF'}
                        solid
                        size={26}
                      />
                    ) : (
                      <IconFeather
                        name={'search'}
                        color={'#000000'}
                        solid
                        size={26}
                      />
                    )}
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>

          {/* <View style={{marginVertical: 20}}>
            <View
              style={{
                marginHorizontal: 25,
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <CardReport06
                icon="file-signature"
                title="Approved"
                color="#007638"
                colorText="#FFFFFF"
                colorIcon="#FFFFFF"
                // price="$0.68"
                quantity="36"
                // onPress={() => navigation.navigate('FCryptol02')}
                onPress={() => alert('onPress CardReport06')}
                style={[styles.shadowProps]}
              />
              <CardReport06
                icon="file-signature"
                title="Unapproved"
                color="#FFFFFF"
                colorText="#000000"
                colorIcon="#007638"
                // price="$0.68"
                quantity="16"
                // onPress={() => navigation.navigate('FCryptol02')}
                onPress={() => alert('onPress CardReport06')}
                style={[styles.shadowProps]}
              />
            </View>
          </View> */}

          <ScrollView
            vertical={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{marginBottom: 60}}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {pasingData ? (
              material.map((item, index) => (
                // <View>
                //   <Text>{item.request_by}</Text>
                // </View>
                <CardHistory
                  onPress={() => navigation.navigate('HistoryDetail', item)}
                  request={item.request_by}
                  status={item.status}
                  req_no={item.req_no}
                />
              ))
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  marginVertical: height / 3.5,
                }}
              >
                <Image
                  source={require('../../assets/images/6324912.png')}
                  style={{
                    height: 200,
                    width: 300,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
                <Text bold style={{fontSize: 20}}>
                  Data not found
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default History;
