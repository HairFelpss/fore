import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import Card from '~/components/Card';
import {BottomButton} from '~/components/Button';
import styles from './styles';
import colors from '~/styles';
import bg from '~/assets/background/bg.png';
import image from '~/assets/images/image.png';
import {DisplayName} from '~/components/Text';
import {FirstTable} from '~/components/Table';

const PastEventsDetails = () => {
  const [names] = useState(['Weber Winners', 'Marvelous Mansfields']);
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
            paddingTop: '1%',
            width: '90%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ScrollView
            style={{
              width: '90%',
              height: '90%',
            }}>
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
            <View
              style={{
                borderTopColor: colors.grey,
                borderBottomWidth: 0.8,
              }}>
              <Image source={image} />
            </View>
            <View style={{width: '100%', padding: '3%'}}>
              {names.map((name, index) => (
                <View style={styles.part} key={index}>
                  <DisplayName title={name} />
                  <FirstTable />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
      <BottomButton title="Home" size={22} screen="Home" />
    </ImageBackground>
  );
};

export default PastEventsDetails;
