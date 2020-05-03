import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Moment from 'moment';
import {Icon} from 'react-native-elements';
import styles from './styles';

const Title = ({name}) => {
  Moment.locale('en');
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingRight: 0,
        paddingVertical: 0,
        alignItems: 'center',
      }}>
      <View style={{width: '75%'}}>
        <Text
          style={{
            fontSize: 21,
            textAlign: 'center',
            fontFamily: 'ComicSansMSRegular.ttf',
          }}>
          {name}
        </Text>
      </View>
      <View style={{borderLeftWidth: 1}}>
        <Icon name="arrow-drop-down" type="material" color="black" />
      </View>
    </View>
  );
};

const Select = ({list, name}) => {
  const [mode, setMode] = useState('date');

  return (
    <TouchableOpacity style={styles.button}>
      <Title name={name} />
    </TouchableOpacity>
  );
};

export default Select;
