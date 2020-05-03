import React from 'react';

import {Dimensions, Image} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import styles from './styles';

const Logo = ({img, lessMargin}) => {
  if (Dimensions.get('window').height < 685) {
    return !lessMargin ? (
      <Image
        source={img}
        style={[
          styles.logoSmall,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
        ]}
        resizeMode="contain"
      />
    ) : (
      <Image
        source={img}
        style={[
          styles.lessMarginSmall,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
        ]}
        resizeMode="contain"
      />
    );
  }
  return !lessMargin ? (
    <Image
      source={img}
      style={[
        styles.logo,
        {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
      ]}
      resizeMode="contain"
    />
  ) : (
    <Image
      source={img}
      style={[
        styles.lessMargin,
        {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
      ]}
      resizeMode="contain"
    />
  );
};

export default Logo;
