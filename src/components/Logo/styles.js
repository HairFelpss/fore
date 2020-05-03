import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  logoSmall: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 2.5,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  lessMarginSmall: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 6,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  logo: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 2,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  lessMargin: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 6,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  noMargin: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 2,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
});

export default styles;
