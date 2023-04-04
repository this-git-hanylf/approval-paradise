import Icon from '@components/Icon';
import Text from '@components/Text';
import {useTheme, BaseColor, DefaultTheme} from '@config';
import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity, View, useColorScheme} from 'react-native';
import styles from './styles';

import Loading from './Loading';
import {parseHexTransparency} from '@utils';
import {useNavigation} from '@react-navigation/native';

const CardHistoryDetail = ({
  //   title = '',
  //   subTitle = '',
  //   price = '',
  //   icon = '',
  //   percent = '',
  style = {},
  //   onPress = () => {},
  //   isUp = true,
  //   colorIcon = '',
  //   backgroundIcon = '',
  //   disabled = false,
  item_cd = '',
  item_descs = '',
  req_no = '',
  req_qty = '',
  uom = '',
  status = '',
  height = '',
  width = '',
  loading = '',
}) => {
  //   const {colors} = useTheme();
  const scheme = useColorScheme();
  const colors = DefaultTheme.light.colors;

  if (loading) {
    return <Loading style={style} />;
  }

  return (
    <View
      style={[
        styles.shadowProps,
        {
          paddingVertical: height / 25,
          borderRadius: 15,
          margin: 15,
          backgroundColor: scheme == 'dark' ? null : '#FFFFFF',
        },
      ]}
    >
      <View style={{flexDirection: 'column', padding: 30}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Icon
            name="cubes"
            size={36}
            color={colors.primary}
            enableRTL={true}
          />
          <Text bold style={{fontSize: 20, marginLeft: 10}}>
            Stock Code :{' '}
          </Text>
          <Text style={{fontSize: 20}}>{item_cd}</Text>
        </View>
        <View style={{flexDirection: 'column', marginBottom: 10}}>
          <Text bold style={{fontSize: 20, marginBottom: 10}}>
            Description :{' '}
          </Text>
          <Text style={{fontSize: 20}}>{item_descs}</Text>
        </View>
        <View style={{flexDirection: 'column', marginBottom: 10}}>
          <Text bold style={{fontSize: 20, marginBottom: 10}}>
            Request No :{' '}
          </Text>
          <Text style={{fontSize: 20}}>{req_no}</Text>
        </View>
        <View style={{flexDirection: 'column', marginBottom: 10}}>
          <Text bold style={{fontSize: 20, marginBottom: 10}}>
            Request QTY :{' '}
          </Text>
          <Text style={{fontSize: 20}}>{req_qty}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'column', marginBottom: 10}}>
            <Text bold style={{fontSize: 20, marginBottom: 10}}>
              Status :{' '}
            </Text>
            {status == 'C' ? (
              <Text style={{fontSize: 20}}>Closed</Text>
            ) : (
              status == 'P' && <Text style={{fontSize: 20}}>Approved</Text>
            )}
            {status == 'R' && <Text style={{fontSize: 20}}>Unapproved</Text>}
          </View>
          <View style={{flexDirection: 'column', marginBottom: 10}}>
            <Text bold style={{fontSize: 20, marginBottom: 10}}>
              UOM :{' '}
            </Text>
            <Text style={{fontSize: 20}}>{uom}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

CardHistoryDetail.propTypes = {
  //   onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  //   title: PropTypes.string,
  //   price: PropTypes.string,
  //   icon: PropTypes.string,
  //   subTitle: PropTypes.string,
  //   percent: PropTypes.string,
  item_cd: PropTypes.string,
  item_descs: PropTypes.string,
  req_no: PropTypes.string,
  req_qty: PropTypes.string,
  uom: PropTypes.string,
  status: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  loading: PropTypes.string,
};

export default CardHistoryDetail;
