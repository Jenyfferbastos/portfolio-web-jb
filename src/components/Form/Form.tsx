import axios from "axios";
import React, { useState } from "react";
import { TbSend } from "react-icons/tb";
import Swal from "sweetalert2";
import { Button } from "../Button/Button";
import {
  FormContainer,
  Label,
  Input,
  TextArea,
  InputGroup,
  ContainerFlex,
} from "./FormStyle";


interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

    try {
      const apiKey = import.meta.env.X_API_KEY;
      console.log(import.meta.env.X_API_KEY);
      const response = await axios.post("https://send-mail-fj.fly.dev/send-email", formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": 'f6d1a81a-1f23-4e85-8a05-bbb3f1c42125',
        },
      });

      if (response.status === 200) {
        console.log("E-mail enviado com sucesso!");
        Swal.fire({
          icon: 'success',
          title: 'E-mail enviado com sucesso!',
          text: 'Sua mensagem foi enviada.',
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

      } else {
        console.error("Erro ao enviar o e-mail:", response.statusText);
        Swal.fire({
          icon: 'error',
          title: 'Erro ao enviar e-mail',
          text: 'Houve um erro ao enviar sua mensagem.',
        });
      }
      
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(`Campo ${name} alterado para: ${value}`);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <ContainerFlex>
          <InputGroup>
            <Label>SEU NOME (*)</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              width="300px"
              placeholder="Seu nome"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label>E-MAIL (*)</Label>
            <Input
              type="email"
              name="email"
              width="400px"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@exemplo.com"
              required
            />
          </InputGroup>
        </ContainerFlex>
        <ContainerFlex>
          <InputGroup>
            <Label>TELEFONE</Label>
            <Input
              type="tel"
              name="phone"
              width="250px"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(_ _)_ _ _ _ _ - _ _ _ _ "
            />
          </InputGroup>
          <InputGroup>
            <Label>ASSUNTO (*)</Label>
            <Input
              type="text"
              name="subject"
              width="450px"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Digite aqui"
              required
            />
          </InputGroup>
        </ContainerFlex>
        <Label>MENSAGEM (*)</Label>
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Digite aqui sua mensagem"
          required
        />

        <Button color={""} text={"ENVIAR"} icon={TbSend}></Button>
      </form>
    </FormContainer>
  );
}
