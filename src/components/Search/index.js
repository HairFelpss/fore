import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import colors from '~/styles';
import styles from './styles';

const SearchBarField = ({content}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchBar
      placeholder={content}
      placeholderTextColor={colors.grey}
      value={inputValue}
      onChangeText={(search) => setInputValue({search})}
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      containerStyle={{
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
      }}
      leftIconContainerStyle={{
        borderRightColor: colors.grey,
        borderRightWidth: 1,
        padding: 5,
      }}
    />
  );
};

export default SearchBarField;
