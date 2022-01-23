type Props = {
  href: string;
  description: string;
};

export function MenuItem({ href, description }: Props) {
  return (
    <li>
      <a href={href}>{description}</a>
    </li>
  );
}
