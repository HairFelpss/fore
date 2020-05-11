import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    height: Dimensions.get('window').width * 0.185,
    width: Dimensions.get('window').width * 0.75,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  imageBottom: {
    height: Dimensions.get('window').width * 0.155,
    width: Dimensions.get('window').width * 0.65,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  smallButton: {
    height: Dimensions.get('window').width * 0.12,
    width: Dimensions.get('window').width * 0.5,
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
