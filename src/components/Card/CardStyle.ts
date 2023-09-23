import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  padding: 2rem;
  width: 95%;
  gap: 1rem;
  background: linear-gradient(
    106.51deg,
    rgba(255, 255, 255, 0.295) 3.44%,
    rgba(255, 255, 255, 0.02) 64.82%
  );
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`;

export const Image = styled.img`
  width: 30%;
  border-radius: 12px;

  @media only screen and (max-width: 990px) {
    width: 65%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 990px) {
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const IconList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const IconItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 8px;
  border: solid 1px #ea6aa9;
  font-size: 24px;
  background: linear-gradient(
    136deg,
    rgba(234, 78, 148, 0.5) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.colors.text};

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  @media only screen and (max-width: 990px) {
    button {
      height: 40px;
      padding: 10px;
      font-size: 0.75rem;
    }
  }
`;

export const Description = styled.p`
  font-size: 0.875rem;
  width: 30rem;

  @media only screen and (max-width: 768px) {
    width: 90%;
    font-size: 0.8rem;
    text-align: center;
  }
`;
