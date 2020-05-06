import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-community/picker';

const Select = ({list, name, setElement, value}) => {
  return (
    <View style={styles.view}>
      <Picker
        style={styles.button}
        itemStyle={styles.item}
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => setElement(itemValue)}>
        <Picker.Item label={name} value="" />
        {list.map((item, index) => (
          <Picker.Item label={item.label} value={item.value} key={index} />
        ))}
      </Picker>
    </View>
  );
};

export default Select;
