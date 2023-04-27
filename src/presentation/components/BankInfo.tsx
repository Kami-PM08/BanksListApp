import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Bank} from '../../data/models/bank';

const BankInfo = ({bank}: {bank: Bank}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={{uri: bank.url}} style={styles.img} resizeMode="contain" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{bank.bankName}</Text>
          <Text>{` (${bank.age} años)`}</Text>
        </View>
        <Text style={styles.body}>{bank.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    columnGap: 10,
    marginVertical: 10,
  },
  img: {
    width: 100,
    height: 80,
  },
  content: {
    rowGap: 20,
    flexShrink: 1,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    color: '#000',
  },
  body: {
    flexWrap: 'wrap',
  },
});

export default BankInfo;
