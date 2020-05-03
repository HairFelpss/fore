import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
    alignItems: 'center',
  },
  panel: {
    marginTop: '5%',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    height: '75%',
    width: '90%',
  },
  card: {
    borderWidth: 0.8,
    width: '100%',
    borderRadius: 20,
    paddingVertical: '2%',
  },
  title: {
    fontSize: 21,
    color: 'black',
    paddingLeft: '5%',
    fontFamily: 'ComicSansMSRegular.ttf',
  },
  text: {
    fontSize: 15,
    paddingLeft: '15%',
    color: colors.darkGrey,
    paddingVertical: '2%',
    fontFamily: 'ComicSansMSRegular.ttf',
  },
});

export default styles;
