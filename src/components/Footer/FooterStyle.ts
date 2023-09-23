import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 20px;
  width: 90vw;
  gap: 1rem;
  border-top: solid 1px #7F657C;
`;

export const ContainerFooterSections  = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
gap: 10rem;

@media only screen and (max-width: 820px) {
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
  }
`;

export const FooterSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: ${(props)=> props.theme.colors.primary};
  margin-bottom: 10px;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
  color: #7F657C;
`;

export const ContactStyle = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
align-items: center;
color: ${(props)=>props.theme.colors.text};
`;

export const IconContainer = styled.div`
color: ${(props)=> props.theme.colors.primary};
background-color: ${(props)=> props.theme.colors.text};
border-radius: 50px;
padding: 5px 9px;

`;

export const CopyrightStyle = styled.div`
font-size: 14px;
color: #7F657C;
`;


