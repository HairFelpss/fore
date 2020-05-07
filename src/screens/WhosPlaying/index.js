import React, {useState} from 'react';
import {ImageBackground, StatusBar, View, ScrollView} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {SmallInput} from '~/components/Input';
import styles from './styles';
import bg from '~/assets/background/bg.png';
import {BottomButton, SmallButton} from '~/components/Button';

import {FirstTable} from '~/components/Table';

const WhosPlaying = () => {
  const [playerAmount, setPlayerAmount] = useState([0]);

  const pushPlayerAmount = () => {
    setPlayerAmount([...playerAmount, 0]);
  };

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight()}]}>
        <View style={{width: '100%', padding: '3%'}}>
          <ScrollView>
            {playerAmount.map((player, index) => (
              <View style={styles.part} key={index}>
                <SmallInput content={`Player ${index + 1}:`} />
                <FirstTable />
              </View>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
      <SmallButton
        title="Add Player"
        size={15}
        onPress={() => pushPlayerAmount()}
      />
      <BottomButton title="I'm Done. Let's Play!" size={20} screen="Scores" />
    </ImageBackground>
  );
};

export default WhosPlaying;
