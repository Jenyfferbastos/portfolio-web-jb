import styled from "styled-components";

export const TimlineStyle = styled.div`
  width: 100%;
`;

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CircleLineStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 765px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

export const CircleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 29px;
  height: 29px;
  background-color: ${(props)=>props.theme.colors.text};
  border-radius: 50%;
`;

export const IconStyle = styled.div`
  font-size: 50px;
  background-color: rgba(234, 106, 169, 1);
  padding: 0.5rem 1rem 0.2rem 1rem;
  border-radius: 50%;
  margin-bottom: 1rem;

  @media only screen and (max-width: 765px) {
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 6rem;
  }
`;

export const TitleStyle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;

  @media only screen and (max-width: 765px) {
    font-size: 14px;
    width: 150px;
    text-align: left;
    margin-left: 11rem;
  }
`;

export const TextStyle = styled.div`
  font-size: 12px;

  @media only screen and (max-width: 765px) {
    font-size: 12px;
    width: 150px;
    text-align: left;
    margin-left: 11rem;
  }
`;

export const LineStyle = styled.div<{ itemCount: number }>`
  content: "";
  width: ${(props) => (104 / props.itemCount) * (props.itemCount - 1)}%;
  height: 2px;
  background-color: ${(props)=>props.theme.colors.text};
  position: absolute;
  top: 64.5%;
  left: 9%;
  z-index: -1;

  @media only screen and (max-width: 1232px) {
    top: 57.5%;
  }

  @media only screen and (max-width: 1400px) {
    width: ${(props) => (102 / props.itemCount) * (props.itemCount - 1)}%;
  }

  @media only screen and (max-width: 765px) {
    width: 2px;
    height: ${(props) => (134 / props.itemCount) * (props.itemCount - 1)}%;
    top: 0;
    left: 50%;
    transform: translateY(0) translateX(-50%);
    z-index: -10;
  }
`;
