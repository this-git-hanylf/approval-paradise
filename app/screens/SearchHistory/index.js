import {FlatList, ImageBackground, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  CardSlide,
  Text,
  CardReport06,
  CardHistory,
  Header,
  TextInput,
} from '@components';
import {BaseStyle, BaseColor} from '@config';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme, DarkTheme} from '@react-navigation/native';
// import jsondummy from './dummy.json';
import {HomePopularData} from '@data';
import {haveChildren} from '@utils';
// import {Images} from '@config';
// import {MaterialRequestData} from '@data';
import {getdata} from '../../actions/UserActions';
import {err} from 'react-native-svg/lib/typescript/xml';
import {useNavigation} from '@react-navigation/native';

// const wait = timeout => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };

const SearchHistory = props => {
  const [popular, setPopular] = useState(HomePopularData);
  const {colors} = useTheme();
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user);
  const getData = useSelector(state => state.data_close);
  const [statusPending, setStatusPending] = useState('R');
  const [statusApproved, setStatusApproved] = useState('P');
  const [statusClosed, setStatusClosedd] = useState('C');
  const dispatch = useDispatch();
  const pasingData = getData.data;
  const [material, setMaterial] = useState(pasingData);
  const [category, setCategory] = useState('');
  const navigation = useNavigation();
  // const [material, setMaterial] = useState([]);
  console.log('history getData', getData);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      getDataApproval();
    }, 1000);
  }, []);

  const getDataApproval = useCallback(() => dispatch(getdata(statusClosed)), [
    statusClosed,
    dispatch,
  ]);

  const filterCategory = text => {
    setCategory(text);
    if (text) {
      setMaterial(
        pasingData.filter(
          item =>
            haveChildren(item.request_by, text) ||
            haveChildren(item.req_no, text) ||
            haveChildren(item.status, text),
        ),
      );
    } else {
      setMaterial(pasingData);
    }
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'top', 'left']}
      >
        <Header
          title={'History Search'}
          renderLeft={() => {
            return (
              <Icon
                name="angle-left"
                size={20}
                color={'#007638'}
                enableRTL={true}
              />
            );
          }}
          onPressLeft={() => {
            navigation.goBack();
          }}
        />
        {/* {renderContent()} */}
        <View style={styles.backgroundStyle}>
          <View>
            {/* ICON BELL AND USER */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
                paddingHorizontal: 20,
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
                {/* {user.login ? (
                  <Image
                    source={{uri: user.user.pict}}
                    style={[styles.thumb]}
                  />
                ) : (
                  <IconAntDesign
                    name={'user'}
                    color={'#000000'}
                    solid
                    size={28}
                  />
                )} */}

                {/* <View style={{marginLeft: 10}}>
                  <Text
                    style={{color: '#000000', fontSize: 16}}
                    numberOfLines={1}
                  >
                    HII!
                  </Text>
                  <Text
                    bold
                    style={{color: '#000000', fontSize: 18}}
                    numberOfLines={2}
                  >
                    {user.user.name}
                  </Text>
                </View> */}
                <TextInput
                  onChangeText={filterCategory}
                  placeholder={'Enter a Text'}
                  value={category}
                  icon={
                    <TouchableOpacity onPress={() => filterCategory('')}>
                      <Icon
                        name="times"
                        size={16}
                        color={BaseColor.grayColor}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
              {/* <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginRight: 10,
                }}
              >
                <TouchableOpacity onPress={() => alert('Press Notification')}>
                  <IconFeather
                    name={'search'}
                    color={'#000000'}
                    solid
                    size={26}
                  />
                </TouchableOpacity>
              </View> */}
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
          >
            {material.map((item, index) => (
              // <View>
              //   <Text>{item.request_by}</Text>
              // </View>
              <CardHistory
                onPress={() => navigation.navigate('HistoryDetail', item)}
                request={item.request_by}
                status={item.status}
                req_no={item.req_no}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SearchHistory;
