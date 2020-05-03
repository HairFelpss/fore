import React from 'react';
import {ImageBackground, StatusBar, ScrollView, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {InputField as Input} from '~/components/Input';
import CheckBox from '~/components/Checkbox';
import Button from '~/components/Button';

import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background/bg.png';

const SignUp = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight() * 2.2}]}>
        <Text style={styles.title}>Sign Up</Text>
        <ScrollView style={{width: '100%'}}>
          <Input content="First Name" />
          <Input content="Last Name" />
          <Input content="Mobile Phone #" />
          <Input content="Email Address" />
          <Input content="Home Zip Code" />
          <Input content="Favorite Golfer" />
          <Input content='Your Nickname: ie "Shooter"' />
        </ScrollView>
        <Button title="Create Account" size={22} screen="Home" />
      </LinearGradient>
      <Button title="Sign In" size={22} screen="SignIn" bottom />
    </ImageBackground>
  );
};

export default SignUp;
