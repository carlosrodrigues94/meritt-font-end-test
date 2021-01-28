export const calculatePercentage = (
  partialValue: number,
  totalValue: number,
): number => {
  const calculated = (100 * partialValue) / totalValue;

  const calculatedNumber = Number(calculated.toFixed(0));

  return calculatedNumber;
};
