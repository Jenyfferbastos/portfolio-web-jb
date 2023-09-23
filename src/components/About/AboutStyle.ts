import styled from "styled-components";

export const AboutStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  width: 80%;
  height: 570px;
  padding: 4rem;
  margin-top: 2rem;
  background: linear-gradient(
    110.51deg,
    rgba(255, 255, 255, 0.02) 64.82%,
    rgba(227, 106, 152, 0.995) 3.44%
    
  );
  border-radius: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 1090px) {
    background: transparent;
    box-shadow: none;
  }

  @media only screen and (max-width: 918px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    text-align: center;
    height: 85vh;
    background: transparent;
    box-shadow: none;
    padding: 0.2rem;
    margin-top: 6rem;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 0.875rem;
  height: 300px;

  @media only screen and (max-width: 1170px) {
    width: 25rem;
    gap: 1rem;
  }

  @media only screen and (max-width: 1090px) {
    gap: 1rem;
    width: 20rem;
  }

  @media only screen and (max-width: 918px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
  }
`;


export const MainText = styled.p`
  font-size: 1.375rem;

  @media only screen and (max-width: 918px) {
    font-size: 1rem;
  }
`;

export const ImpactText = styled.span`
  font-weight: bold;
`;

export const Description = styled.p`
  width: 30rem;

  @media only screen and (max-width: 1170px) {
    width: 25rem;
  }

  @media only screen and (max-width: 1090px) {
    width: 20rem;
  }

  @media only screen and (max-width: 918px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  button {
    width: 180px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: right;
  align-items: baseline;

  img {
    border: 2px solid white;
    width: 19rem;
  }
  @media only screen and (max-width: 1090px) {
    width: 20rem;
  }

  @media only screen and (max-width: 918px) {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 150px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
`;
