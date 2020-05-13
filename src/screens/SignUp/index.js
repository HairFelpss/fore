import React, {useState, useContext} from 'react';
import {ImageBackground, StatusBar, ScrollView, Text} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {OverlayText} from '~/components/Overlay';
import {InputField as Input} from '~/components/Input';
import {BottomButton, SmallButton} from '~/components/Button';
import bg from '~/assets/background/bg.png';

import styles from './styles';

import {
  usersCollection,
  createUser,
  confirmCode,
  setUserEmailPassword,
} from '~/server/firebase';

const SignUp = () => {
  const navigation = useContext(NavigationContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [favoriteGolfer, setFavoriteGolfer] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [visible, setVisible] = useState(false);

  const signInWithPhoneNumber = async () => {
    try {
      if(password === confirmPassword){
        setVisible(!visible);
        const confirmation = await confirmCode(number);
        setConfirm(confirmation);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validateCode = async () => {
    try {
      const code = await confirm.confirm(phoneCode);
      setVisible(!visible);
      return code.uid;
    } catch (err) {
      console.log('invalid code');
    }
  };

  const createNewUser = async () => {
    try {
      const user = usersCollection;
      const id = await validateCode();
      if (id) {
        await setUserEmailPassword(email, password);
        await createUser(
          user,
          id,
          firstName,
          lastName,
          number,
          zipCode,
          favoriteGolfer,
          nickname,
        );
        navigation.navigate('SignIn');
      }
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
        <Text style={styles.title}>Sign Up</Text>
        <ScrollView style={{width: '100%'}}>
          <Input
            content="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <Input
            content="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <Input
            content="Mobile Phone #"
            value={number}
            onChangeText={(text) => setNumber(text)}
          />
          <Input
            content="Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            content="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            password
          />
          <Input
            content="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            password
          />
          <Input
            content="Home Zip Code"
            value={zipCode}
            onChangeText={(text) => setZipCode(text)}
          />
          <Input
            content="Favorite Golfer"
            value={favoriteGolfer}
            onChangeText={(text) => setFavoriteGolfer(text)}
          />
          <Input
            content='Your Nickname: ie "Shooter"'
            value={nickname}
            onChangeText={(text) => setNickname(text)}
          />
        </ScrollView>
        <BottomButton
          title="Create Account"
          size={22}
          screen="Home"
          onPress={() => signInWithPhoneNumber()}
        />
      </LinearGradient>
      <BottomButton title="Sign In" size={22} screen="SignIn" />
      {visible && (
        <OverlayText
          visible={visible}
          toggleOverlay={() => setVisible(!visible)}
          Input={
            <Input
              content="Confirm Your Phone Code"
              value={phoneCode}
              onChangeText={(text) => setPhoneCode(text)}
            />
          }
          Button={
            <SmallButton
              title="Create Account"
              size={15}
              onPress={() => createNewUser()}
            />
          }
        />
      )}
    </ImageBackground>
  );
};

export default SignUp;
