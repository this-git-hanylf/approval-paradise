import Icon from '@components/Icon';
import Text from '@components/Text';
import {useTheme, BaseColor, DefaultTheme} from '@config';
import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {parseHexTransparency} from '@utils';

const CardReport06 = ({
  disable,
  title = '',
  price = '',
  icon = '',
  style = {},
  quantity = '',
  color,
  colorText,
  colorIcon,
  onPress = () => {},
}) => {
  //   const {colors} = DefaultTheme();
  // console.log('fontsize', font);
  console.log('disable', disable);
  return (
    <TouchableOpacity
      disabled={disable}
      style={styles.container}
      onPress={onPress}
    >
      <View
        style={[
          styles.content,
          {
            backgroundColor: color,
            borderColor: DefaultTheme.light.colors.border,
          },
          style,
        ]}
      >
        <View style={[styles.header]}>
          <View
            style={[
              styles.viewIcon,
              // {
              //   backgroundColor: parseHexTransparency(BaseColor.whiteColor, 30),
              // },
            ]}
          >
            <Icon name={icon} size={22} style={{color: colorIcon}} solid />
          </View>
        </View>
        <Text
          headline
          whiteColor
          style={{marginTop: 10, fontSize: 40, color: colorText}}
        >
          {quantity}
        </Text>
        <Text
          subhead
          whiteColor
          style={{marginTop: 10, fontSize: 18, color: colorText}}
        >
          {title} {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

CardReport06.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  price: PropTypes.string,
  icon: PropTypes.string,
  percent: PropTypes.string,
};

export default CardReport06;
