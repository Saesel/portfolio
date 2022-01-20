import { useState } from "react";
import mouse from "./assets/img/mouse.gif";
import { Container } from "./style";

export function MouseScroll() {
  const [visible, setVisible] = useState(true);

  window.addEventListener("scroll", () => {
    let scrolled: number = window.scrollY;

    if (scrolled >= 100) {
      setVisible(false);
    } else if (scrolled <= 100) {
      setVisible(true);
    }
  });

  return (
    <Container>
      <img
        src={mouse}
        alt="Role para baixo"
        style={
          visible ? { opacity: "1" } : { opacity: "0", marginTop: "-100px" }
        }
      />
    </Container>
  );
}
