import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';

import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import colors from '~/styles';
import styles from './styles';
import button from '~/assets/button/button.png';

export const Button = ({title, size, screen, type}) => {
  const navigation = useContext(NavigationContext);
  return (
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
              fontFamily: 'Comic Sans MS Bold',
            }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export const BottomButton = ({title, size, screen}) => {
  const navigation = useContext(NavigationContext);
  console.log(Dimensions.get('window').height * 0.085);
  console.log(Dimensions.get('window').width * 0.73);

  return (
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
              fontFamily: 'Comic Sans MS Bold',
            }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export const SmallButton = ({title, size, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.smallButton}>
      <ImageBackground style={styles.image} source={button}>
        <View
          style={{
            paddingTop: '1%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: size,
              color: colors.white,
              fontFamily: 'Comic Sans MS Bold',
            }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
