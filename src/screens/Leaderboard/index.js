import React, {useContext, useState} from 'react';
import {ImageBackground, StatusBar, View, Switch, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import {NavigationContext} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import {DisplayName} from '~/components/Text';
import styles from './styles';
import bg from '~/assets/background/bg.png';

import {FirstTable, SecondTable, ScoreTable} from '~/components/Table';

const Leaderboard = () => {
  const navigation = useContext(NavigationContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const name = navigation.getParam('name');
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight()}]}>
        <View style={{width: '100%', padding: '3%'}}>
          <View style={styles.part}>
            <DisplayName title={name} />
            <FirstTable />
            <SecondTable />
          </View>
          <ScoreTable />
          <View style={{alignItems: 'center', paddingTop: '5%'}}>
            <View style={styles.switch}>
              <Text>Show Skins</Text>
              <Switch
                trackColor={{false: '#00A9BB', true: '#00A9BB'}}
                thumbColor={isEnabled ? '#00909F' : '#00909F'}
                ios_backgroundColor="#00A9BB"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Leaderboard;
