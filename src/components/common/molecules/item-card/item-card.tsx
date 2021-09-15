import styled from 'styled-components';
import { Item } from '@pickk/common';
import { palette } from '@pickk/design-token';

import { Img } from '@components/common/atoms';

const StyledWrapper = styled.a.attrs({ target: '_blank' })`
  display: flex;
  flex-direction: column;

  width: 16rem;
  margin: 0.4rem;

  text-decoration: none;
  color: ${palette.gray6};

  cursor: pointer;
`;

const StyledImg = styled(Img).attrs({ width: 160, rate: '3:4' })`
  margin-bottom: 0.8rem;
`;

const StyledBrandName = styled.p`
  font-size: 0.8rem;
  margin: 0.2rem;
`;

const StyledName = styled.p`
  font-size: 0.8rem;
  margin: 0.2rem;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledOriginalPrice = styled.p`
  font-size: 0.8rem;
  color: ${palette.gray3};
  margin: 0.2rem;
`;

const StyledFinalPrice = styled.p`
  font-size: 0.8rem;
  margin: 0.2rem;
`;

export default function ItemCard(props: Item) {
  const { imageUrl, brand, name, originalPrice, finalPrice, urls } = props;

  return (
    <StyledWrapper href={urls?.[0]?.url}>
      <StyledImg src={imageUrl} />
      <StyledBrandName>{brand.nameKor}</StyledBrandName>
      <StyledName>{name}</StyledName>
      <StyledRow>
        {originalPrice !== finalPrice && (
          <StyledOriginalPrice>{originalPrice}</StyledOriginalPrice>
        )}
        <StyledFinalPrice>₩ {finalPrice}</StyledFinalPrice>
      </StyledRow>
    </StyledWrapper>
  );
}
