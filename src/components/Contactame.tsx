import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/contactame.scss";

function Contactame() {
  return (
    <section className="contactameContainer" id="contactame">
      <h1>Contactamé</h1>
      <p>
        Conéctate conmigo a través de mis redes sociales, estoy ansioso por
        interactuar contigo y responder cualquier pregunta que puedas tener.
        <br />
        Encuéntrame en:
      </p>
      <div className="boxContact">
        <a href="mailto:guillecarck@gmail.com">
          <CgMail className="iconContact" />
        </a>

        <a href="https://www.instagram.com/juanrcoder/">
          <FaInstagram className="iconContact" />    
        </a>

        <a href="https://www.linkedin.com/in/juan-ramirez-490b84271/">
          <FaLinkedin className="iconContact" /> 
        </a>

        <a href="https://twitter.com/Yuan22Rm">
          <FaXTwitter className="iconContact" />
        </a>
      </div>
    </section>
  );
}

export default Contactame;
