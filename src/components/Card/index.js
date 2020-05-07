import React from 'react';
import {View, Text} from 'react-native';
import colors from '~/styles';
import styles from './styles';

const Card = ({
  title,
  firstRow,
  secondRow,
  thirdRow,
  fourthRow,
  fifthRow,
  incomplete,
}) => {
  return !incomplete ? (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{firstRow}</Text>
      <Text style={styles.text}>{secondRow}</Text>
      <Text style={styles.text}>{thirdRow}</Text>
      <Text style={styles.text}>{fourthRow}</Text>
      <Text style={styles.smallText}>{fifthRow}</Text>
    </View>
  ) : (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{firstRow}</Text>
      <Text style={styles.text}>{secondRow}</Text>
      <Text style={styles.text}>{thirdRow}</Text>
    </View>
  );
};

export default Card;
