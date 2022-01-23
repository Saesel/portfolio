import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MobileMenu } from "./MobileMenu";
import { Container, Menu, MobileMenuIcon } from "./style";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleClick() {
    setOpenMenu(!openMenu);
  }
  return (
    <Container>
      <a href="index.html" style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Saesel
      </a>
      <MobileMenuIcon onClick={handleClick}>
        {openMenu && <MobileMenu />}
      </MobileMenuIcon>
      <Menu>
        <MenuItem href="#about" description="Sobre mim" />
        <MenuItem href="#projects" description="Projetos" />
        <MenuItem href="#services" description="Serviços" />
        <MenuItem href="#skills" description="Conhecimentos" />
      </Menu>
    </Container>
  );
}
