import styled from 'styled-components';
import { palette } from '@pickk/design-token';

import { rem } from '@common/helpers';

import { sizify, calcImgHeight } from './img.helpers';
import { imgWidth2WSize, ImgProps } from './img.types';

const StyledImg = styled.img<ImgProps>`
  ${(props) =>
    'rate' in props && props.rate
      ? `
    width: ${rem(props.width)};
    min-width: ${rem(props.width)};
    height: ${rem(calcImgHeight(props.width, props.rate))};
  `
      : `
    width: ${rem(props.width)};
    height: ${rem(props.height)};
  `}

  ${({ round: isRound }) => (isRound ? 'border-radius: 0.8rem;' : '')}
  ${({ circle: isCircle }) => (isCircle ? 'border-radius: 50%;' : '')}
  ${({ border: hasBorder }) => (hasBorder ? `1px solid ${palette.gray1};` : '')}

  object-fit: ${({ objectFit }) => objectFit};
  overflow: hidden;
`;

export default function Img(props: ImgProps) {
  const propsWithDefault: ImgProps = {
    objectFit: 'cover',
    resize: true,
    ...props,
  };
  const { src, width, resize } = propsWithDefault;

  return (
    <StyledImg
      {...propsWithDefault}
      src={sizify(src, imgWidth2WSize(width), resize)}
    />
  );
}
