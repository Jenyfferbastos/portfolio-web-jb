import styled from "styled-components";

export const EducationStyle = styled.div`
  margin-top: 15rem;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h4 {
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 35rem;
  }

`;

export const ContentContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;

  h4 {
    width: 40%;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;

    h4 {
    width: 95%;
    text-align: center;
    font-size: 16px;
  }
  }
`;
