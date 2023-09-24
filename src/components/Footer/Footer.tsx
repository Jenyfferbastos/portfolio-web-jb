import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  ContactStyle,
  ContainerFooterSections,
  CopyrightStyle,
  FooterSection,
  FooterStyle,
  IconContainer,
  ListItem,
  Title,
} from "./FooterStyle";

const footerLinks = [
  { path: "about", text: "Sobre mim" },
  { path: "technical-skills", text: "Habilidades Técnicas" },
  { path: "projects", text: "Projetos" },
  { path: "education", text: "Educação" },
  { path: "services", text: "Serviços" },
  { path: "contact", text: "Contato" },
];

const socialLinks = [
  { text: "LinkedIn", url: "https://www.linkedin.com/in/jenyffer-bastos-41098b1b7/" },
  { text: "Instagram", url: "https://www.instagram.com/jenyffrbastos/" },
  { text: "Twitter", url: "https://twitter.com/JenyfferBastosS" },
];

export function Footer() {
  return (
    <FooterStyle>
      <ContainerFooterSections>
        <FooterSection>
          <Title>MENU</Title>
          <ul>
            {footerLinks.map((link, index) => (
              <ListItem key={index}>
                <a href={`#${link.path}`}>{link.text}</a>
              </ListItem>
            ))}
          </ul>
        </FooterSection>
        <FooterSection>
          <Title>REDES SOCIAIS</Title>
          <ul>
            {socialLinks.map((link, index) => (
              <ListItem key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </ListItem>
            ))}
          </ul>
        </FooterSection>
        <FooterSection>
          <ContactStyle>
            <IconContainer>
              <BsFillTelephoneFill size={18} />
            </IconContainer>
            +55 75 99852-2555
          </ContactStyle>
          <ContactStyle>
            <IconContainer>
              <MdEmail size={18} />
            </IconContainer>
            jenyfferbastos06@gmail.com
          </ContactStyle>
        </FooterSection>
      </ContainerFooterSections>
      <CopyrightStyle>&copy; 2023 Jenyffer Bastos</CopyrightStyle>
    </FooterStyle>
  );
}
