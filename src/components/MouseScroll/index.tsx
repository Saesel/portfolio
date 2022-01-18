import { useState } from "react";
import mouse from "./assets/img/mouse.gif";
import { Container } from "./style";

export function MouseScroll() {
  return (
    <Container>
      <img src={mouse} alt="Role para baixo" className="" />
    </Container>
  );
}
