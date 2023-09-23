import { ServicesStyle } from "./ServicesStyle";
import { FlipCardService } from "../FlipCard/FlipCard";
import { cardsData } from "../FlipCard/FlipCardData";
import { Title } from "../Title/Title";

export function Services() {
  return (
    <ServicesStyle>
      <Title title={"Serviços e Soluções"}></Title>
      <FlipCardService cardsData={cardsData} />
    </ServicesStyle>
  );
}
