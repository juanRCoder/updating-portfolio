import "../styles/proyectos.scss";
import { FaGithub } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiAngular, SiTypescript } from "react-icons/si";
import project_HVA from "../assets/project_HVA.png";
import project_BS from "../assets/project_BS.png";
import projet_EBOOK from "../assets/project_EBOOK.png";
import project_ST from "../assets/project_ST.png";

function Proyectos() {
  return (
    <section className="sectionProyectos" id="proyectos">
      <h1>Proyectos</h1>
      <p>
        Proyectos mas recientes que he desarrollado, estan en constante
        actualización:
      </p>
      <div className="proyectosContainer">
        <div className="boxProject">
          <div className="boxImagen">
            <div className="boxImagen_img">
              <img src={project_HVA} title="HVA" alt="HVA" />
            </div>
          </div>
          <div className="boxProjectInfo">
            <h1>HVA: Hotel Virtual Assitant</h1>
            <div className="boxTecnologias">
              <button>
                <SiMongodb className="icon mongo" />
                <p>MongoDB</p>
              </button>
              <button>
                <SiExpress className="icon express" />
                <p>ExpressJs</p>
              </button>
              <button>
                <FaReact className="icon react" />
                <p>React</p>
              </button>
              <button>
                <FaNodeJs className="icon" />
                <p>NodeJs</p>
              </button>
            </div>
            <p className="infoProject">
              Aplicación web que realiza funciones de servicio al cliente como
              un empleado de hotel, recibe y genera servicios, reduciendo el
              tiempo de respuesta entre cliente y staff del hotel.
            </p>
            <div className="linksProject">
              <button className="web">
                <a
                  href="https://juanrcoder.github.io/Project-Landing_HVA/"
                  target="_BLANK"
                >
                  <p>Sitio Web</p>
                  <TfiWorld />
                </a>
              </button>
              <button className="github">
                <a
                  href="https://github.com/juanRCoder/Hotel_Virtual_Assitant"
                  target="_BLANK"
                >
                  <p>GitHub</p>
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="boxProject">
          <div className="boxImagen">
            <div className="boxImagen_img">
              <img src={project_BS} title="HVA" alt="HVA" />
            </div>
          </div>
          <div className="boxProjectInfo">
            <h1>Bank Simulator</h1>
            <div className="boxTecnologias">
              <button>
                <SiMongodb className="icon mongo" />
                <p>MongoDB</p>
              </button>
              <button>
                <SiExpress className="icon express" />
                <p>ExpressJs</p>
              </button>
              <button>
                <FaReact className="icon react" />
                <p>React</p>
              </button>
              <button>
                <FaNodeJs className="icon" />
                <p>NodeJs</p>
              </button>
            </div>
            <p className="infoProject">
              Aplicación web que permite retirar/depositar dinero como un agente
              bancario. También facilita al usuario ingresar y consultar sus
              movimientos e información financiera en tiempo real.
            </p>
            <div className="linksProject">
              <button className="github">
                <a
                  href="https://github.com/juanRCoder/Bank-Simulator"
                  target="_BLANK"
                >
                  <p>GitHub</p>
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="boxProject">
          <div className="boxImagen">
            <div className="boxImagen_img">
              <img src={projet_EBOOK} title="HVA" alt="HVA" />
            </div>
          </div>
          <div className="boxProjectInfo">
            <h1>E-Books</h1>
            <div className="boxTecnologias">
              <button>
                <SiMongodb className="icon mongo" />
                <p>MongoDB</p>
              </button>
              <button>
                <SiExpress className="icon express" />
                <p>ExpressJs</p>
              </button>
              <button>
                <FaReact className="icon react" />
                <p>React</p>
              </button>
              <button>
                <FaNodeJs className="icon" />
                <p>NodeJs</p>
              </button>
              <button>
                <FaSass className="icon scss" />
                <p>SCSS</p>
              </button>
            </div>
            <p className="infoProject">
              E-Books es un sistema de gestión para biblioteca que facilita la
              búsqueda de libros específicos, agilizando el trabajo del
              bibliotecario, entre otras funciones más.
            </p>
            <div className="linksProject">
              <button className="web">
                <a href="https://juanrcoder.github.io/E-Books/" target="_BLANK">
                  <p>Sitio Web</p>
                  <TfiWorld />
                </a>
              </button>
              <button className="github">
                <a href="https://github.com/juanRCoder/E-Books" target="_BLANK">
                  <p>GitHub</p>
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="boxProject">
          <div className="boxImagen">
            <div className="boxImagen_img">
              <img src={project_ST} title="ST" alt="ST" />
            </div>
          </div>
          <div className="boxProjectInfo">
            <h1>SolvThink: Resuelve/Piensa rapido</h1>
            <div className="boxTecnologias">
              <button>
                <SiAngular className="icon angular" />
                <p>Angular17</p>
              </button>
              <button>
                <SiTypescript className="icon typescript" />
                <p>TypeScript</p>
              </button>
              <button>
                <FaSass className="icon scss" />
                <p>SCSS</p>
              </button>
            </div>
            <p className="infoProject">
              Juego que desafía al usuario con operaciones básicas como sumar,
              restar, multiplicar y dividir, fomentando el desarrollo de
              habilidades matemáticas de forma entretenida y eficiente.
            </p>
            <div className="linksProject">
              <button className="web">
                <a href="https://solvthink.netlify.app/" target="_BLANK">
                  <p>Sitio Web</p>
                  <TfiWorld />
                </a>
              </button>
              <button className="github">
                <a
                  href="https://github.com/juanRCoder/SolvThink-Resuelve_rapido"
                  target="_BLANK"
                >
                  <p>GitHub</p>
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
