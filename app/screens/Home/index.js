import {
  FlatList,
  ImageBackground,
  View,
  // Image,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Image from '@components/Image';
// import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
// import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
// import IconIonicons from 'react-native-vector-icons/Ionicons';
// import IconFeather from 'react-native-vector-icons/Feather';
// import Carousel from 'react-native-snap-carousel';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {CardSlide, Text, CardReport06, CardVertical} from '@components';
import {BaseStyle, BaseColor} from '@config';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme, DarkTheme} from '@react-navigation/native';
import jsondummy from './dummy.json';
import {MaterialRequestData} from '@data';
import {useSelector} from 'react-redux';
// import {Images} from '@config';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

console.log(
  'jsondummy',
  jsondummy.carouselItems.map(data => {
    console.log('datadummy', data);
  }),
);

const Home = props => {
  const [material, setMaterial] = useState(MaterialRequestData);
  const {colors} = useTheme();
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // const goPostDetail = () => () => {
  //   navigation.navigate("PostDetail", { item: item });

  // };

  console.log('user home', user);
  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'top', 'left']}
      >
        {/* {renderContent()} */}
        <View style={styles.backgroundStyle}>
          {/* <View style={[styles.styleHeaderContent, styles.shadowProps]}> */}
          {/* view untuk rata margin kanan kiri 10  */}
          <View style={{marginVertical: 10, marginHorizontal: 10}}>
            {/* ICON BELL AND USER */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // alignSelf: 'center',
                // borderColor: 'black',
                // borderWidth: 0.5,
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
                )}

                <View style={{marginLeft: 10}}>
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
          </View>

          <ScrollView
            vertical={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{marginBottom: 60}}
          >
            {material.map((item, index) => (
              <CardVertical
                request={item.req_by}
                status={item.status}
                req_no={item.request_no}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
