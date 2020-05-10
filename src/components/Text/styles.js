import {StyleSheet, Platform} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  content: {},
  title: {
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? 'Comic Sans MS' : 'Comic Sans MS Bold',
    fontWeight: Platform.OS === 'ios' ? 'bold' : null,
    color: colors.grey,
    paddingLeft: '2%',
  },
  displayName: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Comic Sans MS' : 'Comic Sans MS Bold',
    fontWeight: Platform.OS === 'ios' ? 'bold' : null,
    color: colors.grey,
    backgroundColor: colors.select,
    paddingLeft: '2%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 50,
    width: '70%',
    marginVertical: '1%',
  },
});

export default styles;
