import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';

import {TouchableOpacity, ImageBackground, Text} from 'react-native';
import colors from '~/styles';
import styles from './styles';
import button from '~/assets/button/button.png';

const Button = ({title, size, screen, bottom, type}) => {
  const navigation = useContext(NavigationContext);
  console.log(screen);
  return !bottom ? (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(screen, {
          type,
        })
      }
      style={styles.imageWrapper}>
      <ImageBackground style={styles.theImage} source={button}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: size,
            color: colors.white,
            fontFamily: 'ComicSansMSRegular.ttf',
          }}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.imageBottom}>
      <ImageBackground style={styles.theImage} source={button}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: size,
            paddingTop: 0,
            color: colors.white,
            fontFamily: 'ComicSansMSRegular.ttf',
          }}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Button;
