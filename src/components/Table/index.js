import React from 'react';
import {View} from 'react-native';
import {
  Table,
  Rows,
  Row,
  TableWrapper,
  Col,
} from 'react-native-table-component';
import styles from './styles';
import colors from '~/styles/index';

export const FirstTable = () => {
  const tableData = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'out'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ];
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1, borderColor: colors.grey}}>
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

export const SecondTable = () => {
  const tableData = [
    ['10', '11', '12', '13', '14', '15', '16', '17', '18', 'out'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ];
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1, borderColor: colors.grey}}>
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

export const ScoreTable = () => {
  const tableHead = ['Name', 'To Par', 'Score', 'Skins', 'Thru'];
  const tableData = [
    ['Weber Winners', '-3', '15', '+2', '5'],
    ['Marvaleous Mansfields', '-2', '17', '0', '6'],
    ['Weber Winners', '-1', '16', '+1', '5'],
    ["Happy Hammes'", '0', '18', '0', '5'],
  ];
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1}}>
        <Row
          data={tableHead}
          flexArr={[2.5, 1, 1, 1]}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Rows
            data={tableData}
            flexArr={[2.5, 1, 1, 1]}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

export const SmallScoreTable = () => {
  const tableHead = ['Name', 'Score', 'To Par', 'Thru'];
  const tableData = [
    ['Weber Winners', '3', '29', '18'],
    ['Marvaleous', '-2', '27', '18'],
    ['Superb Steinharts', '-1', '35', '18'],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['Click For More Details'],
  ];
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1}}>
        <Row data={tableHead} flexArr={[2.5, 1, 1]} textStyle={styles.text} />
        <TableWrapper style={styles.wrapper}>
          <Rows
            data={tableData}
            flexArr={[2.5, 1, 1]}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};
