import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.select,
    borderColor: colors.grey,
    shadowColor: colors.black,
    borderRadius: 15,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
    borderWidth: 1,
    marginBottom: '10%',
  },
  button: {
    width: Dimensions.get('window').width * 0.8,
    fontFamily: 'ComicSansMSRegular',
    fontSize: 20,
    color: colors.grey,
  },
  item: {
    backgroundColor: colors.select,
    color: colors.grey,
    borderColor: colors.grey,
    fontFamily: 'ComicSansMSRegular',
  },
});

export default styles;
