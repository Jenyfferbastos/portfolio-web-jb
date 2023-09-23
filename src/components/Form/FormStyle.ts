import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 14px;

  form {
    display: grid;
    flex-direction: column;
    justify-items: center;
  }

  button {
    background-color: #ea6aa9;
    width: 14rem;
    align-self: center;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  border: none;
  width: ${(props) => props.width || "auto"};

  ::placeholder {
    color: #cdd2d7;
  }

  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerFlex = styled.div`
  display: flex;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  height: 200px;
  border-radius: 12px;
  border: none;
  width: 720px;

  ::placeholder {
    color: #cdd2d7;
  }

  @media only screen and (max-width: 790px) {
    width: 80vw;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
