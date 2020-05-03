import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import colors from '~/styles';
import styles from './styles';

export const InputField = ({content}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Input
      placeholder={content}
      placeholderTextColor={colors.grey}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
    />
  );
};

export const InputMultiline = ({content}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Input
      placeholder={content}
      placeholderTextColor={colors.grey}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      inputStyle={styles.inputMultiline}
      inputContainerStyle={styles.inputMultilineContainer}
      multiline={true}
      numberOfLines={3}
    />
  );
};
