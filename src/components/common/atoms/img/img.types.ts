import { CSSProperties } from 'react';

const imgWSizes = [50, 128, 160, 256, 512, 1024, 1600] as const;
export type ImgWSize = typeof imgWSizes[number];

export const imgWidth2WSize = (width: number | '100%'): ImgWSize => {
  if (width === '100%') {
    return null;
  }

  return imgWSizes.find((size) => size >= width * 2) ?? 1600;
};

// rate of image [width:height]
const imgRates = ['1:1', '16:9', '3:4', '3:2'] as const;
export type ImgRate = typeof imgRates[number];

export type ImgProps = {
  src: string;

  /** border-radius를 8로 적용한다. */
  round?: boolean;
  /** 프로필과 같은 원형 이미지에 쓰인다. 설정 시 round를 무시한다. */
  circle?: boolean;
  /** 1 grey1인 border를 생성한다. */
  border?: boolean;
  /** width 기반 리사이징 적용 여부
   * @default true */
  resize?: boolean;

  /** @default 'cover' */
  objectFit?: CSSProperties['objectFit'];
  style?: CSSProperties;
} & (
  | {
      width: number | '100%';
      height: number | '100%';
    }
  | {
      width: number;
      rate: ImgRate;
    }
);
