import {StyleSheet, Dimensions} from 'react-native';
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
    fontFamily: 'comic-sans-ms-bold',
    color: colors.grey,
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    color: colors.grey,
    fontFamily: 'ComicSansMSRegular',
  },
  smallText: {
    textAlign: 'center',
    fontSize: 9,
    color: colors.grey,
    fontFamily: 'ComicSansMSRegular',
  },
});

export default styles;
