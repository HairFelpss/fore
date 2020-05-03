import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  panel: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-between',
    height: '80%',
    width: '90%',
    backgroundColor: '#555',
    borderTopWidth: 0.6,
  },
  part: {
    borderBottomWidth: 0.5,
    width: '100%',
  },
  lastPart: {
    width: '100%',
  },
  padding: {
    paddingVertical: Dimensions.get('window').height < 685 ? 0.5 : '2%',
  },
  title: {
    paddingVertical: '1%',
    fontFamily: 'ComicSansMSRegular.ttf',
  },
});

export default styles;
