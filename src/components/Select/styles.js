import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    backgroundColor: colors.select,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    borderColor: colors.grey,
    shadowColor: colors.black,
    borderRadius: 15,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
    borderWidth: 1,
    marginBottom: '5%',
  },
});

export default styles;
