import {FlatList, ImageBackground, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
// import Carousel from 'react-native-snap-carousel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CardSlide, Text} from '@components';
import {BaseStyle, BaseColor} from '@config';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme, DarkTheme} from '@react-navigation/native';
import jsondummy from './dummy.json';
import {HomePopularData} from '@data';
import {Images} from '@config';

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
  const [popular, setPopular] = useState(HomePopularData);
  const {colors} = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // const goPostDetail = () => () => {
  //   navigation.navigate("PostDetail", { item: item });

  // };
  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'top', 'left']}>
        {/* {renderContent()} */}
        <View style={styles.backgroundStyle}>
          <View style={[styles.styleHeaderContent, styles.shadowProps]}>
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
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <IconAntDesign
                    name={'user'}
                    color={'#FFFFFF'}
                    solid
                    size={26}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{color: '#FFFFFF', fontSize: 14}}
                      numberOfLines={1}>
                      HII!
                    </Text>
                    <Text
                      bold
                      style={{color: '#FFFFFF', fontSize: 16}}
                      numberOfLines={2}>
                      ZAKARIA WIJAYA
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // borderColor: 'tomato',
                    // borderWidth: 0.5,
                  }}>
                  <TouchableOpacity onPress={() => alert('Press Notification')}>
                    <IconFeather
                      name={'bell'}
                      color={'#FFFFFF'}
                      solid
                      size={26}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* ICON MENU */}

              <View
                style={{
                  // borderColor: 'black',
                  // borderWidth: 0.5,
                  marginVertical: 20,
                  width: '100%',
                  // height: '35%',
                  alignContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                  }}
                  onPress={() => alert('Tenant Access')}>
                  <View
                    style={{
                      backgroundColor: 'rgba(161, 227, 195, 0.5)',
                      borderRadius: 24,
                      paddingVertical: 20,
                      paddingHorizontal: 20,
                    }}>
                    <IconSimpleLine
                      name={'user-following'}
                      color={'#FFFFFF'}
                      solid
                      size={30}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 5,
                      flexDirection: 'row',
                      width: 80,
                      // borderWidth: 0.5,
                      // borderColor: 'black',
                    }}>
                    <Text
                      numberOfLines={2}
                      style={{color: '#FFFFFF', textAlign: 'center', flex: 1}}>
                      Tenant Access
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                  }}
                  onPress={() => alert('Whats on Suryacipta')}>
                  <View
                    style={{
                      backgroundColor: 'rgba(161, 227, 195, 0.5)',
                      borderRadius: 24,
                      paddingVertical: 20,
                      paddingHorizontal: 20,
                    }}>
                    <IconIonicons
                      name={'megaphone-outline'}
                      color={'#FFFFFF'}
                      solid
                      size={30}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      width: 80,
                      // borderWidth: 0.5,
                      // borderColor: 'black',
                    }}>
                    <Text
                      numberOfLines={2}
                      style={{color: '#FFFFFF', textAlign: 'center', flex: 1}}>
                      What's on Suryacipta
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                  }}
                  onPress={() => alert('Suryacipta Center of Information')}>
                  <View
                    style={{
                      backgroundColor: 'rgba(161, 227, 195, 0.5)',
                      borderRadius: 24,
                      paddingVertical: 20,
                      paddingHorizontal: 20,
                    }}>
                    <IconSimpleLine
                      name={'picture'}
                      color={'#FFFFFF'}
                      solid
                      size={30}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      width: 100,
                      // borderWidth: 0.5,
                      // borderColor: 'black',
                    }}>
                    <Text
                      numberOfLines={2}
                      style={{color: '#FFFFFF', textAlign: 'center', flex: 1}}>
                      Suryacipta Center of Information
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                  }}
                  onPress={() => alert('Tenant Directory - Center')}>
                  <View
                    style={{
                      backgroundColor: 'rgba(161, 227, 195, 0.5)',
                      borderRadius: 24,
                      paddingVertical: 20,
                      paddingHorizontal: 20,
                    }}>
                    <IconIonicons
                      name={'home-outline'}
                      color={'#FFFFFF'}
                      solid
                      size={30}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      width: 80,
                      // borderWidth: 0.5,
                      // borderColor: 'black',
                    }}>
                    <Text
                      numberOfLines={2}
                      style={{color: '#FFFFFF', textAlign: 'center', flex: 1}}>
                      Tenant Directory - Center
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* <Text style={{color: '#FFFFFF', fontSize: 16}}>
                Welcome to Suryacipta City of Industry
              </Text> */}

              {/* Get Direction to Suryacipta */}
              <TouchableOpacity
                onPress={() => alert('Get Direction to Suryacipta')}
                style={[
                  {
                    // backgroundColor: 'rgba(217, 217, 217, 0.5)',
                    backgroundColor: 'rgb(217, 217, 217)',
                    // backgroundColor: 'transparent',
                    height: 50,
                    width: '100%',
                    borderRadius: 15,
                    flexDirection: 'row',
                    // justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 10,
                    // // borderColor: 'black',
                    // // borderWidth: 0.5,
                  },
                  styles.shadowProps,
                ]}>
                <View style={{margin: 10}}>
                  <IconSimpleLine
                    name={'location-pin'}
                    color={'#000000'}
                    solid
                    size={20}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    // // borderColor: 'black',
                    // // borderWidth: 0.5,
                    width: '90%',
                  }}>
                  <Text style={{color: '#000000'}}>
                    Get direction to SuryaCipta
                  </Text>
                  <IconEvilIcons
                    name={'arrow-right'}
                    color={'#000000'}
                    solid
                    size={24}
                    style={{alignSelf: 'center'}}
                  />
                </View>
              </TouchableOpacity>
              {/* icon icon menu */}
            </View>
          </View>

          <View style={{marginVertical: 32}}>
            <View style={{marginHorizontal: 25, marginVertical: 25}}>
              <TouchableOpacity>
                <ImageBackground
                  source={Images.news09}
                  style={styles.imageBackground}
                  borderTopLeftRadius={8}
                  borderTopRightRadius={8}
                  borderBottomLeftRadius={8}
                  borderBottomRightRadius={8}
                />
              </TouchableOpacity>
            </View>

            {/* CARDSLIDER */}
            <View>
              <FlatList
                contentContainerStyle={styles.paddingFlatList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={popular}
                keyExtractor={(item, index) => item.id}
                renderItem={({item, index}) => (
                  <CardSlide
                    loading={loading}
                    onPress={
                      // goPostDetail(item)
                      () => {
                        alert('Success Navigate');
                      }
                    }
                    style={{
                      marginRight: index == popular.length - 1 ? 0 : 15,
                    }}
                    image={item.image}
                    date={item.date}
                    title={item.title}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
