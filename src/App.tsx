import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import "./App.scss";

function App() {

  return (

    <div className="MainInterface">
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  )

}

export default App;
