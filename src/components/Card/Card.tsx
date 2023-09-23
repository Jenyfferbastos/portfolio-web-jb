import { Button } from "../Button/Button";
import { CardData, PropsCardData } from "./CardData";
import {
  CardStyle,
  Image,
  BoxContainer,
  Title,
  IconList,
  IconItem,
  Buttons,
  Description,
} from "./CardStyle";

export function Card() {
  return (
    <>
      {CardData.map((card, index) => (
        <CardInstance key={index} {...card} />
      ))}
    </>
  );
}

function CardInstance(props: PropsCardData) {
  const { title, icons, description, imageUrl, onlineLink, codeLink } = props;

  return (
    <CardStyle>
      <Image src={imageUrl} alt="Project" />
      <BoxContainer>
        <Title>{title}</Title>
        <IconList>
          {icons.map((icon, index) => (
            <IconItem key={index}>{icon}</IconItem>
          ))}
        </IconList>
        <Description>{description}</Description>
        <Buttons>
          {/* <Button color="#EA6AA9" text="Ver online" children={undefined} link={onlineLink} isExternal={true}/> */}
          <Button color="transparent" text="Ver código" children={undefined} link={codeLink} isExternal={true}/>
        </Buttons>
      </BoxContainer>
    </CardStyle>
  );
}
