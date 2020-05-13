import React, {Children} from 'react';
import {ScrollView, TouchableOpacity, Text, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import styles from './styles';

export const OverlayComponent = ({visible, toggleOverlay, list, setOption}) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.view}>
      <ScrollView>
        {list.map((option, key) => (
          <TouchableOpacity
            style={styles.option}
            key={key}
            onPress={() => setOption(option.label)}>
            <Text style={styles.text}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Overlay>
  );
};

export const OverlayText = ({visible, toggleOverlay, Input, Button}) => (
  <Overlay
    isVisible={visible}
    onBackdropPress={toggleOverlay}
    overlayStyle={styles.view}>
    <View style={{paddingVertical: 10}}>
      {Input}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={toggleOverlay}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
        {Button}
      </View>
    </View>
  </Overlay>
);
