import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  view: {backgroundColor: colors.select, height: 'auto', paddingVertical: 0},
  option: {paddingVertical: 10, borderBottomWidth: 0.8},
  text: {textAlign: 'center', fontSize: 15, fontFamily: 'Comic Sans MS'},
});

export default styles;
