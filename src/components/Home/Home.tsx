import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import photo from '../../assets/photo.webp';
import pdf from '../../assets/JuanRamirez_CV.pdf';
import './Home.scss';

function Perfil() {
    const icons = [
        { to: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', icon: <FaLinkedin />, title: "linkedin"},
        { to: 'https://github.com/juanRCoder', icon: <FaGithub />, title: "github"},
    ];
    return (
        <article className='perfilContainer'>
            <section className='perfilContainer_box'>
                <div className='perfilContainer_box_photo'>
                    <img src={photo} alt='photo' title='juanRamirez' />
                </div>
                <h1 className='perfilContainer_box_name'>Juan Ramirez</h1>
                <h1 className='perfilContainer_box_job'>Desarrollador Web</h1>
                <div className='perfilContainer_box_redes'>
                    {icons.map((icon, i) => (
                        <a href={icon.to} target="_BLANK" className="perfilContainer_box_redes_span" key={i} title={icon.title}>{icon.icon}</a>
                    ))}
                    <a href={pdf} download className="perfilContainer_box_redes_span" title="CV" style={{color: '#000'}}><IoDocumentText /></a>
                </div>
            </section>
        </article>
    )
}

export default Perfil