import {createBankTableDB} from '../../data/repositories/BankRepository';

const initBankTableUseCase = async (): Promise<void> => {
  await createBankTableDB();
};

export default initBankTableUseCase;
