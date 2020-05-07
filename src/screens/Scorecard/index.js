import React, {useState} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {InputField as Input, InputMultiline} from '~/components/Input';
import CheckBox from '~/components/Checkbox';
import styles from './styles';
import colors from '~/styles';
import bg from '~/assets/background/bg.png';
import Button from '~/components/Button';

import {Title} from '~/components/Text';

const Scorecard = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight()}]}>
        <View style={{width: '100%'}}>
          <View style={styles.part}>
            <View style={styles.title}>
              <Title title="Name Your Game!" />
            </View>
            <Input content="ie. Tuesday Tee Time" />
          </View>
        </View>
      </LinearGradient>
      <Button title="Next" size={22} screen="WhosPlaying" bottom />
    </ImageBackground>
  );
};

export default Scorecard;
