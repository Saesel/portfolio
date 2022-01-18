import { useState } from "react";
import Typewriter from "typewriter-effect";
import hero from "./assets/img/hero.svg";
import { Buttons, Container, LeftSide, RightSide } from "./style";

export function Hero() {
  const [modal, setModal] = useState(false);

  function handleClick() {
    window.open("https://www.linkedin.com/in/samuelgomes0/");
  }

  function openModal() {
    setModal(!modal);
    console.log(modal);
  }

  return (
    <Container>
      <LeftSide>
        <h1>
          Olá, eu sou o <br />
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "var(--primary)",
            }}
          >
            Samuel Gomes
          </span>
          .
        </h1>
        <Typewriter
          options={{ delay: 75 }}
          onInit={(typewriter) =>
            typewriter.typeString(`Desenvolvedor Front-End`).start()
          }
        />
        <Buttons>
          <button onClick={handleClick}>Download CV</button>
          <button onClick={openModal}>Entrar em Contato</button>
        </Buttons>
      </LeftSide>
      <RightSide>
        <img src={hero} alt="Garoto segurando celular no espaço" />
      </RightSide>
    </Container>
  );
}