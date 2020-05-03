import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.grey,
    width: '100%',
    marginBottom: (Dimensions.get('window').height * 0.1) / 6,
  },
  inputMultilineContainer: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.grey,
    width: '100%',
    marginBottom: (Dimensions.get('window').height * 0.1) / 6,
  },
  input: {
    borderRadius: 100,
    backgroundColor: colors.lightestBlue,
    color: colors.grey,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontFamily: 'ComicSansMSRegular.ttf',
  },
  inputMultiline: {
    textAlignVertical: 'top',
    borderRadius: 25,
    backgroundColor: colors.lightestBlue,
    color: colors.grey,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontFamily: 'ComicSansMSRegular.ttf',
  },
});

export default styles;
