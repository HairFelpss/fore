import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 0.8,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  imageBottom: {
    height: Dimensions.get('window').height * 0.06,
    width: Dimensions.get('window').width * 0.6,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  theImage: {
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
