import styled from "styled-components";

export const TechnicalSkillsStyle = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin-top: 5rem;
  }
`;


export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3rem;
  margin-top: -100px;

  @media only screen and (max-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: 786px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
`;

export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 4px;
  border: solid 1px #ea6aa9;
  font-size: 38px;
  background: linear-gradient(
    136deg,
    rgba(234, 78, 148, 0.5) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.colors.text};

  p {
    font-size: 0.75rem;
    text-align: left;
  }
`;
