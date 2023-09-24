import { MouseEventHandler, ReactNode, RefAttributes } from "react";
import { IconType } from "react-icons";
import { ButtonStyle } from "./ButtonStyle";

interface ButtonProps {
  color: string;
  text: string;
  icon?: IconType;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  link?: string;
  isExternal?: boolean; 
}

export function Button({
  text,
  color,
  icon,
  children,
  onClick,
  link,
  isExternal,
}: ButtonProps) {
  const Icon = icon || null;
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (link && isExternal) {
      window.open(link, "_blank", "noopener noreferrer");
    }
    
    if (onClick) {
      onClick(event); 
  };
  };

  return (
      <ButtonStyle color={color} onClick={handleClick} type={link && isExternal ? "button" : "submit"}>
        {Icon && <Icon />}
        {text}
        {children}
      </ButtonStyle>
  );
}
