import React from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import bg from '~/assets/background/bg.png';

const EventInfo = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight()}]}>
        <View style={{width: '100%'}}>
          <View style={styles.part}>
            <Text style={styles.title}>Standard</Text>
            <Text style={styles.text}>
              Single Day, Shotgun Style Events have designated start times. May
              require Course Approval.
            </Text>
          </View>
          <View style={styles.part}>
            <Text style={styles.title}>Modified</Text>
            <Text style={styles.text}>
              Events Allowing Players to Compete Within an extended timeframe,
              from 1 to 7 Days. Does not require Course Approval.
            </Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default EventInfo;
