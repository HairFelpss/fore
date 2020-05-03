import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.select,
    borderColor: colors.grey,
    borderRadius: 50,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
    paddingVertical: 5,
    width: '100%',
    borderWidth: 1,
  },
});

export default styles;
