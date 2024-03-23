import Photo from "../assets/photo.png";
import "../styles/inicio.scss";

function Inicio() {
  return (
    <section id="inicio">
      <div className="containerPerfil">
        <div className="boxPerfil">
          <img src={Photo} alt="perfil" title="perfil" />
        </div>
        <div className="boxInfo">
          <h1>Juan Ramirez</h1>
          <h3>Desarrollador web</h3>
          <div className="contact">
            <li>
              <a
                href="https://www.linkedin.com/in/juan-ramirez-490b84271/"
                target="_BLANK"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/juanrcoder/" target="_BLANK">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/juanRCoder" target="_BLANK">
                Github
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="containerPerfil_Info">
        <h2>Sobre mi</h2>
        <p>
          ¡Hola! Soy Juan Ramirez, un apasionado desarrollador web con un
          enfoque en la creación de experiencias digitales memorables y
          funcionales. Con una sólida formación y experiencia en desarrollo web,
          me dedico a crear soluciones innovadoras que no solo cumplen con los
          requisitos técnicos, sino que también se destacan por su diseño
          estético y su usabilidad intuitiva. Mi portafolio refleja mi habilidad
          para trabajar en una variedad de proyectos, desde sitios web dinámicos
          hasta aplicaciones web complejas, utilizando tecnologías de vanguardia
          como HTML, CSS, JavaScript, y frameworks como React y Node.js. Estoy
          constantemente aprendiendo y actualizando mis habilidades para ofrecer
          resultados excepcionales en cada proyecto. ¡Bienvenido a mi mundo
          digital!
        </p>
      </div>
    </section>
  );
}

export default Inicio;
