import { ReactNode } from "react";
import { AiFillCode } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

export interface CardData {
  id: number;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  phrases: string[];
}

export const cardsData: CardData[] = [
  {
    id: 1,
    icon: <AiFillCode />,
    title: "Software Developer",
    subtitle: "DESENVOLVIMENTO FRONT-END",
    description: "Sites, Páginas Web, E-Commerce, Manutenção, Redesenho e Otimização.",
    phrases: [
      "Desenvolvimento de interfaces responsivas;",
      "Integração de APIs e serviços externos;",
      "Versionamento de código;",
      "Boas práticas de reutilização de código, componentes e clean code.;",
      "Acessibilidade seguindo padrões WCAG;",
      "Orientação a metodologias ágeis.",
    ],
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher />,
    title: "Instrutor",
    subtitle: "TECNOLOGIA, PROGRAMAÇÃO E GAMES",
    description: "Ensino de Informática, Desenvolvimento Web e Criação de Games 2D.",
    phrases: ["Aulas ao vivo e online para crianças e adolescentes;", "Ensino por meio de gamificação;","Uso de plataforma E-learning;", "Ensino interativo por meio de vídeos, slides, incentivos por desempenho e projetos lúdicos;", "Avaliação e Feedback;", "Planejamento do Currículo." ],
  },
  {
    id: 3,
    icon: <MdOutlineDesignServices />,
    title: "Designer",
    subtitle: "PROTOTIPAGEM & LAYOUT",
    description: "Soluções Criativas, Usabilidade, Acessibilidade, Integração Estética e Funcional.",
    phrases: [ "Pesquisa e análise de suas necessidades;", "Criação de wireframes e protótipos para testar conceitos;", "Definição de esquemas de cores e tipografia;", "Criação de layouts de páginas e telas para mobile, desktop e tablets;",  "Testes de usabilidade e iteração." ],
  },
];
