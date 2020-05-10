import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
    backgroundColor: colors.select,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
  },
  input: {
    fontFamily: 'Comic Sans MS',
  },
});

export default styles;
