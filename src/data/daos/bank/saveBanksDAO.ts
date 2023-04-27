import db from '../../db/SQLiteDB';
import {Bank} from '../../models/bank';

const saveBanksDAO = async (banks: Bank[]): Promise<void> => {
  try {
    const values = banks.map(
      bank =>
        `('${bank.bankName}', '${bank.description}', ${bank.age}, '${bank.url}')`,
    );

    await db.executeSql(
      `INSERT INTO Banks (bankName, description, "age", url) VALUES ${values}`,
    );

    console.log('Se han guardado los bancos');
  } catch (error) {
    console.error('Error al insertar datos en la tabla de bancos: ', error);
  }
};

export default saveBanksDAO;
