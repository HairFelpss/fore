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
  },
  part: {
    borderBottomWidth: 0.5,
    width: '100%',
    paddingTop: '2%',
    paddingBottom: '5%',
    marginBottom: '5%',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  lastPart: {
    width: '100%',
  },
  padding: {
    paddingVertical: Dimensions.get('window').height < 685 ? 0.5 : '2%',
  },
  title: {
    paddingVertical: '1%',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: colors.select,
    borderRadius: 15,
    borderWidth: 1,
    width: '60%',
  },
});

export default styles;
