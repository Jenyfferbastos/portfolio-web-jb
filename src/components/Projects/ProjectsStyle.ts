import styled from "styled-components";

export const ProjectsStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  width: 80rem;
  margin-top: 12%;
  

  @media only screen and (max-width: 990px) {
    margin-top: 45%;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 30rem;
  }
`;

