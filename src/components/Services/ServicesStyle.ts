import styled, { css } from "styled-components";

export const ServicesStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  height: 100vh;
  width: 90%;
  text-align: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 990px) {
    margin-top: 4rem;
  }
`;
