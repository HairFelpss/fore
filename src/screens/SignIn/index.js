import React from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {InputField as Input} from '~/components/Input';
import CheckBox from '~/components/Checkbox';
import Button from '~/components/Button';

import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background/bg.png';

const SignIn = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight() * 2.2}]}>
        <Text style={styles.title}>Sign In</Text>
        <View style={{paddingTop: '15%'}}>
          <Input content="Mobile Phone #" />
          <Input content="Password" password />

          <View style={{paddingTop: '5%', alignSelf: 'center'}}>
            <CheckBox
              title="Keep Me Signed In"
              color={colors.grey}
              fontSize={15}
            />
          </View>
          <View style={{paddingTop: '10%', alignSelf: 'center'}}>
            <Button title="Log In" size={22} screen="Home" bottom />
          </View>
        </View>
      </LinearGradient>
      <Button title="Sign Up" size={22} screen="SignUp" bottom />
    </ImageBackground>
  );
};

export default SignIn;
