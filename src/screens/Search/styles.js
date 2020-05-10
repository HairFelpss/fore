import {StyleSheet, Dimensions, Platform} from 'react-native';
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
    fontFamily: Platform.OS === 'ios' ? 'Comic Sans MS' : 'Comic Sans MS Bold',
    fontWeight: Platform.OS === 'ios' ? 'bold' : null,
    color: 'black',
    paddingLeft: '5%',
  },
  text: {
    fontSize: 15,
    paddingLeft: '15%',
    color: colors.darkGrey,
    paddingVertical: '2%',
    fontFamily: 'Comic Sans MS',
  },
});

export default styles;
