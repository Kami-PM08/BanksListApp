import axios from 'axios';
import {BASE_URL} from '../../../config';
import {Bank} from '../../models/bank';

const getBanks = (): Promise<Bank[]> => {
  return axios
    .get(BASE_URL + '/banks')
    .then(({data}) => data)
    .catch(error => {
      console.error('Error al obtener listado de bancos: ', error);
      return error;
    });
};

export default getBanks;
