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
    borderWidth: 0.6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
  },
  lastRow: {
    paddingHorizontal: '3%',
  },
  text: {
    fontSize: 18,
    color: colors.grey,
    fontFamily: 'Comic Sans MS',
  },
});

export default styles;
