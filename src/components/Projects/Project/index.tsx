import { Container } from "./style";

type Props = {
  name: string;
  description: string;
};

export function Project({ name, description }: Props) {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{description}</p>
    </Container>
  );
}
