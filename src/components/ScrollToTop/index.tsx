import { useState } from "react";
import arrowUp from "./assets/img/arrowup.svg";
import { Button } from "./style";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      src={arrowUp}
      onClick={scrollToTop}
      style={visible ? { opacity: "1" } : { opacity: "0" }}
    ></Button>
  );
}
