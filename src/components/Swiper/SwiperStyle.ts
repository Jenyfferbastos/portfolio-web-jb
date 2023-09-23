import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border-radius: 8px;
  padding-left: 4rem;
  background: linear-gradient(
    136deg,
    rgba(234, 78, 148, 0.5) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-pagination-bullet {
    background-color: #fff;
    width: 8px;
    height: 8px;
  }
  .swiper-pagination {
    bottom: 0px;
  }

  @media only screen and (max-width: 1024px) {
    width: 90vw;
    padding-left: 1rem;
  }
`;

export const Caption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 1rem;
  gap: 20px;
  height: 95%;
`;

export const Icon = styled.div`
  font-size: 100px;

  @media only screen and (max-width: 1024px) {
    font-size: 50px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  width: 80%;
  font-size: 14px;
`;
