import Input from "./Input";
import { Container, FormContent } from "./style";

export default function Form() {
  return (
    <Container>
      <h2>Entre em Contato</h2>
      <FormContent method="get" action="mailto:samuel_gomes26@hotmail.com">
        <Input
          id="name"
          labelName="Como eu posso lhe chamar?"
          inputType="text"
        />
        <Input id="email" labelName="Qual o seu e-mail?" inputType="email" />
        <label htmlFor="message">Me conte um pouco sobre o seu projeto.</label>
        <textarea name="message" id="message" cols={30} rows={8}></textarea>
        <input type="submit" value="Enviar mensagem" />
      </FormContent>
    </Container>
  );
}
