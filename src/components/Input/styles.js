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
  input: {
    borderRadius: 100,
    backgroundColor: colors.lightestBlue,
    color: colors.grey,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontFamily: 'ComicSansMSRegular',
  },
  inputMultilineContainer: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.grey,
    width: '100%',
    marginBottom: (Dimensions.get('window').height * 0.1) / 6,
  },
  inputMultiline: {
    textAlignVertical: 'top',
    borderRadius: 25,
    backgroundColor: colors.lightestBlue,
    color: colors.grey,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontFamily: 'ComicSansMSRegular',
  },
  smallInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.select,
    borderWidth: 1,
    borderRadius: 75,
    width: '75%',
    paddingLeft: '5%',
    marginBottom: (Dimensions.get('window').height * 0.1) / 6,
  },
  smallInput: {
    backgroundColor: 'transparent',
    fontFamily: 'ComicSansMSRegular',
    color: colors.grey,
    fontSize: 13,
    paddingVertical: 0,
    borderWidth: 0,
  },
});

export default styles;
