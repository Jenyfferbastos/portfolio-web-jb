import { HomeStyle, Heading, Text, ButtonContainer } from "./HomeStyle";
import { Button } from "../Button/Button";
import { FaRegFilePdf } from 'react-icons/fa';
import { VscGithubAlt } from 'react-icons/vsc';

export function Home() {
  return (
    <HomeStyle>
      <Text>Hello World</Text>
      <Heading>Olá, eu sou Jenyffer</Heading>
      <h1>Engenheira de Software</h1>
      <Text>Fico feliz em vê-lo (a) por aqui.</Text>
      <ButtonContainer>
        <Button text="Currículo" color={"#EA6AA9"} icon={FaRegFilePdf} children={undefined} />
        <Button text="GitHub" color={"transparent"} icon={VscGithubAlt} children={undefined}/>
      </ButtonContainer>
    </HomeStyle>
  );
}
