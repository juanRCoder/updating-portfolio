import { CgMail } from "react-icons/cg";
import './Contact.scss';

function Contact() {
  return (
    <footer>
        <p>Contactame:</p>
        <a href="mailto:guillecarck@gmail.com"><CgMail className="iconR"/><i>guillecarck@gmail.com</i></a>
    </footer>
  )
}

export default Contact;