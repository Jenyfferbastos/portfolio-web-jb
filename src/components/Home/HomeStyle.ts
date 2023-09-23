import styled from "styled-components";

export const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80%;
  height: 550px;
  padding: 2rem;
  background: linear-gradient(
    106.51deg,
    rgba(255, 255, 255, 0.295) 3.44%,
    rgba(255, 255, 255, 0.02) 64.82%
  );
  border-radius: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  gap: 0.5rem;

  h1 {
    font-size: 3rem;
    background-image: linear-gradient(90deg, rgba(204, 126, 206, 1), rgba(224, 14, 118, 1));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
  }

  @media only screen and (max-width: 768px) {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  button {
    margin-top: 25px;
  }
`;
