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
  downloadUrl?: string;
}

export function Button({
  text,
  color,
  icon,
  children,
  onClick,
  link,
  isExternal,
  downloadUrl
}: ButtonProps) {
  const Icon = icon || null;
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (link && isExternal) {
      window.open(link, "_blank", "noopener noreferrer");
    }

    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'Jenyffer Bastos Sacramento_CV.docx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
