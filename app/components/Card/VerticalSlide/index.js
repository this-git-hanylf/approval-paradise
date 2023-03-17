import Icon from '@components/Icon';
import Text from '@components/Text';
import {useTheme, BaseColor} from '@config';
import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {parseHexTransparency} from '@utils';

const CardVertical = ({
  //   title = '',
  //   subTitle = '',
  //   price = '',
  //   icon = '',
  //   percent = '',
  //   style = {},
  //   onPress = () => {},
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
      {status == 'R' ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              marginRight: 20,
              marginBottom: 10,
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: 'rgba(4, 132, 60, 0.10)',
            }}
          >
            <Icon solid name={'times'} size={14} style={{color: '#007638'}} />
          </View>
          <Text
            bold
            style={{
              color: '#000000',
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            Need Your Approval
          </Text>
        </View>
      ) : (
        (status == 'P' && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                marginRight: 20,
                marginBottom: 10,
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor: 'rgba(4, 132, 60, 0.10)',
              }}
            >
              <Icon solid name={'check'} size={14} style={{color: '#007638'}} />
            </View>
            <Text
              bold
              style={{color: '#000000', fontSize: 18, marginBottom: 10}}
            >
              Approved
            </Text>
          </View>
        )) ||
        (status == 'C' && null)
      )}
      {status == 'C' ? null : (
        <View
          style={{
            paddingVertical: 20,
            borderRadius: 15,
            backgroundColor: 'rgba(4, 132, 60, 0.10)',
          }}
        >
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
            }}
          >
            <Text style={{textAlign: 'left', color: '#015e2d', fontSize: 16}}>
              Request By :{' '}
            </Text>
            <Text
              style={{
                textAlign: 'right',
                color: '#015e2d',
                fontSize: 16,
              }}
            >
              {request}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              flexDirection: 'row',
            }}
          >
            <Text style={{textAlign: 'left', color: '#015e2d', fontSize: 16}}>
              Status :{' '}
            </Text>
            {status == 'R' ? (
              <Text
                style={{
                  textAlign: 'right',
                  color: '#015e2d',
                  fontSize: 16,
                }}
              >
                Pending
              </Text>
            ) : (
              (status == 'P' && (
                <Text
                  style={{
                    textAlign: 'right',
                    color: '#015e2d',
                    fontSize: 16,
                  }}
                >
                  Approved
                </Text>
              )) ||
              (status == 'C' && null)
            )}
          </View>

          <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              flexDirection: 'row',
            }}
          >
            <Text style={{textAlign: 'left', color: '#015e2d', fontSize: 16}}>
              Request No :{' '}
            </Text>

            <Text
              style={{
                textAlign: 'right',
                color: '#015e2d',
                fontSize: 16,
              }}
            >
              {req_no}
            </Text>
          </View>
        </View>
      )}
      {/* <Text>Item Code</Text>
              <Text>Item Description</Text>
              <Text>Request QTY</Text>
              <Text>UOM</Text> */}
    </View>
  );
};

CardVertical.propTypes = {
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

export default CardVertical;
