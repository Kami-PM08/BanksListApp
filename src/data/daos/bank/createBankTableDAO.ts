import db from '../../db/SQLiteDB';

const createBankTableDAO = async (): Promise<void> => {
  try {
    await db.executeSql(
      'CREATE TABLE IF NOT EXISTS Banks ' +
        '( bankName VARCHAR NOT NULL,' +
        ' description VARCHAR NOT NULL,' +
        ' "age" INT NOT NULL,' +
        ' url VARCHAR NOT NULL,' +
        ' PRIMARY KEY (bankName));',
    );
    console.log('Tabla Banks creada');
  } catch (error) {
    console.error('Error al crear la tabla de bancos: ', error);
  }
};

export default createBankTableDAO;
