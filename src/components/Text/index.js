import React, {useState} from 'react';
import {Text} from 'react-native';
import colors from '~/styles';
import styles from './styles';
import button from '~/assets/button/button.png';

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
