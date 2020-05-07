import React from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import {Overlay} from 'react-native-elements';
import styles from './styles';

const OverlayComponent = ({visible, toggleOverlay, list, setOption}) => {
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

export default OverlayComponent;
