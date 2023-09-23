import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ContactStyle, ContainerFooterSections, CopyrightStyle, FooterSection, FooterStyle, IconContainer, ListItem, Title } from "./FooterStyle";

export function Footer(){
  return(
    <FooterStyle>
       <ContainerFooterSections>
            <FooterSection>
        <Title>MENU</Title>
        <ul>
          <ListItem>Sobre mim</ListItem>
          <ListItem>Projetos</ListItem>
          <ListItem>Habilidades Técnicas</ListItem>
          <ListItem>Educação</ListItem>
          <ListItem>Serviços</ListItem>
          <ListItem>Contato</ListItem>
        </ul>
      </FooterSection>
      <FooterSection>
        <Title>REDES SOCIAIS</Title>
        <ul>
          <ListItem>LinkedIn</ListItem>
          <ListItem>Instagram</ListItem>
          <ListItem>Twitter</ListItem>
        </ul>
      </FooterSection>
      <FooterSection>
        <ContactStyle ><IconContainer>< BsFillTelephoneFill size={18}/></IconContainer>+55 75 99852-2555</ContactStyle>
        <ContactStyle><IconContainer>< MdEmail size={18} /></IconContainer>jenyfferbastos06@gmail.com</ContactStyle>
      </FooterSection>
     </ContainerFooterSections>
      <CopyrightStyle>&copy; 2023 Jenyffer Bastos</CopyrightStyle>
    </FooterStyle>
  )
}