import React from 'react';
import {ImageBackground, StatusBar, View, ScrollView} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import Button from '~/components/Button';
import Card from '~/components/Card';
import styles from './styles';

import colors from '~/styles';
import bg from '~/assets/background/bg.png';

const EventsNearMe = () => {
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
            paddingTop: '5%',
            width: '90%',
            height: '85%',
            justifyContent: 'space-between',
          }}>
          <ScrollView styles={{height: '100%'}}>
            <Card
              title="ERA King UCP Charity Golf Tournament"
              firstRow="Anninston Country Club"
              secondRow="Distance: 24.39 miles"
              thirdRow="Date: 5/01/2020"
              fourthRow="Entry Fee: $50"
              fifthRow="Click For More Details"
            />
            <Card
              title="Big Orange Golf Tournament"
              firstRow="Huntsville Country Club"
              secondRow="Distance: 47.52 miles"
              thirdRow="Date: 5/15/2020"
              fourthRow="Entry Fee: $150"
              fifthRow="Click For More Details"
            />
            <Card
              title="2020 Alumni Association Golf Classic"
              firstRow="Canebrake Club"
              secondRow="Distance: 36.25 miles"
              thirdRow="Date: 5/21/2020"
              fourthRow="Entry Fee: $50"
              fifthRow="Click For More Details"
            />
            <Card
              title="Big Orange Golf Tournament"
              firstRow="Huntsville Country Club"
              secondRow="Distance: 47.52 miles"
              thirdRow="Date: 5/15/2020"
              fourthRow="Entry Fee: $150"
              fifthRow="Click For More Details"
            />
            <Card
              title="2020 Alumni Association Golf Classic"
              firstRow="Canebrake Club"
              secondRow="Distance: 36.25 miles"
              thirdRow="Date: 5/21/2020"
              fourthRow="Entry Fee: $50"
              fifthRow="Click For More Details"
            />
          </ScrollView>
        </View>
      </LinearGradient>
      <Button title="Search All Events" size={22} screen="Search" />
    </ImageBackground>
  );
};

export default EventsNearMe;
