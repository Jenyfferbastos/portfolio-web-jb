import { DefaultTheme, ThemeProvider } from "styled-components";
import { usePersistedState } from "./utils/usePersistedState";
import { Header } from "./components/Header/Header";
import Global from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { TechnicalSkills } from "./components/TechnicalSkills/TechnicalSkills";
import { Education } from "./components/Education/Education";
import { Services } from "./components/Services/Services";
import { Projects } from "./components/Projects/Projects";

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header toggleTheme={toggleTheme} />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="technical-skills">
        <TechnicalSkills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="services">
        <Services />
      </section>
    </ThemeProvider>
  );
}
