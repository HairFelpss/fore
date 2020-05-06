import React, {useState} from 'react';
import {SearchBar, Icon} from 'react-native-elements';
import colors from '~/styles';
import styles from './styles';

const SearchBarField = ({content}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchBar
      placeholder={content}
      placeholderTextColor={colors.lightestGrey}
      value={inputValue}
      onChangeText={(search) => setInputValue({search})}
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      searchIcon={
        <Icon
          name="search"
          type="material"
          color={colors.lightGrey}
          size={30}
        />
      }
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
