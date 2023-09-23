import { ReactNode } from "react";
import { SiJavascript, SiCss3, SiScratch, SiTypescript, SiStyledcomponents } from "react-icons/si";
import {BiLogoDocker} from "react-icons/bi";
import {BiLogoMongodb} from "react-icons/bi"
import { FaReact, FaHtml5 } from "react-icons/fa";
import ProjectCoral from "../../assets/img/project-coral.png";
import ProjectWeeklyPlaning from "../../assets/img/project-weekly-planning.png";
import ProjectSpaceInvaders from "../../assets/img/project-space-invaders.png";

export interface PropsCardData {
  title: string;
  icons: ReactNode[];
  description: string;
  imageUrl: string;
  onlineLink: string;
  codeLink: string;
}

export const CardData: PropsCardData[] = [
  {
    title: "PWA e-Commerce CORA'L",
    icons: [<FaReact  />, <SiTypescript />, <SiStyledcomponents />, <BiLogoDocker />, <BiLogoMongodb />],
    description: "FUNCIONALIDADES: Responsividade, Carrinho de compras persistente, Armazenamento de dados de: endereço, pagamento, encomendas e produtos, Validação de pedido de compra, Filtro de categorias e Cupom.",
    imageUrl: ProjectCoral,
    onlineLink: "https://pwa-e-commerce-bijq.vercel.app/",
    codeLink: "https://github.com/Jenyfferbastos/PWA-eCommerce-Backend"
  },
  {
    title: "Agenda de Planejamento Semanal",
    icons: [<SiJavascript  />, <SiCss3  />, <FaHtml5 />],
    description: "FUNCIONALIDADES: Adicionar tarefas de acordo com data e horário informados, Excluir qualquer tarefa adicionada, Excluir todas as atividades adicionadas, Salvar informações em seu navegador e Relógio em tempo real.",
    imageUrl: ProjectWeeklyPlaning,
    onlineLink: "https://jenyfferbastos.github.io/projeto-weekly-planning/",
    codeLink: "https://github.com/Jenyfferbastos/projeto-weekly-planning"
  },
  {
    title: "Game Space Invaders",
    icons: [<SiScratch  />],
    description: "Controle simples por meio do teclado, Invasores alienígenas, Difculdade crescente, Pontuação, Vidas limitadas, Tiros da Nave e Atmosfera retrô.",
    imageUrl: ProjectSpaceInvaders,
    onlineLink: "https://scratch.mit.edu/projects/848013624/fullscreen/",
    codeLink: "https://scratch.mit.edu/projects/848013624/editor/"
  },
];
