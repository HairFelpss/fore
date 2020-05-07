import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  content: {},
  title: {
    fontSize: 20,
    fontFamily: 'comic-sans-ms-bold',
    color: colors.grey,
    paddingLeft: '2%',
  },
  displayName: {
    fontSize: 13,
    fontFamily: 'comic-sans-ms-bold',
    color: colors.grey,
    backgroundColor: colors.select,
    paddingLeft: '2%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 50,
    width: '70%',
    marginVertical: '1%',
  },
});

export default styles;
