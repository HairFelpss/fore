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
import styles from './styles';
import colors from '~/styles';
import bg from '~/assets/background/bg.png';

const Find = () => {
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
        <Title title="Sigourney Country Clube Upcoming Events" center />
        <View
          style={{
            paddingTop: '10%',
            width: '90%',
            height: '85%',
          }}>
          <ScrollView style={{height: '100%'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={{
                borderTopWidth: 0.8,
                borderTopColor: colors.grey,
                width: '100%',
                paddingVertical: '5%',
              }}>
              <Card
                title="Jordan Webers Sigourney best shot"
                firstRow="Sigourney Golf Course"
                secondRow="Best Shot Tournament"
                thirdRow="Date: 5/15/2020"
                fourthRow="Entry Fee: $50"
                fifthRow="Click For More Details"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={{
                borderTopWidth: 0.8,
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
            </TouchableOpacity>
          </ScrollView>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Find;
