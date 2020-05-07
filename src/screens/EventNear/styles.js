import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20%',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default styles;
