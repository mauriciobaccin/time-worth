import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = {
  timeWorth: [
    {
      uuid: '241728d4-8cec-497f-825b-c869e3aaee68',
      additionalValues: 1000,
      description: 'Estou testando',
      isClt: false,
      timeWorth: 130,
      title: 'Valor de teste',
      totalAmount: 8300,
    },
  ],
};

const HANDLERS = {};

export default createReducer(INITIAL_STATE, HANDLERS);
