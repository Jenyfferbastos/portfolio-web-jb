import styled from "styled-components";

export const FlipCardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  .card {
    width: 20rem;
    height: 25rem;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 0.5rem;

    ul {
      display: flex;
      flex-direction: column;
      align-items: initial;
      gap: 0.5rem;
      padding: 1rem;
    }

    li {
      font-size: 0.875rem;
      gap: 0.7rem;
      list-style: inside;
    }

    button {
      border: solid 1px;
      border-radius: 26px;
      width: 40%;
      align-self: center;
    }
  }
`;

export const CardFront = styled.div`
  background: linear-gradient(
    136deg,
    rgba(234, 78, 148, 0.5) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );

  @media (max-width: 768px) {
    height: 15rem;
  }
`;

export const Icon = styled.div`
  font-size: 55px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
`;

export const Subtitle = styled.h3`
  font-size: 0.875rem;
`;

export const Description = styled.p`
  font-size: 0.8rem;
`;

export const CardBack = styled.div`
  background: linear-gradient(
    136deg,
    rgba(255, 255, 255, 0.29) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );

  @media (max-width: 768px) {
    height: 15rem;
  }
`;
