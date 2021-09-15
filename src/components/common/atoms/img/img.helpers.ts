import { constructUrl, getQueryParameters } from '@common/helpers';

import { ImgRate, ImgWSize } from './img.types';

export const sizify = (src: string, w: ImgWSize, resize: boolean): string => {
  if (!src) {
    return '';
  }
  if (!resize) {
    return src;
  }

  const isPickkUrl = src.match(/d30jbgl6dfbres/g);

  if (!isPickkUrl || !w) {
    return src;
  }

  return constructUrl(src.split('?')[0], { ...getQueryParameters(src), w });
};

export const calcImgHeight = (
  width: number,
  rate: ImgRate
): number | '100%' => {
  if (!rate || !width) {
    return 0;
  }
  const [wRate, hRate] = rate.split(':');
  return width * (parseInt(hRate) / parseInt(wRate));
};
