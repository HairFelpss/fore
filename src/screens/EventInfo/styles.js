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
    borderBottomWidth: 0.8,
    width: '100%',
    paddingVertical: '2%',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: '5%',
  },
  text: {
    fontSize: 15,
    paddingLeft: '15%',
    color: colors.darkGrey,
    paddingVertical: '2%',
  },
});

export default styles;
