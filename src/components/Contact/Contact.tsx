import { Form } from "../Form/Form";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";
import { ContactStyle } from "./ContactStyle";

export function Contact() {
  return (
    <ContactStyle>
      <Title title={"Fale Comigo"}></Title>
      <Subtitle
        subtitle={
          "Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato."
        }
      ></Subtitle>
      <Form />
    </ContactStyle>
  );
}
