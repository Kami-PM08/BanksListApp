import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet} from 'react-native';
import BankInfo from '../components/BankInfo';
import {Bank} from '../../data/models/bank';
import initBankTableUseCase from '../../domain/useCase/initBankTableUseCase';
import getBanksUseCase from '../../domain/useCase/getBanksUseCase';

const BanksContainer = () => {
  const [banks, setBanks] = useState<Bank[]>([]);

  useEffect(() => {
    initBankTableUseCase();
  }, []);

  useEffect(() => {
    if (banks.length === 0) {
      initBanks();
    }
  }, [banks]);

  const initBanks = async () => {
    try {
      const banks = await getBanksUseCase();
      setBanks(banks);
    } catch (error) {
      console.error('Error al inicializar lista de bancos: ', error);
      Alert.alert('Error:', 'No sé logro traer el listado de bancos.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {banks.map(bank => (
        <BankInfo key={`bank-${bank.bankName}`} bank={bank} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default BanksContainer;
