import { GetServerSideProps } from 'next';

import { ItemsPackageContainer } from '@containers/items-package';

export default function ItemsPackagePage({ code }: { code: string }) {
  return (
    <>
      <ItemsPackageContainer code={code} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { code } = params;

  if (!code) {
    throw new Error('잘못된 접근입니다. (/[code])');
  }

  return {
    props: { code },
  };
};
