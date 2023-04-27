import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'BankDB',
    location: 'default',
  },
  () => console.log('Base de datos disponible'),
  error => console.error('Error al inicializar la base de datos: ', error),
);

export default db;
