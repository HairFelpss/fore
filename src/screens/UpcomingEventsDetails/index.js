import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import Card from '~/components/Card';
import {SmallScoreTable} from '~/components/Table';
import styles from './styles';
import colors from '~/styles';
import bg from '~/assets/background/bg.png';
import image from '~/assets/images/image.png';

const UpcomingEventsDetails = () => {
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
            paddingTop: '1%',
            width: '90%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ScrollView styles={{width: '100%', height: '100%'}}>
            <View
              style={{
                borderTopColor: colors.grey,
                width: '100%',
                paddingVertical: '5%',
                marginBottom: '5%',
                borderBottomWidth: 0.8,
              }}>
              <Card
                title="Jordan Weber's Dyersville Country Club"
                firstRow="Dyersville Country Club"
                secondRow="Best Shot Tournament"
                thirdRow="Date: 5/15/2020"
                incomplete
              />
            </View>
            <View
              style={{
                borderTopColor: colors.grey,
                borderBottomWidth: 0.8,
                width: '100%',
                alignItems: 'center',
                paddingBottom: '3%',
                marginBottom: '3%',
              }}>
              <Image source={image} />
            </View>
            <View
              style={{
                borderTopColor: colors.grey,
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PastEventsDetails')}>
                <SmallScoreTable />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default UpcomingEventsDetails;
