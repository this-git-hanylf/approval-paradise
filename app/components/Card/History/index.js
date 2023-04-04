import Icon from '@components/Icon';
import Text from '@components/Text';
import {useTheme, BaseColor} from '@config';
// import {Header} from '@components';
import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from '../History/styles';
import {parseHexTransparency} from '@utils';

const CardHistory = ({
  //   title = '',
  //   subTitle = '',
  //   price = '',
  //   icon = '',
  //   percent = '',
  //   style = {},
  onPress = () => {},
  //   isUp = true,
  //   colorIcon = '',
  //   backgroundIcon = '',
  //   disabled = false,
  request = '',
  status = '',
  req_no = '',
}) => {
  //   const {colors} = useTheme();
  return (
    <View style={[styles.cardList]}>
      {status == 'C' ? (
        <TouchableOpacity
          style={[
            styles.shadowProps,
            {
              paddingVertical: 20,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
            },
          ]}
          onPress={onPress}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <View
              style={{
                marginRight: 20,
                marginLeft: 15,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
                justifyContent: 'center',
                backgroundColor: '#ff2424',
              }}
            >
              <Text
                bold
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  // marginBottom: 10,
                }}
              >
                Closed
              </Text>
            </View>

            <View>
              <Text
                bold
                style={{
                  color: '#000000',
                  fontSize: 18,
                  // marginBottom: 10,
                }}
              >
                This Approval was Closed
              </Text>
            </View>
          </View>

          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
            }}
          >
            <Icon
              name={'user'}
              color={'#000000'}
              size={16}
              style={{marginRight: 10}}
            />
            <Text style={{textAlign: 'left', color: '#000000', fontSize: 16}}>
              Request By :{' '}
            </Text>
            <Text
              style={{
                textAlign: 'right',
                color: '#000000',
                fontSize: 16,
              }}
            >
              {request}
            </Text>
          </View>

          {/* <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              flexDirection: 'row',
            }}
          >
            <Text style={{textAlign: 'left', color: '#000000', fontSize: 16}}>
              Status :{' '}
            </Text>
            {status == 'C' && (
              <Text
                style={{
                  textAlign: 'right',
                  color: '#000000',
                  fontSize: 16,
                }}
              >
                Closed
              </Text>
            )}
          </View> */}

          <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              flexDirection: 'row',
            }}
          >
            <Icon
              name={'file-invoice'}
              color={'#000000'}
              size={16}
              style={{marginRight: 10}}
            />
            <Text style={{textAlign: 'left', color: '#000000', fontSize: 16}}>
              Request No :{' '}
            </Text>

            <Text
              style={{
                textAlign: 'right',
                color: '#000000',
                fontSize: 16,
              }}
            >
              {req_no}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        status == 'P' && (
          <TouchableOpacity
            style={[
              styles.shadowProps,
              {
                paddingVertical: 20,
                borderRadius: 15,
                backgroundColor: '#FFFFFF',
              },
            ]}
            onPress={onPress}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  marginRight: 20,
                  marginLeft: 15,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  justifyContent: 'center',
                  // backgroundColor: '#ff2424',
                  backgroundColor: '#007638',
                }}
              >
                <Text
                  bold
                  style={{
                    color: '#FFFFFF',
                    fontSize: 14,
                    // marginBottom: 10,
                  }}
                >
                  Approved
                </Text>
              </View>

              <View>
                <Text
                  bold
                  style={{
                    color: '#000000',
                    fontSize: 18,
                    // marginBottom: 10,
                  }}
                >
                  This Approval was Approved
                </Text>
              </View>
            </View>

            <View
              style={{
                marginLeft: 20,
                flexDirection: 'row',
              }}
            >
              <Icon
                name={'user'}
                color={'#000000'}
                size={16}
                style={{marginRight: 10}}
              />
              <Text style={{textAlign: 'left', color: '#000000', fontSize: 16}}>
                Request By :{' '}
              </Text>
              <Text
                style={{
                  textAlign: 'right',
                  color: '#000000',
                  fontSize: 16,
                }}
              >
                {request}
              </Text>
            </View>

            {/* <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              flexDirection: 'row',
            }}
          >
            <Text style={{textAlign: 'left', color: '#000000', fontSize: 16}}>
              Status :{' '}
            </Text>
            {status == 'C' && (
              <Text
                style={{
                  textAlign: 'right',
                  color: '#000000',
                  fontSize: 16,
                }}
              >
                Closed
              </Text>
            )}
          </View> */}

            <View
              style={{
                marginLeft: 20,
                marginTop: 15,
                flexDirection: 'row',
              }}
            >
              <Icon
                name={'file-invoice'}
                color={'#000000'}
                size={16}
                style={{marginRight: 10}}
              />
              <Text style={{textAlign: 'left', color: '#000000', fontSize: 16}}>
                Request No :{' '}
              </Text>

              <Text
                style={{
                  textAlign: 'right',
                  color: '#000000',
                  fontSize: 16,
                }}
              >
                {req_no}
              </Text>
            </View>
          </TouchableOpacity>
        )
      )}

      {status == 'R' && (
        <TouchableOpacity
          style={[
            styles.shadowProps,
            {
              paddingVertical: 20,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
            },
          ]}
          onPress={onPress}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <View
              style={{
                marginRight: 20,
                marginLeft: 15,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
                justifyContent: 'center',
                // backgroundColor: '#ff2424',
                backgroundColor: '#A19E03',
              }}
            >
              <Text
                bold
                style={{
                  color: '#FFFFFF',
                  fontSize: 9,
                  // marginBottom: 10,
                }}
              >
                Unapproved
              </Text>
            </View>

            <View>
              <Text
                bold
                style={{
                  color: '#000000',
                  fontSize: 18,
                  // marginBottom: 10,
                }}
              >
                This Approval was Unapproved
              </Text>
            </View>
          </View>

          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
            }}
          >
            <Icon
              name={'user'}
              color={'#000000'}
              size={16}
              style={{marginRight: 10}}
            />
            <Text style={{textAlign: 'left', color: '#000000', fontSize: 16}}>
              Request By :{' '}
            </Text>
            <Text
              style={{
                textAlign: 'right',
                color: '#000000',
                fontSize: 16,
              }}
            >
              {request}
            </Text>
          </View>

          {/* <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              flexDirection: 'row',
            }}
          >
            <Text style={{textAlign: 'left', color: '#000000', fontSize: 16}}>
              Status :{' '}
            </Text>
            {status == 'C' && (
              <Text
                style={{
                  textAlign: 'right',
                  color: '#000000',
                  fontSize: 16,
                }}
              >
                Closed
              </Text>
            )}
          </View> */}

          <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              flexDirection: 'row',
            }}
          >
            <Icon
              name={'file-invoice'}
              color={'#000000'}
              size={16}
              style={{marginRight: 10}}
            />
            <Text style={{textAlign: 'left', color: '#000000', fontSize: 16}}>
              Request No :{' '}
            </Text>

            <Text
              style={{
                textAlign: 'right',
                color: '#000000',
                fontSize: 16,
              }}
            >
              {req_no}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {/* <Text>Item Code</Text>
              <Text>Item Description</Text>
              <Text>Request QTY</Text>
              <Text>UOM</Text> */}
    </View>
  );
};

CardHistory.propTypes = {
  //   onPress: PropTypes.func,
  //   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  //   title: PropTypes.string,
  //   price: PropTypes.string,
  //   icon: PropTypes.string,
  //   subTitle: PropTypes.string,
  //   percent: PropTypes.string,
  request: PropTypes.string,
  status: PropTypes.string,
  req_no: PropTypes.string,
};

export default CardHistory;
