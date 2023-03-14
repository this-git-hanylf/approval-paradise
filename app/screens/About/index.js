import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Animated,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import {Text, Header, Icon, Image, News43} from '@components';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {BaseStyle, BaseColor} from '@config';

import {DynamicHeader, Placeholder, PlaceholderLine} from '@components';
import {Divider} from 'react-native-paper';
import styles from './styles';

import {List} from 'react-native-paper';

export const DATA = [
  {
    id: 1,
    title: 'Modern JS: A curated collection',
  },
  {
    id: 2,
    title: 'JavaScript notes for professionals',
  },
  {
    id: 3,
    title: 'JavaScript: The Good Parts',
  },
  // {
  //   id: 4,
  //   title: 'JavaScript: The right way',
  // },
  // {
  //   id: 5,
  //   title: 'Exploring ES6',
  // },
  // {
  //   id: 6,
  //   title: 'JavaScript Enlightenment',
  // },
  // {
  //   id: 7,
  //   title: 'You dont know JS',
  // },
  // {
  //   id: 8,
  //   title: 'Learn JavaScript',
  // },
  // {
  //   id: 9,
  //   title: 'JavaScript succintly',
  // },
  // {
  //   id: 10,
  //   title: 'Human JavaScript',
  // },
  // {
  //   id: 11,
  //   title: 'JavaScript design patterns',
  // },
  // {
  //   id: 12,
  //   title: 'JS50: 50 illustrations in JS',
  // },
  // {
  //   id: 13,
  //   title: 'Eloqent JavaScript',
  // },
  // {
  //   id: 14,
  //   title: 'Practical ES6',
  // },
  // {
  //   id: 15,
  //   title: 'Speaking JavaScript',
  // },
  // {
  //   id: 16,
  //   title: 'Speaking JavaScript',
  // },
  // {
  //   id: 17,
  //   title: 'Speaking JavaScript',
  // },
  // {
  //   id: 18,
  //   title: 'Speaking JavaScript',
  // },
];

const AboutUs = props => {
  const {navigation} = props;
  const {colors} = useTheme();
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 60,
        backgroundColor: BaseColor.whiteColor,
      }}>
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={['right', 'top', 'left']}>
        <Header title={t('about_us')} />

        <ScrollView
          stickyHeaderIndices={[1]}
          style={{backgroundColor: BaseColor.whiteColor}}>
          <View style={{backgroundColor: 'aqua', marginHorizontal: 10}}>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              Over 31 Years in Industrial Development | Home to Over 150 Global
              Companies of 16 Countries
            </Text>
          </View>

          <View
            style={{
              backgroundColor: BaseColor.whiteColor,
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{
                height: 70,
                width: 190,
              }}></Image>
          </View>

          {/* {loading ? (
            <Placeholder style={{marginHorizontal: 0}}>
              <PlaceholderLine
                width={100}
                style={styles.imageBackground}
                noMargin
              />
            </Placeholder>
          ) : (
            <View
              style={[
                {
                  marginHorizontal: 10,
                },
                styles.shadowProps,
              ]}>
              <ImageBackground
                source={require('../../assets/images/category-home.jpg')}
                style={[styles.imageBackground]}
                borderRadius={8}>
                <View style={styles.viewBackground}>
                  <Text title1 blackColor bold>
                    About Us
                  </Text>
                  <Text title3 semibold>
                    subtitle
                  </Text>
                </View>
              </ImageBackground>
            </View>
          )} */}

          {/* --- image about us  */}
          <View style={{paddingHorizontal: 25, paddingVertical: 10}}>
            <Image
              style={{
                height: 200,
                width: '100%',
                alignSelf: 'center',
                resizeMode: 'contain',
                borderRadius: 8,
              }}
              source={require('@assets/images/news-07.jpg')}></Image>
          </View>
          {/* --- tutup image about us  */}

          {/* --- deskripsi Pt suryacipta swadaya  */}
          <View style={{marginHorizontal: 25, marginVertical: 10}}>
            <View style={{marginBottom: 20}}>
              <Text title3 bold style={{color: BaseColor.textColor}}>
                PT Suryacipta Swadaya
              </Text>
              {/* <View style={{}}></View> */}
              <Divider
                style={{
                  backgroundColor: colors.primary,
                  height: 5,
                  // width: '8%',
                  marginTop: 10,
                  borderRadius: 5,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: 'justify',
                color: BaseColor.textColor,
                lineHeight: 20,
                marginBottom: 10,
              }}>
              PT Suryacipta Swadaya (est. 1990) is a member of PT Surya Semesta
              Internusa Tbk (SSIA), also known as Surya Internusa Group, one of
              the longest established business groups in Indonesia.
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                color: BaseColor.textColor,
                lineHeight: 20,
                marginBottom: 10,
              }}>
              SSIA is a public company which businesses include:
            </Text>

            <FlatList
              data={DATA}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name={'check-circle'}
                      fontSize={22}
                      style={{
                        color: BaseColor.orangeColor,
                        paddingRight: 15,
                      }}></Icon>
                    <Text style={{color: BaseColor.textColor}}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </View>
          {/* --- tutup deskripsi Pt suryacipta swadaya  */}

          {/* ---- focused developing managing  */}
          <View style={{paddingHorizontal: 25, paddingVertical: 10}}>
            <View style={{marginTop: 10}}>
              <Text title3 bold style={{color: BaseColor.textColor}}>
                PT Suryacipta Swadaya Focuses on Developing & Managing:
              </Text>
              {/* <View style={{}}></View> */}
              <Divider
                style={{
                  backgroundColor: colors.primary,
                  height: 5,
                  // width: '8%',
                  marginTop: 10,
                  borderRadius: 5,
                }}
              />
            </View>

            <View style={{marginVertical: 20}}>
              <Text style={{marginBottom: 20, color: BaseColor.textColor}} bold>
                Industrial Estate in Karawang:
              </Text>

              <FlatList
                data={DATA}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name={'check-circle'}
                        fontSize={22}
                        style={{
                          color: BaseColor.orangeColor,
                          paddingRight: 15,
                        }}></Icon>
                      <Text style={{color: BaseColor.textColor}}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
                keyExtractor={item => item.id}
              />
            </View>

            <View style={{marginVertical: 20}}>
              <Text style={{marginBottom: 20, color: BaseColor.textColor}} bold>
                Integrated Industrial Estate & Smart City in Subang:
              </Text>

              <FlatList
                data={DATA}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name={'check-circle'}
                        fontSize={22}
                        style={{
                          color: BaseColor.orangeColor,
                          paddingRight: 15,
                        }}></Icon>
                      <Text style={{color: BaseColor.textColor}}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          {/* ---- tutup focused developing managing  */}

          {/* ----- VISION & MISSION */}
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: colors.background,
              paddingBottom: 20,
            }}>
            <View
              style={{
                // backgroundColor: colors.background,

                width: '100%',
                // borderRadius: 8,
                paddingBottom: 20,
              }}>
              <Text
                title3
                bold
                style={{
                  color: BaseColor.primaryColor,
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Our Vision & Mission
              </Text>
            </View>

            <View
              style={{
                backgroundColor: BaseColor.whiteColor,

                borderRadius: 8,
                marginHorizontal: 25,
                paddingBottom: 20,
              }}>
              <Text
                title4
                bold
                style={{
                  color: BaseColor.textColor,
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                Vision
              </Text>

              <Text
                style={{
                  color: BaseColor.textColor,
                  alignSelf: 'center',
                  textAlign: 'center',
                  marginTop: 5,
                  paddingHorizontal: 50,
                  lineHeight: 20,
                }}>
                To be the largest, most reliable, trusted & respected
                sustainable industrial city for a better Indonesia.
              </Text>
            </View>

            <View
              style={{
                backgroundColor: BaseColor.whiteColor,
                borderRadius: 8,
                marginHorizontal: 25,
                paddingBottom: 20,
                marginTop: 20,
              }}>
              <Text
                title4
                bold
                style={{
                  color: BaseColor.textColor,
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                Mission
              </Text>

              <Text
                style={{
                  color: BaseColor.textColor,
                  alignSelf: 'center',
                  textAlign: 'center',
                  marginTop: 5,
                  paddingHorizontal: 50,
                  lineHeight: 20,
                }}>
                To create value to customers & other stakeholders by providing
                high-quality industrial city & services.
              </Text>
            </View>
          </View>
          {/* ----- tutup VISION & MISSION */}

          {/* ---- pesan dari president director  */}
          <View style={{paddingHorizontal: 25, paddingVertical: 10}}>
            <View style={{marginTop: 10}}>
              <Text title3 bold style={{color: BaseColor.textColor}}>
                INDONESIA & SURYACIPTA: Positioning That Drives Your Growth
              </Text>
              {/* <View style={{}}></View> */}
              <Divider
                style={{
                  backgroundColor: colors.primary,
                  height: 5,
                  // width: '8%',
                  marginTop: 10,
                  borderRadius: 5,
                }}
              />
            </View>

            <View style={{marginTop: 20}}>
              <Text title3 bold style={{color: BaseColor.textColor}}>
                From The Desk of President Director, Johannes Suriadjaja
              </Text>
              <Text style={{paddingTop: 20}}>
                Dear Investors, {'\n'} {'\n'}Investing in Indonesia is
                increasingly attractive. {'\n'} {'\n'} {'\n'}
                Known as one of the Asia Pacific Tigers, Indonesia has: {'\n'}
                {'\n'}
              </Text>
              <FlatList
                data={DATA}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name={'check-circle'}
                        fontSize={22}
                        style={{
                          color: BaseColor.orangeColor,
                          paddingRight: 15,
                        }}></Icon>
                      <Text style={{color: BaseColor.textColor}}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
                keyExtractor={item => item.id}
              />
              <Text style={{paddingTop: 10}}>
                Indonesia has tremendous growth potential & now firmly stable,
                thanks to 24 years of vibrant democratic government. {'\n'}
                {'\n'}With the current improvement in investment climate &
                higher global profile, Indonesia is showing a clear strength.
              </Text>
            </View>

            <View
              style={{
                backgroundColor: BaseColor.whiteColor,
                paddingHorizontal: 10,
              }}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{
                  height: 70,
                  width: 190,
                }}></Image>
              <Text>disini ada foto president director</Text>
            </View>
          </View>
          {/* ---- tutup pesan dari president director  */}

          {/* --- integrated pt suryacipta  */}
          <View style={{paddingHorizontal: 25, paddingVertical: 10}}>
            <View style={{marginBottom: 10}}>
              <Text title3 bold style={{color: BaseColor.textColor}}>
                PT Suryacipta Swadaya - Fully Integrated Smart Industrial Estate
                in Karawang & Subang, West Java
              </Text>
              {/* <View style={{}}></View> */}
              <Divider
                style={{
                  backgroundColor: colors.primary,
                  height: 5,
                  // width: '8%',
                  marginTop: 10,
                  borderRadius: 5,
                }}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text>
                PT Suryacipta Swadaya offers vast land to develop various
                industries. it is the home of 150 prestigious global companies.
                {'\n'} {'\n'}Well located in the heart of the industrial belt of
                West Java, the estate offers a congenial setting for businesses
                to take shape because of easy accessibillity & connectivity.
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  color: BaseColor.textColor,
                  lineHeight: 20,
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                SSIA is a public company which businesses include:
              </Text>

              <FlatList
                data={DATA}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name={'check-circle'}
                        fontSize={22}
                        style={{
                          color: BaseColor.orangeColor,
                          paddingRight: 15,
                        }}></Icon>
                      <Text style={{color: BaseColor.textColor}}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
                keyExtractor={item => item.id}
              />
              <Text style={{marginTop: 10}}>
                This makes Suryacipta one of the most sought-after industrial
                estates in Indonesia.
              </Text>
            </View>
          </View>
          {/* --- tutup integrated pt suryacipta  */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AboutUs;
