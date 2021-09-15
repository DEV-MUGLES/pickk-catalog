export const isNumberString = (input: string) => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(input);
};
