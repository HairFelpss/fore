import React, {useContext} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import Card from '~/components/Card';
import {Title} from '~/components/Text';
import {BottomButton} from '~/components/Button';
import styles from './styles';
import colors from '~/styles';
import bg from '~/assets/background/bg.png';

const UpcomingEvents = () => {
  const navigation = useContext(NavigationContext);
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
            paddingTop: '2%',
            width: '90%',
            height: '100%',
          }}>
          <ScrollView style={{height: '100%'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpcomingEventsDetails')}
              style={{
                width: '100%',
              }}>
              <Card
                title="Jordan Webers Sigourney best shot"
                firstRow="**YOU ARE HOST**"
                secondRow="Sigourney Golf Course"
                thirdRow="Best Shot Tournament"
                fourthRow="Date: 5/01/2020"
                fifthRow="Click For More Details"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpcomingEventsDetails')}
              style={{
                borderTopWidth: 0.8,
                borderTopColor: colors.grey,
                width: '100%',
                paddingTop: '2%',
                marginTop: '2%',
              }}>
              <Card
                title="Jordan Weber's Dyersville Country Club"
                firstRow="**YOU ARE HOST**"
                secondRow="Sigourney Golf Course"
                thirdRow="Best Shot Tournament"
                fourthRow="Date: 5/15/2020"
                fifthRow="Click For More Details"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpcomingEventsDetails')}
              style={{
                borderTopWidth: 0.8,
                borderTopColor: colors.grey,
                width: '100%',
                paddingTop: '2%',
                marginTop: '2%',
              }}>
              <Card
                title="Travis Manfield's LeMars Tournament"
                firstRow="LeMars Country Club"
                secondRow="4-person Scramble"
                thirdRow="Date: 5/15/2020"
                fifthRow="Click For More Details"
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </LinearGradient>
      <BottomButton title="My Event History" size={22} screen="PastEvents" />
    </ImageBackground>
  );
};

export default UpcomingEvents;
