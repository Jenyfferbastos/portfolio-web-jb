import styled from "styled-components";

interface ButtonProps {
  color?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  background-color: ${({ color }) => color };
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 45px;
  padding: 14px;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  font-size: 0.9rem;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.1);
    transition: 0.3s;
  }

`;
