import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "../Button/Button";
import { CardData } from "./FlipCardData";
import { CardFront, CardBack, FlipCardStyle, Description, Icon, Title, Subtitle } from "./FlipCardStyle";

interface FlipCardServiceProps {
  cardsData: CardData[];
}

export function FlipCardService({ cardsData }: FlipCardServiceProps) {
  const [isFlipped, setIsFlipped] = useState<boolean[]>(
    cardsData.map(() => false)
  );

  const handleClick = (index: number) => {
    setIsFlipped((prevIsFlipped) => {
      const updatedIsFlipped = [...prevIsFlipped];
      updatedIsFlipped[index] = !prevIsFlipped[index];
      return updatedIsFlipped;
    });
  };

  return (
    <FlipCardStyle>
      {cardsData.map((card, index) => (
        <ReactCardFlip
          key={card.id}
          isFlipped={isFlipped[index]}
          flipDirection="horizontal"
          flipSpeedBackToFront={1}
          flipSpeedFrontToBack={1}
        >
          <CardFront className="card">
            <Icon>{card.icon}</Icon>
            <Title>{card.title}</Title>
            <Subtitle>{card.subtitle}</Subtitle>
            <Description>{card.description}</Description>
            <Button
              onClick={() => handleClick(index)}
              color={"transparent"}
              text={"Saber mais"}
            ></Button>
          </CardFront>
          <CardBack className="card">
            <ul>
              {card.phrases.map((phrase, phraseIndex) => (
                <li key={`phrase-${phraseIndex}`}>{phrase}</li>
              ))}
            </ul>
            <Button
              onClick={() => handleClick(index)}
              color={"transparent"}
              text={"Voltar"}
            ></Button>
          </CardBack>
        </ReactCardFlip>
      ))}
    </FlipCardStyle>
  );
}
