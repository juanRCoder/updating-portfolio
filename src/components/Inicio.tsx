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
            <li><a href="https://www.linkedin.com/in/juan-ramirez-490b84271/" target="_BLANK">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/juanrcoder/" target="_BLANK">Instagram</a></li>
            <li><a href="https://github.com/juanRCoder" target="_BLANK">Github</a></li>
          </div>
        </div>
      </div>
      <div className="containerPerfil_Info">
        <h2>Sobre mi:</h2>
        <p>
          "Hola, soy Juan Guillermo Ramirez Montalvan, me encanta crear cosas
          nuevas, innovadoras y eficientes para el disfrute de la sociedad. Mis
          hobbies son dibujar de manera tradicional, escribir minihistorias,
          escuchar J-pop y jugar juegos móviles. Intento ser ordenado siempre,
          en casa, en mi lugar de trabajo y en mi vida personal. Trato de
          avanzar, aprender y repasar algo nuevo cada día.”
        </p>
      </div>
    </section>
  );
}

export default Inicio;
