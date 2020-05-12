import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View, Dimensions} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';

import {Button} from '~/components/Button';

import styles from './styles';
import bg from '~/assets/background/bg.png';

const events = [
  {name: 'Create Event', size: 25, screen: 'EventType'},
  {name: 'Find Events Near Me', size: 21, screen: 'EventsNearMe'},
  {name: 'Scorecard Only', size: 25, screen: 'Scorecard'},
  {name: 'My Events', size: 25, screen: 'UpcomingEvents'},
];

const Login = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <View style={[styles.screen, {marginTop: useHeaderHeight() * 2.5}]}>
        {events.map((event, key) => (
          <View style={{marginTop: '10%'}} key={key}>
            <Button
              title={event.name}
              size={event.size}
              screen={event.screen}
            />
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

export default Login;
