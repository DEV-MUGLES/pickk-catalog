import styled from 'styled-components';

import { ItemCard } from '@components/common/molecules';

import { useItemsPackage } from './hooks';

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default function ItemsPackageContainer({ code }: { code: string }) {
  const { data: itemsPackage } = useItemsPackage(code);

  if (!itemsPackage) {
    return null;
  }

  return (
    <StyledWrapper>
      {itemsPackage.items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </StyledWrapper>
  );
}
