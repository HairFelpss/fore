import React from 'react';
import {ImageBackground, StatusBar, View, Image} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import Card from '~/components/Card';
import Button from '~/components/Button';
import styles from './styles';
import colors from '~/styles';
import bg from '~/assets/background/bg.png';
import image from '~/assets/images/image.png';
const Find = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#33EBFF" />

      <View
        style={{
          borderTopWidth: 0.8,
          borderBottomColor: colors.grey,
          width: '100%',
          marginTop: useHeaderHeight(),
        }}
      />
      <LinearGradient colors={['#82F3FF', '#00A9BB']} style={styles.panel}>
        <View
          style={{
            paddingTop: '10%',
            width: '90%',
            height: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderTopColor: colors.grey,
              width: '100%',
              height: '60%',
              alignItems: 'center',
              borderBottomWidth: 0.8,
            }}>
            <Image
              source={image}
              style={{
                width: '100%',
                height: '80%',
              }}
            />
          </View>
          <View
            style={{
              borderTopColor: colors.grey,
              width: '100%',
              paddingVertical: '5%',
            }}>
            <Card
              title="Jordan Weber's Dyersville Country Club"
              firstRow="Sigourney Golf Course"
              secondRow="Best Shot Tournament"
              thirdRow="Date: 5/15/2020"
              fourthRow="Entry Fee: $50"
              fifthRow="Click For More Details"
            />
          </View>
        </View>
      </LinearGradient>
      <Button title="Register For This Event" size={18} screen="Home" />
    </ImageBackground>
  );
};

export default Find;
