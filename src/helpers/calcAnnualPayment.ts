type AnnualPayments = {
  total: number;
  vacation?: number;
};

export default (monthlyPayment: number, contractType: string): AnnualPayments => {
  switch (contractType) {
    case 'CLT':
      return { total: monthlyPayment * 13, vacation: monthlyPayment / 3 };

    default:
      return { total: monthlyPayment };
  }
};
