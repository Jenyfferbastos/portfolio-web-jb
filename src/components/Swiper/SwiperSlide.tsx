import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { StyledSwiper, Caption, Title, Icon, Description } from "./SwiperStyle";
import { ReactNode, useState } from "react";
import { SwiperItem } from "./SwiperData";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function Slider({
  swiperData,
}: {
  swiperData: SwiperItem[];
}): JSX.Element {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <StyledSwiper
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      direction="horizontal"
      grabCursor={true}
      loop
      speed={2000}
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index}>
          <Caption>
            <Icon className="icon">{slide.icon}</Icon>
            <div>
            <Title>{slide.title}</Title>
            <Description>{slide.description}</Description>
            </div>
          </Caption>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}
