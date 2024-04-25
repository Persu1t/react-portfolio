import About from "./components/About/About";
import Company from "./components/Company/Company";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Projects/Project";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About/>
      </section>
      
      <section id="projects">
        <Project/>
      </section>
      
      <section id="experince">
      <Company/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
      </BrowserRouter>
    </>
  );
}

export default App;
