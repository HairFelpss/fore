import React, {useState} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import Select from '~/components/Select';
import Button from '~/components/Button';

import styles from './styles';
import bg from '~/assets/background/bg.png';

import states from '~/config/states';
import city from '~/config/coursesNearMe';

const EventLocation = () => {
  const [selectStates, setSelectStates] = useState('');
  const [selectCity, setSelectCity] = useState('');

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <View style={[styles.screen, {marginTop: useHeaderHeight() * 2.5}]}>
        <View>
          <Select
            name="State"
            list={states}
            setElement={setSelectStates}
            value={selectStates}
          />
          <Select
            name="City/Course"
            list={city}
            setElement={setSelectCity}
            value={selectCity}
          />
        </View>
        <Button title="Next" size={22} screen="EventForm" bottom />
      </View>
    </ImageBackground>
  );
};

export default EventLocation;
