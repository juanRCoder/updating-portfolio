import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import "./App.scss";
import Contact from "./components/Contact/Contact";

function App() {

  return (
    <div className="MainInterface">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )

}

export default App;
