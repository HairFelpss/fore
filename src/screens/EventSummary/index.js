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

const EventSummary = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight()}]}>
        <View style={{width: '100%'}}>
          <View style={{paddingTop: '5%'}}>
            <Title title="Event Summary" />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Event Type:</Text>
            <Text style={styles.text}>Modified</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Date:</Text>
            <Text style={styles.text}>04/20/2004</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Course:</Text>
            <Text style={styles.text}>Walluapi Golf Course</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Name:</Text>
            <Text style={styles.text}>Charity Golf</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Number Of Holes:</Text>
            <Text style={styles.text}>9-Holes</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Format:</Text>
            <Text style={styles.text}>Best Ball</Text>
          </View>
          <View style={styles.lastRow}>
            <Text style={styles.text}>Theme:</Text>
            <Text style={[styles.text, {paddingLeft: '4%', paddingTop: '1%'}]}>
              Everyone please come in a suit and tie.
            </Text>
          </View>
        </View>
      </LinearGradient>
      <Button title="Looks Good? Let's Lauch!" size={18} screen="Home" />
    </ImageBackground>
  );
};

export default EventSummary;
