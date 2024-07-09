import './Contact.scss';
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <footer className='aboutContainer footerContainer'>
      <div className='aboutMe'>
        <h1>¡Trabajemos juntos!</h1>
        <p>¡Estoy listo para comenzar a trabajar en tu proyecto! Contáctame para coordinar y empezar a trabajar en equipo.</p>
      </div>
      <div className='aboutMe'>
        <a className='a' href="mailto:juanRamirezMontalvan@gmail.com">
          <CgMail className='img'/>
          <p className='texto'>guillecarck</p>
        </a>
      </div>

    </footer>
  )
}

export default Contact;