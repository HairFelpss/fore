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
    height: Dimensions.get('window').height < 685 ? '68%' : Dimensions.get('window').height < 730 ? '73%' : '67%',
    width: '90%',
    backgroundColor: '#555',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 35,
    fontFamily: Platform.OS === 'ios' ? 'Comic Sans MS' : 'Comic Sans MS Bold',
    fontWeight: Platform.OS === 'ios' ? 'bold' : null,
    color: colors.grey,
    textAlign: 'center',
    paddingBottom: '2%',
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
