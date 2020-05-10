import {StyleSheet, Platform} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.8,
    width: '100%',
    borderRadius: 20,
    paddingVertical: '2%',
    marginVertical: '1%',
    backgroundColor: colors.darkBlue,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Comic Sans MS' : 'Comic Sans MS Bold',
    fontWeight: Platform.OS === 'ios' ? 'bold' : null,
    color: colors.grey,
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    color: colors.grey,
    fontFamily: 'Comic Sans MS',
  },
  smallText: {
    textAlign: 'center',
    fontSize: 9,
    color: colors.grey,
    fontFamily: 'Comic Sans MS',
  },
});

export default styles;
