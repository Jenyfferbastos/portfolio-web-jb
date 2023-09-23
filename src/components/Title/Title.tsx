import { TitleStyle } from "./TitleStyle";

interface ITitle {
  title: string;
}

export function Title({title}:ITitle){
  return(
    <TitleStyle>{title}</TitleStyle>
  )
}