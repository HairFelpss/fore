import React, {useState} from 'react';

import {Text, Image} from 'react-native';
import {CheckBox} from 'react-native-elements';
import checkboxChecked from '~/assets/checkbox/check.png';
import checkboxUnchecked from '~/assets/checkbox/unchecked.png';
import styles from './styles';

const Checkbox = ({title, fontSize, color, center}) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckBox
      center={center ? true : false}
      title={
        <Text
          style={{
            fontSize: fontSize,
            color: color,
            paddingLeft: '4%',
          }}>
          {title}
        </Text>
      }
      iconLeft
      type="material"
      checkedIcon={
        <Image
          source={checkboxChecked}
          style={{width: 30, height: 30, margin: 0, padding: 0}}
        />
      }
      uncheckedIcon={
        <Image
          source={checkboxUnchecked}
          style={{width: 30, height: 30, margin: 0, padding: 0}}
        />
      }
      checked={checked}
      containerStyle={styles.instructionsContainer}
      onPress={() => setChecked(!checked)}
    />
  );
};
export default Checkbox;
