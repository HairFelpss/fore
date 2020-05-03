import React, {useState} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {InputField as Input, InputMultiline} from '~/components/Input';
import CheckBox from '~/components/Checkbox';
import styles from './styles';
import colors from '~/styles';
import bg from '~/assets/background/bg.png';
import Button from '~/components/Button';

import {Title} from '~/components/Text';

const EventForm = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight()}]}>
        <View style={{width: '100%'}}>
          <View style={styles.part}>
            <View style={styles.title}>
              <Title title="Name Your Event:" />
            </View>
            <Input content="Event Name" />
          </View>
          <View style={styles.part}>
            <View style={styles.title}>
              <Title title="How Many Holes" />
              <Text
                style={{fontSize: 10, paddingLeft: '2%', color: colors.grey}}>
                (Tip: 9 Holes May Draw More Player)
              </Text>
            </View>
            <View style={styles.padding}>
              <CheckBox title="9-Holes" color={colors.grey} fontSize={20} />
            </View>
            <View style={styles.padding}>
              <CheckBox title="18-Holes" color={colors.grey} fontSize={20} />
            </View>
          </View>
          <View style={styles.part}>
            <View style={styles.title}>
              <Title title="What's The Format" />
            </View>
            <View style={styles.padding}>
              <CheckBox title="Scramble" color={colors.grey} fontSize={20} />
            </View>
            <View style={styles.padding}>
              <CheckBox title="Best Ball" color={colors.grey} fontSize={20} />
            </View>
            <View style={styles.padding}>
              <CheckBox title="Stroke Play" color={colors.grey} fontSize={20} />
            </View>
          </View>
          <View style={styles.lastPart}>
            <View style={styles.title}>
              <Title title="What's The Theme/Occassion?" />
            </View>
            <InputMultiline content="ie. Everyone is encouraged to wear a bonnet" />
            <CheckBox
              title="No Theme - Just Plain Ol' Golf"
              color={colors.grey}
              fontSize={18}
            />
          </View>
        </View>
      </LinearGradient>
      <Button title="Next" size={22} screen="EventInvite" bottom />
    </ImageBackground>
  );
};

export default EventForm;
