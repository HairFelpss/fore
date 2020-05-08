import React, {useState} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {BottomButton} from '~/components/Button';
import SearchBar from '~/components/Search';
import Overlay from '~/components/Overlay';
import Select from '~/components/Select';
import styles from './styles';

import colors from '~/styles';
import bg from '~/assets/background/bg.png';

import states from '~/config/states';
import city from '~/config/coursesNearMe';

const Search = () => {
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

      <View
        style={{
          borderTopWidth: 0.8,
          borderBottomColor: colors.grey,
          width: '100%',
          marginTop: useHeaderHeight(),
        }}
      />
      <LinearGradient colors={['#82F3FF', '#00A9BB']} style={styles.panel}>
        <View
          style={{
            paddingTop: '5%',
            width: '90%',
            height: '85%',
          }}>
          <SearchBar content="Search Courses" />
          <Text
            style={{
              textAlign: 'center',
              color: colors.grey,
              fontSize: 20,
              fontFamily: 'comic-sans-ms-bold',
              paddingVertical: '10%',
            }}>
            OR
          </Text>
          <View
            style={{
              paddingTop: '5%',
              height: '100%',
              width: '100%',
              alignItems: 'center',
            }}>
            <Select
              name={selectedState !== '' ? selectedState : 'State'}
              list={states}
              selected={selectedState !== '' ? true : false}
              toggleOverlay={toggleStateOverlay}
            />
            <Select
              name={selectedCity !== '' ? selectedCity : 'City/Course'}
              list={city}
              selected={selectedCity !== '' ? true : false}
              toggleOverlay={toggleCityOverlay}
            />
          </View>
        </View>
      </LinearGradient>
      <BottomButton title="Find Course" size={22} screen="Find" />
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

export default Search;
