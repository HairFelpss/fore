import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import {NavigationContext} from 'react-navigation';
import Date from '~/components/Date';
import {BottomButton} from '~/components/Button';

import styles from './styles';
import bg from '~/assets/background/bg.png';

const EventDate = () => {
  const navigation = useContext(NavigationContext);
  const type = navigation.getParam('type');
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <View style={[styles.screen, {marginTop: useHeaderHeight() * 2.5}]}>
        {type === 0 ? (
          <Date name="Event Date:" />
        ) : (
          <View>
            <View style={{width: '100%', paddingBottom: '5%'}}>
              <Date name="Event Start Date:" />
            </View>
            <View style={{width: '100%'}}>
              <Date name="Event End Date:" end />
            </View>
          </View>
        )}
        <BottomButton title="Next" size={22} screen="EventNear" />
      </View>
    </ImageBackground>
  );
};

export default EventDate;
