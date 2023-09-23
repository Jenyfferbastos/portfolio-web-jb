import { ReactNode } from "react";
import {HiOutlineCode} from "react-icons/hi";
import {TfiRulerPencil} from "react-icons/tfi";
import {PiGearSix} from "react-icons/pi";

export interface SwiperItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export const swiperData: SwiperItem[] = [
  {
    icon: <PiGearSix />,
    title: "Metodologias Ágeis",
    description:
      " Utilizo metodologias e planejamentos otimizados que dinamizam o fluxo de produção. Através de feedback e interações constantes, garantindo a agilidade e eficiência do processo.",
  },
  {
    icon:     <TfiRulerPencil />,
    title: "Interfaces de alta fidelidade",
    description:
      "Trabalho com a implementação fiel de interfaces presando pela melhor experiência do usuário para atender as expectativas de cada projeto.",
  },
  {
    icon: <HiOutlineCode />,
    title: "Clean Code",
    description:
      "Tenho como minha principal diretriz durante o desenvolvimento a qualidade do código seguindo as melhores práticas do mercado.",
  },
];
