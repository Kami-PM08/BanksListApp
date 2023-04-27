import createBankTableDAO from '../daos/bank/createBankTableDAO';
import getBanksDAO from '../daos/bank/getBanksDAO';
import saveBanksDAO from '../daos/bank/saveBanksDAO';
import {Bank} from '../models/bank';
import getBanks from '../services/bank/getBanks';

export const getBanksAPI = async (): Promise<Bank[]> => {
  const banks = await getBanks();
  return banks;
};

export const createBankTableDB = async (): Promise<void> => {
  await createBankTableDAO();
};

export const saveBanksDB = async (banks: Bank[]): Promise<void> => {
  await saveBanksDAO(banks);
};

export const getBanksDB = async (): Promise<Bank[]> => {
  const banks = await getBanksDAO();
  return banks;
};
