import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 25,
    backgroundColor: colors.lightestBlue,
  },
  input: {
    borderRadius: 25,
    backgroundColor: colors.lightestBlue,
    color: colors.grey,
    fontFamily: 'ComicSansMSRegular.ttf',
  },
});

export default styles;
