import { isNumberString } from './validators';

export const getRem = () => {
  if (typeof window === 'undefined') {
    return 10.41;
  }
  if (window.innerWidth >= 361 && window.innerWidth <= 375) {
    return 10.416;
  }
  return Math.min(13, Math.max(7, Math.ceil(window.innerWidth / 18) / 2));
};

/** 입력된 number를 rem string으로 변환한다. string이 입력된 경우 그대로 반환한다.
 * @param {string|number} inputs
 * @param {number} mult (선택) 입력된 input으로 rem을 계산할 때 곱할 수치
 */
export const rem = (input: number | string, mult: number = 1): string => {
  if (!input) {
    return '0rem';
  }
  if (typeof input === 'string' && !isNumberString(input)) {
    return input;
  }

  return `${(Number(input) * mult) / 10}rem`;
};
