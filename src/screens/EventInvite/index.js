import React, {useState} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {InputField as Input, InputMultiline} from '~/components/Input';
import CheckBox from '~/components/Checkbox';
import styles from './styles';
import colors from '~/styles';
import bg from '~/assets/background/bg.png';
import {BottomButton} from '~/components/Button';

import {Title} from '~/components/Text';

const EventInvite = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight()}]}>
        <View style={{width: '100%'}}>
          <View style={{paddingVertical: '5%'}}>
            <Title title="Let's Invite Some People!" />
          </View>
          <View style={{paddingVertical: '2%'}}>
            <CheckBox
              title="Facebook Friends"
              color={colors.grey}
              fontSize={20}
            />
          </View>
          <View style={{paddingVertical: '2%'}}>
            <CheckBox
              title="Anyone In The Area"
              color={colors.grey}
              fontSize={20}
            />
          </View>
          <View style={{paddingVertical: '2%'}}>
            <CheckBox title="Send A Text" color={colors.grey} fontSize={20} />
          </View>
        </View>
      </LinearGradient>
      <BottomButton title="Next" size={22} screen="EventSummary" />
    </ImageBackground>
  );
};

export default EventInvite;
