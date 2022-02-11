import { useState } from "react";
import Typewriter from "typewriter-effect";
import hero from "./assets/img/hero.svg";
import { Buttons, Container, LeftSide, RightSide } from "./style";
import { Modal } from "./Modal";

export function Hero() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(!modal);
    console.log(modal);
  }

  return (
    <Container>
      <LeftSide>
        <h1>
          Olá, eu sou o <br />
          <span className="name">Samuel Gomes</span>.
        </h1>
        <Typewriter
          options={{ delay: 75 }}
          onInit={(typewriter) =>
            typewriter.typeString(`Desenvolvedor Front-End.`).start()
          }
        />
        <Buttons>
          <a href="./CV_Samuel.pdf" target="_blank" rel="noopener noreferrer">
            <button>Download CV</button>
          </a>
          <button onClick={openModal}>Entrar em Contato</button>
        </Buttons>
      </LeftSide>
      <RightSide>
        <img
          src={hero}
          alt="Garoto segurando celular no espaço"
          width={"350px"}
          height={"350px"}
        />
      </RightSide>
      {modal && <Modal />}
    </Container>
  );
}
