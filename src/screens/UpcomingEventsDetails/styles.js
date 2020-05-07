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
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    height: '85%',
    width: '90%',
  },
});

export default styles;
