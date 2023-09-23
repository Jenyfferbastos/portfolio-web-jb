import { TechnicalSkillsStyle, SkillsList, SkillItem } from "./TechnicalSkillsStyle";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiConstruct3 } from "react-icons/si";
import { SiScratch } from "react-icons/si";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";

const skills = [
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React.JS" },
  { icon: <ImHtmlFive2 />, name: "HTML5" },
  { icon: <IoLogoCss3 />, name: "CSS3" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiStyledcomponents />, name: "Styled-components" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaSass />, name: "Sass" },
  { icon: <BsGit />, name: "Git" },
  { icon: <SiConstruct3 />, name: "Construct 3" },
  { icon: <SiScratch />, name: "Scratch 3.0" },
];

export function TechnicalSkills() {
  return (
    <TechnicalSkillsStyle>
      <div>
        <Title title={"Habilidades Técnicas"}></Title>
        <Subtitle subtitle={"Conheça as Linguagens, Tecnologias e Ferramentas que domino."}></Subtitle>
      </div>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </SkillItem>
        ))}
      </SkillsList>
    </TechnicalSkillsStyle>
  );
}
