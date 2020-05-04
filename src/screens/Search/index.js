import React from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import Button from '~/components/Button';
import SearchBar from '~/components/Search';
import Select from '~/components/Select';
import styles from './styles';

import colors from '~/styles';
import bg from '~/assets/background/bg.png';

import states from '~/config/states';
import city from '~/config/city';

const Search = () => {
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
            paddingTop: '10%',
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
          <View style={{paddingTop: '5%'}}>
            <Select name="State" list={states} />
            <Select name="City/Course" list={city} />
          </View>
        </View>
      </LinearGradient>
      <Button title="Search All Events" size={22} screen="Find" />
    </ImageBackground>
  );
};

export default Search;
