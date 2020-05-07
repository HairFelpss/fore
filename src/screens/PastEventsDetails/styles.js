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
    marginTop: '5%',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    height: '75%',
    width: '90%',
  },
  part: {
    borderTopWidth: 0.5,
    width: '100%',
    paddingVertical: '2%',
  },
});

export default styles;
