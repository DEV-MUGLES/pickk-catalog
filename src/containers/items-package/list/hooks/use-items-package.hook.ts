import { gql, useQuery } from '@apollo/client';
import { ItemsPackage } from '@pickk/common';

const GET_ITEMS_PACKAGE = gql`
  query itemsPackage($code: String!) {
    itemsPackage(code: $code) {
      items {
        id

        name
        imageUrl
        originalPrice
        finalPrice

        urls {
          url
        }

        brand {
          nameKor
        }
      }
    }
  }
`;

export const useItemsPackage = (code: string) => {
  const { data } = useQuery<{ itemsPackage: ItemsPackage }, { code: string }>(
    GET_ITEMS_PACKAGE,
    {
      variables: { code },
    }
  );

  return { data: data?.itemsPackage };
};
