import { INSS_ALIQUOT } from '~/constants';

export default (monthlyPayment: number): number => {
  const aliquots = Object.keys(INSS_ALIQUOT)
    .map(Number)
    .filter((value) => value <= monthlyPayment);

  return aliquots.reduce((acc, curr, index) => {
    const base = curr < monthlyPayment ? curr : monthlyPayment;
    const actual = index === 0 ? base : base - aliquots[index - 1];
    const tax = actual * INSS_ALIQUOT[curr];

    return acc + tax;
  }, 0);
};
