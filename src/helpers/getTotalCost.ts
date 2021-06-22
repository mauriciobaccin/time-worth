import calcFGTS from './calcFGTS';
import calcINSS from './calcINSS';
import calcAnnualPayment from './calcAnnualPayment';

type TotalCost = {
  annualPayment: number;
  FGTS: number;
  INSS: number;
};

export default (monthlyPayment: number, contractType: string): TotalCost => {
  const { total, vacation } = calcAnnualPayment(monthlyPayment, contractType);
  const totalMonths = contractType === 'CLT' ? 13 : 12;

  const annualFGTS = calcFGTS(total);
  const vacationFGTS = vacation ? calcFGTS(vacation) : 0;

  const monthlyINSS = calcINSS(monthlyPayment);
  const vacationINSS = vacation ? calcINSS(vacation) : 0;

  return {
    annualPayment: total,
    FGTS: annualFGTS * totalMonths + vacationFGTS,
    INSS: monthlyINSS * totalMonths + vacationINSS,
  };
};
