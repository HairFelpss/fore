import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import colors from '~/styles';

const Select = ({name, toggleOverlay, selected}) => {
  return (
    <TouchableOpacity style={styles.view} onPress={toggleOverlay}>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: colors.grey,
            textAlign: 'center',
            fontSize: selected ? 16 : 21,
            fontFamily: 'Comic Sans MS',
          }}>
          {name}
        </Text>
      </View>
      <View
        style={{
          borderLeftColor: colors.grey,
          borderLeftWidth: 0.8,
          height: '100%',
          justifyContent: 'center',
        }}>
        <Icon
          name="arrow-drop-down"
          type="material"
          color={colors.grey}
          size={50}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Select;
