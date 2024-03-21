import "../styles/proyectos.scss";
import { FaGithub } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { FaCss3, FaReact, FaSass, FaNodeJs, FaPhp } from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiAngular,
  SiTypescript,
} from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import project_HVA from "../assets/project_HVA.png";
import projet_EBOOK from "../assets/project_EBOOK.png";
import project_ST from "../assets/project_ST.png";
import project_NP from "../assets/project_NotePad.png";
import project_TQ from "../assets/project_TQ.png";

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
              <img src={project_HVA} title="HotelVirtualAssitant" alt="HVA" />
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
              <img src={project_TQ} title="themeQuizz" alt="themeQuizz" />
            </div>
          </div>
          <div className="boxProjectInfo">
            <h1>Theme Quizz</h1>
            <div className="boxTecnologias">
              <button>
                <SiAngular className="icon angular" />
                <p>angular</p>
              </button>
              <button>
                <SiTypescript className="icon typescript" />
                <p>typescript</p>
              </button>
              <button>
                <FaSass className="icon scss" />
                <p>scss</p>
              </button>
            </div>
            <p className="infoProject">
              Desafía tu conocimiento con una aplicación que presenta una serie de
              preguntas divididas por dificultad y cuatro categorías principales. Aprende 
              algo nuevo cada dia diviertiendo en la aplicación.
            </p>
            <div className="linksProject">
              <button className="web">
                <a
                  href="https://theme-quiz.netlify.app/"
                  target="_BLANK"
                >
                  <p>WebSite</p>
                  <TfiWorld />
                </a>
              </button>
              <button className="github">
                <a
                  href="https://github.com/juanRCoder/Theme_Quizz"
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
              <img src={projet_EBOOK} title="E-Book" alt="HVA" />
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
              <img src={project_ST} title="SolThink" alt="ST" />
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
        <div className="boxProject">
          <div className="boxImagen">
            <div className="boxImagen_img">
              <img src={project_NP} title="NotePad" alt="ST" />
            </div>
          </div>
          <div className="boxProjectInfo">
            <h1>NotePad: Gestor de notas</h1>
            <div className="boxTecnologias">
              <button>
                <FaPhp className="icon php app" />
                <p>php</p>
              </button>
              <button>
                <DiJqueryLogo className="icon typescript" />
                <p>jQuery</p>
              </button>
              <button>
                <SiMysql className="icon mysql app" />
                <p>mySQL</p>
              </button>
              <button>
                <FaCss3 className="icon typescript" />
                <p>CSS</p>
              </button>
            </div>
            <p className="infoProject">
              Gestor de notas el cual realiza las operaciones basicas de gestión
              crear, leer, actualizar, eliminar notas en este caso, tambien
              tiene una autenticación de usuarios para mayor seguridad.
            </p>
            <div className="linksProject">
              <button className="web">
                <a
                  href="https://www.youtube.com/watch?v=FytfIC_IsOY"
                  target="_BLANK"
                >
                  <p>Video-Demo</p>
                  <TfiWorld />
                </a>
              </button>
              <button className="github">
                <a
                  href="https://github.com/juanRCoder/NotePad-note_management"
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
