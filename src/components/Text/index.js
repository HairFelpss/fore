import React, {useState} from 'react';
import {Text} from 'react-native';
import colors from '~/styles';
import styles from './styles';

export const Content = ({content}) => {
  return <Text style={styles.content}>{content}</Text>;
};

export const Title = ({title, center}) => {
  return (
    <Text style={[styles.title, center ? {textAlign: 'center'} : null]}>
      {title}
    </Text>
  );
};

export const DisplayName = ({title}) => {
  return <Text style={styles.displayName}>{title}</Text>;
};
