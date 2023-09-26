import Profile from "../../assets/img/fotor_1688145579764.jpg";
import { Button } from "../Button/Button";
import { BsLinkedin } from "react-icons/bs";
import {
  AboutStyle,
  Texts,
  MainText,
  ImpactText,
  Description,
  ButtonWrapper,
  ContainerImage,
  ProfileImage
} from "./AboutStyle";
import { Title } from "../Title/Title";

export function About() {
  return (
    <AboutStyle>
      <Texts>
        <Title title={"Sobre mim"}></Title>
        <MainText>
        Um dia, Steve Jobs disse:{" "}
          <ImpactText>
            "A única maneira de fazer um ótimo trabalho é amar o que você faz.
          </ImpactText>
           " E eu amo o que faço.
        </MainText>
        <Description>
        Desenvolvedora front-end e Instrutora de Tecnologia, meu percurso é marcado por um Bacharelado em andamento em Engenharia de Software e a conclusão de +30 cursos na área. 
        </Description>
        <Description>
        Com experiências notáveis em projetos voluntários em ONGs, como no Instituto Busidô e Rede Impulsoma,  busco constantemente impactar através do código. Minha jornada é moldada pelo compromisso em superar limites, sempre com o objetivo de fazer a diferença no mundo da tecnologia.
        </Description>
        <ButtonWrapper>
          <Button color="#EA6AA9" text="LinkedIn" icon={BsLinkedin} children={undefined} link="https://www.linkedin.com/in/jenyffer-bastos-41098b1b7/"  isExternal={true}/>
        </ButtonWrapper>
      </Texts>
      <ContainerImage>
        <ProfileImage src={Profile} alt="Profile" />
      </ContainerImage>
    </AboutStyle>
  );
}
