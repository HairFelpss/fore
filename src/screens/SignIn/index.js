import React, {useState, useContext} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';

import {InputField as Input} from '~/components/Input';
import CheckBox from '~/components/Checkbox';
import {BottomButton} from '~/components/Button';

import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background/bg.png';

import {signInWithEmailAndPassword} from '~/server/firebase';

const SignIn = () => {
  const navigation = useContext(NavigationContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <LinearGradient
        colors={['#82F3FF', '#00A9BB']}
        style={[styles.panel, {marginTop: useHeaderHeight() * 2.2}]}>
        <Text style={styles.title}>Sign In</Text>
        <View style={{paddingTop: '15%'}}>
          <Input
            content="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            content="Password"
            password
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <View
            style={{
              paddingTop: '5%',
              alignSelf: 'center',
            }}>
            <CheckBox
              title="Keep Me Signed In"
              color={colors.grey}
              fontSize={15}
            />
          </View>
          <View
            style={{
              paddingTop: '10%',
              alignSelf: 'center',
            }}>
            <BottomButton
              title="Log In"
              size={22}
              screen="Home"
              onPress={
                () => login() // ? confirmCode() : signInWithPhoneNumber(number)
              }
            />
          </View>
        </View>
      </LinearGradient>
      <BottomButton
        title="Sign Up"
        size={22}
        onPress={() => navigation.navigate('SignUp')}
      />
    </ImageBackground>
  );
};

export default SignIn;
