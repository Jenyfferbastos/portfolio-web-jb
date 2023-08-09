import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.colors.text};
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }

  a { 
    text-decoration: none;
    color: inherit;
  }
`;
