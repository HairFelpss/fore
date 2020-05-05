import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';

import {View, TouchableOpacity, ImageBackground, Text} from 'react-native';
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
      <ImageBackground style={styles.image} source={button}>
        <View
          style={{
            paddingTop: size > 21 ? '1%' : '2%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: size,
              color: colors.white,
              fontFamily: 'comic-sans-ms-bold',
            }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.imageBottom}>
      <ImageBackground style={styles.image} source={button}>
        <View
          style={{
            paddingTop: size > 20 ? '1%' : '3%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: size,
              color: colors.white,
              fontFamily: 'comic-sans-ms-bold',
            }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Button;
