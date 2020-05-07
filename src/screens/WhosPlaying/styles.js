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
    height: '75%',
    width: '90%',
    backgroundColor: '#555',
    borderTopWidth: 0.6,
  },
  part: {
    width: '100%',
    paddingBottom: '3%',
    marginBottom: '2%',
    borderBottomWidth: 0.8,
    borderBottomColor: colors.grey,
  },
});

export default styles;
