import { swiperData } from "../Swiper/SwiperData";
import { Slider } from "../Swiper/SwiperSlide";
import { Timeline } from "../Timeline/Timeline";
import {
  ContainerColumn,
  ContainerRow,
  ContentContainerStyle,
  EducationStyle,
} from "./EducationStyle";
import { timelineData } from "../Timeline/TimelineData";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";

export function Education() {
  const itemCount = timelineData.length;
  return (
    <EducationStyle>
      <Title title={"Educação"}></Title>
      <ContentContainerStyle>
        <ContainerColumn>
          <Subtitle subtitle={"Minha carreira educacional"}></Subtitle>
          <Timeline items={timelineData} itemCount={itemCount} />
        </ContainerColumn>
        <ContainerRow>
          <Slider swiperData={swiperData} />
          <h4>
            Alguns dos meus diferenciais. Minha trajetória é marcada pela busca
            constante de aprendizado.
          </h4>
        </ContainerRow>
      </ContentContainerStyle>
    </EducationStyle>
  );
}
