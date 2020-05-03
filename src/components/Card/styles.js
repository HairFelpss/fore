import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.8,
    width: '100%',
    borderRadius: 20,
    paddingVertical: '2%',
    backgroundColor: colors.darkBlue,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.grey,
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    color: colors.grey,
  },
  smallText: {
    textAlign: 'center',
    fontSize: 9,
    color: colors.grey,
  },
});

export default styles;
