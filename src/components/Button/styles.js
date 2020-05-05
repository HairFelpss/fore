import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    height: Dimensions.get('window').height * 0.095,
    width: Dimensions.get('window').width * 0.73,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  imageBottom: {
    height: Dimensions.get('window').height * 0.089,
    width: Dimensions.get('window').width * 0.67,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
