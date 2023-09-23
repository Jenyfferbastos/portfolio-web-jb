import { SubtitleStyle } from "./SubtitleStyle";

interface ISubtitle {
  subtitle: string;
}
export function Subtitle({subtitle}: ISubtitle){
  return(
    <SubtitleStyle>{subtitle}</SubtitleStyle>
  )
}