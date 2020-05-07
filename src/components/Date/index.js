import React, {useState} from 'react';
import {View, Platform, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import styles from './styles';

const Title = ({date, name, end}) => {
  Moment.locale('en');
  return (
    <View
      style={{
        flexDirection: 'row',
        maxWidth: '95%',
        paddingLeft: '2%',
        paddingVertical: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{fontSize: 18, fontFamily: 'ComicSansMSRegular'}}>
          {name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: end ? '6%' : '1%',
        }}>
        <View>
          <Text style={{fontSize: 18, fontFamily: 'ComicSansMSRegular'}}>
            {Moment(date).format('L')}
          </Text>
        </View>
        <View style={{borderLeftWidth: 0.8, marginLeft: '2%'}}>
          <Icon
            iconStyle={{margin: 0, padding: 0}}
            name="arrow-drop-down"
            type="material"
            color="black"
            size={35}
          />
        </View>
      </View>
    </View>
  );
};

const App = ({name, end}) => {
  const [date, setDate] = useState(new Date().getTime());
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
        <Title date={date} name={name} end={end} />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          minimumDate={date}
          mode={mode}
          display="calendar"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default App;
