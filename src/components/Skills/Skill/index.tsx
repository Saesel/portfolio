type Props = {
  name: string;
};

export function Skill({ name }: Props) {
  return (
    <li>
      <span>{name}</span>
    </li>
  );
}
