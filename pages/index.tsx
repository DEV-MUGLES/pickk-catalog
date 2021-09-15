import { User } from '@pickk/common';

export type HomePageProps = {
  me?: User;
};

export default function HomePage({ me }: HomePageProps) {
  return <h1>Hello</h1>;
}
