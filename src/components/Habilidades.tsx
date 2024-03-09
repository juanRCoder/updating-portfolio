import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiFlask,
  SiMongoose,
  SiWebpack,
  SiAngular,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import "../styles/habilidades.scss";

function Habilidades() {
  return (
    <section className="habilidadesContainer" id="habilidades">
      <h1>Habilidades:</h1>
      <p>
        Tecnologias - Lenguajes - Herramientas y frameworks en constante
        aprendizaje:
      </p>
      <div className="gridContainer">
        <div>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              <FaHtml5 className="icon" title="HTML" />
            </a>
          </span>
          <p>
            <i>HTML5</i>
          </p>
          <div className="jsp"></div>
        </div>
        <div>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              <FaCss3 className="icon" title="CSS3" />
            </a>
          </span>
          <p>
            <i>CSS3</i>
          </p>
        </div>
        <div>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoJavascript className="icon" title="JavaScript" />
            </a>
          </span>
          <p>
            <i>JavaScript</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <FaReact className="icon" title="React" />
            </a>
          </span>
          <p>
            <i>React</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <FaSass className="icon" title="SCSS" />
            </a>
          </span>
          <p>
            <i>SCSS</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://jquery.com/" target="_blank" rel="noreferrer">
              <DiJqueryLogo
                style={{ transform: "scale(1.4)" }}
                className="icon"
                title="jQuery"
              />
            </a>
          </span>
          <p>
            <i>jQuery</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://git-scm.com/doc" target="_blank" rel="noreferrer">
              <FaGitAlt className="icon" title="GIT" />
            </a>
          </span>
          <p>
            <i>Git</i>
          </p>
        </div>
        <div>
          <span>
            <a
              href="https://www.python.org/doc/"
              target="_blank"
              rel="noreferrer"
            >
              <FaPython className="icon" title="python" />
            </a>
          </span>
          <p>
            <i>Python</i>
          </p>
        </div>
        <div>
          <span>
            <a
              href="https://flask.palletsprojects.com/es/main/quickstart/"
              target="_blank"
              rel="noreferrer"
            >
              <SiFlask className="icon" title="Flask" />
            </a>
          </span>
          <p>
            <i>Flask</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <SiMysql className="icon" title="mysql" />
            </a>
          </span>
          <p>
            <i>MySQL</i>
          </p>
        </div>
        <div>
          <span>
            <a
              href="https://www.mongodb.com/try/download/community"
              target="_blank"
              rel="noreferrer"
            >
              <SiMongodb className="icon" title="mongoDB" />
            </a>
          </span>
          <p>
            <i>MongoDB</i>
          </p>
        </div>

        <div>
          <span>
            <a
              href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
              target="_blank"
              rel="noreferrer"
            >
              <FaNodeJs className="icon" title="NodeJS" />
            </a>
          </span>
          <p>
            <i>NodeJS</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
              <SiExpress className="icon" title="ExpressJS" />
            </a>
          </span>
          <p>
            <i>ExpressJS</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://mongoosejs.com/" target="_blank" rel="noreferrer">
              <SiMongoose
                style={{ transform: "scale(1.4)" }}
                className="icon"
                title="Mongoose"
              />
            </a>
          </span>
          <p>
            <i>Mongoose</i>
          </p>
        </div>
        <div>
          <span>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaBootstrap className="icon" title="bootstrap" />
            </a>
          </span>
          <p>
            <i>Bootstrap</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <IoLogoFigma className="icon" title="figma" />
            </a>
          </span>
          <p>
            <i>Figma</i>
          </p>
        </div>
        <div>
          <span>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandVscode className="icon" title="VSCode" />
            </a>
          </span>
          <p>
            <i>VSCode</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
              <SiWebpack className="icon" title="webpack" />
            </a>
          </span>
          <p>
            <i>Webpack</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank" rel="noreferrer">
              <SiTypescript className="icon" title="typescript" />
            </a>
          </span>
          <p>
            <i>TypeScript</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://angular.dev/" target="_blank" rel="noreferrer">
              <SiAngular className="icon" title="Angular" />
            </a>
          </span>
          <p>
            <i>Angular17</i>
          </p>
        </div>
        <div>
          <span>
            <a href="https://www.php.net/" target="_blank" rel="noreferrer">
              <FaPhp
                className="icon"
                style={{ transform: "scale(1.4)" }}
                title="php"
              />
            </a>
          </span>
          <p>
            <i>PHP</i>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
