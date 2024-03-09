import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./assets/logo.png";
import "./App.scss";
import { useState } from "react";

function App() {
  const [btnHamburger, setBtnHamburger] = useState(false);

  const handleClick = (): void => {
    setBtnHamburger(!btnHamburger);
  };

  return (
    <header>
      <div className="containerImage">
        <img src={Logo} alt="logo" title="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#inicio">Perfil</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#certificaciones">Certificaciones</a>
          </li>
          <li>
            <a href="#">Contactamé</a>
          </li>
          <li>
            <a href="#">CV</a>
          </li>
        </ul>
      </nav>
      <div className="boxHamburger">
        <GiHamburgerMenu className="btnHamburger" onClick={handleClick} />
        <div
          className="toogleNavbar"
          style={{ display: btnHamburger ? "block" : "none" }}
        >
          <ul>
            <li>
              <a href="#inicio" onClick={handleClick}>Inicio</a>
            </li>
            <li>
              <a href="#habilidades" onClick={handleClick}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#proyectos" onClick={handleClick}>Proyectos</a>
            </li>
            <li>
              <a href="#certificaciones">Certificaciones</a>
            </li>
            <li>
              <a href="#">Contactamé</a>
            </li>
            <li>
              <a href="#">CV</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default App;
