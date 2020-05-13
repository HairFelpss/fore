import React, {useState} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import Select from '~/components/Select';
import {BottomButton} from '~/components/Button';
import {OverlayComponent as Overlay} from '~/components/Overlay';
import styles from './styles';
import bg from '~/assets/background/bg.png';

import courses from '~/config/coursesNearMe';

const EventNear = () => {
  const [selectedCourse, setSelectCourse] = useState('');
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const setOption = (value) => {
    setSelectCourse(value);
    toggleOverlay();
  };

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <View style={[styles.screen, {marginTop: useHeaderHeight() * 2.5}]}>
        <Select
          name={selectedCourse !== '' ? selectedCourse : 'Courses Near Me'}
          toggleOverlay={toggleOverlay}
          selected={selectedCourse !== '' ? true : false}
        />
        <BottomButton
          title="Search All Courses"
          size={18}
          screen="EventLocation"
        />
      </View>
      {visible && (
        <Overlay
          visible={visible}
          toggleOverlay={toggleOverlay}
          list={courses}
          setOption={setOption}
        />
      )}
    </ImageBackground>
  );
};

export default EventNear;
