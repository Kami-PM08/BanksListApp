import db from '../../db/SQLiteDB';
import {Bank} from '../../models/bank';

const getBanksDAO = () =>
  new Promise<Bank[]>(async (resolve, reject) => {
    db.executeSql(
      'SELECT * FROM Banks',
      [],
      res => {
        const banks: Bank[] = [];
        for (let i = 0; i < res.rows.length; i++) {
          const row = res.rows.item(i);
          banks.push(row);
        }
        resolve(banks);
      },
      error => {
        console.error('Error al obtener datos de la tabla de bancos: ', error);
        reject(error);
      },
    );
  });

export default getBanksDAO;
