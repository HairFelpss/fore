import React, {useContext} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';

import Button from '~/components/Button';

import styles from './styles';
import bg from '~/assets/background/bg.png';
import question from '~/assets/question/question.png';
const events = [
  {name: 'Standard', size: 25, screen: 'EventDate', type: 0},
  {name: 'Modified', size: 22, screen: 'EventDate', type: 1},
];

const EventType = () => {
  const navigation = useContext(NavigationContext);
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <View style={[styles.screen, {marginTop: useHeaderHeight() * 2.5}]}>
        {events.map((event, key) => (
          <View style={{marginTop: '20%'}} key={key}>
            <Button
              title={event.name}
              size={event.size}
              screen={event.screen}
              type={event.type}
            />
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('EventInfo')}
        style={{alignSelf: 'flex-end'}}>
        <Image source={question} style={{maxWidth: 50, maxHeight: 50}} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default EventType;
