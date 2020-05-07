import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.select,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
    marginVertical: '1%',
  },
  text: {
    margin: 3,
    textAlign: 'center',
    color: colors.grey,
    fontFamily: 'ComicSansMSRegular',
    fontSize: 13,
  },
  wrapper: {flexDirection: 'row'},
});

export default styles;
