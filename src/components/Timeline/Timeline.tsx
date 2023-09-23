import { ReactNode } from "react";
import {
  CircleLineStyle,
  CircleStyle,
  ContainerStyle,
  IconStyle,
  LineStyle,
  TextStyle,
  TimlineStyle,
  TitleStyle,
} from "./TimelineStyle";

interface TimelineItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ITimeline {
  items: TimelineItem[];
  itemCount: number;
}

export function Timeline({ items, itemCount }: ITimeline) {
  return (
    <TimlineStyle>
      <CircleLineStyle>
        {items.map((item, index) => (
          <ContainerStyle key={index}>
            <IconStyle>{item.icon}</IconStyle>
            <CircleStyle />
            <div>
              <TitleStyle>{item.title}</TitleStyle>
              <TextStyle>{item.description}</TextStyle>
            </div>
          </ContainerStyle>
        ))}
        <LineStyle itemCount={itemCount} />
      </CircleLineStyle>
    </TimlineStyle>
  );
}
