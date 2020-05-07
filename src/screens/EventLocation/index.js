import React, {useState} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import Select from '~/components/Select';
import {BottomButton} from '~/components/Button';
import Overlay from '~/components/Overlay';
import styles from './styles';
import bg from '~/assets/background/bg.png';

import states from '~/config/states';
import city from '~/config/coursesNearMe';

const EventLocation = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [visibleState, setVisibleState] = useState(false);
  const [visibleCity, setVisibleCity] = useState(false);

  const toggleCityOverlay = () => {
    setVisibleCity(!visibleCity);
  };

  const toggleStateOverlay = () => {
    setVisibleState(!visibleState);
  };

  const setCityOption = (value) => {
    setSelectedCity(value);
    toggleCityOverlay();
  };

  const setStateOption = (value) => {
    setSelectedState(value);
    toggleStateOverlay();
  };

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <View style={[styles.screen, {marginTop: useHeaderHeight() * 2.5}]}>
        <View style={{height: '80%', width: '80%'}}>
          <Select
            name={selectedState !== '' ? selectedState : 'State'}
            list={states}
            toggleOverlay={toggleStateOverlay}
          />
          <Select
            name={selectedCity !== '' ? selectedCity : 'City/Course'}
            list={city}
            selected={selectedCity !== '' ? true : false}
            toggleOverlay={toggleCityOverlay}
          />
        </View>
        <BottomButton title="Next" size={22} screen="EventForm" />
      </View>
      {visibleState && (
        <Overlay
          visible={visibleState}
          toggleOverlay={toggleStateOverlay}
          list={states}
          setOption={setStateOption}
        />
      )}
      {visibleCity && (
        <Overlay
          visible={visibleCity}
          toggleOverlay={toggleCityOverlay}
          list={city}
          setOption={setCityOption}
        />
      )}
    </ImageBackground>
  );
};

export default EventLocation;
