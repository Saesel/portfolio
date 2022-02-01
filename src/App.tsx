import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MouseScroll } from "./components/MouseScroll";
import { Projects } from "./components/Projects";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <MouseScroll />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Footer />
      <ScrollToTop />
      <GlobalStyle />
    </>
  );
}
