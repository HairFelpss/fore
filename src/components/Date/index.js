import React, {useState} from 'react';
import {View, Platform, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import styles from './styles';

const Title = ({date, name}) => {
  Moment.locale('en');
  return (
    <View
      style={{
        flexDirection: 'row',
        maxWidth: '86%',
        paddingLeft: '5%',
        paddingRight: '2%',
        paddingVertical: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            fontSize: 21,
            fontFamily: 'ComicSansMSRegular.ttf',
          }}>
          {name}
        </Text>
      </View>
      <View style={{width: '50%'}}>
        <Text
          style={{
            fontSize: 21,
            fontFamily: 'ComicSansMSRegular.ttf',
          }}>
          {Moment(date).format('L')}
        </Text>
      </View>
      <View style={{borderLeftWidth: 1}}>
        <Icon
          iconStyle={{margin: 0, padding: 0}}
          name="arrow-drop-down"
          type="material"
          color="black"
        />
      </View>
    </View>
  );
};

const App = ({name}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatepicker} style={styles.button}>
        <Title date={date} name={name} />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default App;
