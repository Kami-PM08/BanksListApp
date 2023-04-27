import {Bank} from '../../data/models/bank';
import {
  getBanksDB,
  getBanksAPI,
  saveBanksDB,
} from '../../data/repositories/BankRepository';

const getBanksUseCase = async (): Promise<Bank[]> => {
  let banks = await getBanksDB();
  if (banks.length === 0) {
    banks = await getBanksAPI();
    saveBanksDB(banks);
  }
  return banks;
};

export default getBanksUseCase;
