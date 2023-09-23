import React, { useContext, useState } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  Nav,
  NavList,
  NavItem,
  NavButton,
} from "./HeaderStyle";
import { FaBars, FaTimes } from "react-icons/fa";

interface Props {
  toggleTheme(): void;
}

const navigationLinks = [
  { path: "#about", text: "Sobre mim" },
  { path: "#projects", text: "Projetos" },
  { path: "#technical-skills", text: "Habilidades Técnicas" },
  { path: "#education", text: "Educação" },
  { path: "#services", text: "Serviços" },
];

export function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <Title>Seja bem-vindo!</Title>
      <Nav className={isMenuOpen ? "responsive_nav" : ""}>
        <NavList>
          {navigationLinks.map((link, index) => (
            <NavItem key={index}>
              <Link to={link.path}>{link.text}</Link>
            </NavItem>
          ))}
        </NavList>
        <NavButton className="nav-btn nav-close-btn" onClick={toggleMenu}>
          <FaTimes size={26} />
        </NavButton>
      </Nav>
      <NavButton className="nav-btn" onClick={toggleMenu}>
        <FaBars size={26} />
      </NavButton>
      <ReactSwitch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.primary}
      />
    </Container>
  );
}
``
