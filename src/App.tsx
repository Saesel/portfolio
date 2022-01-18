import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MouseScroll } from "./components/MouseScroll";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <MouseScroll />
      <GlobalStyle />
    </>
  );
}
