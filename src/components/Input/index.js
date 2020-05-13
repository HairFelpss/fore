import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import colors from '~/styles';
import styles from './styles';

export const InputField = ({content, password, value, onChangeText}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Input
      placeholder={content}
      placeholderTextColor={colors.grey}
      value={value}
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      secureTextEntry={password ? true : false}
      onChangeText={onChangeText}
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

export const SmallInput = ({content}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.smallInputContainer}>
      <Text>{content}</Text>
      <Input
        placeholder="User's Name"
        placeholderTextColor={colors.grey}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        inputStyle={styles.smallInput}
        inputContainerStyle={{borderBottomWidth: 0}}
      />
    </View>
  );
};
