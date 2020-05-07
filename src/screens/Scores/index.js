import React, {useState, useContext} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {DisplayName} from '~/components/Text';
import styles from './styles';
import bg from '~/assets/background/bg.png';

import {FirstTable, SecondTable} from '~/components/Table';

const Scores = () => {
  const [names] = useState([
    'Weber Winners',
    'Marvelous Mansfields',
    'Stependous Steinharts',
    "Happy Hommes's",
  ]);
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight()}]}>
        <View style={{width: '100%', padding: '3%'}}>
          <ScrollView>
            {names.map((name, index) => (
              <TouchableOpacity
                style={styles.part}
                key={index}
                onPress={() =>
                  navigation.navigate('Leaderboard', {
                    name,
                  })
                }>
                <DisplayName title={name} />
                <FirstTable />
                <SecondTable />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Scores;
