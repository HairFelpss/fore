import React, {useState} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import Select from '~/components/Select';
import Button from '~/components/Button';

import styles from './styles';
import bg from '~/assets/background/bg.png';

import courses from '~/config/coursesNearMe';

const EventNear = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <View style={[styles.screen, {marginTop: useHeaderHeight() * 2.5}]}>
        <Select name="Courses Near Me" list={courses} />
        <Button
          title="Search All Courses"
          size={18}
          screen="EventLocation"
          bottom
        />
      </View>
    </ImageBackground>
  );
};

export default EventNear;
