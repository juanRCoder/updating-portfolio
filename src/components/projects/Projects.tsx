import { FaReact, FaNodeJs, FaSass, FaGithub, FaEarthAmericas } from "react-icons/fa6";
import { SiTypescript, SiMongodb, SiExpress, SiAngular, SiTailwindcss } from "react-icons/si";
import HVA from '../../assets/project_HVA.webp';
import BS from '../../assets/project_BS.webp';
import EBOOK from '../../assets/project_EBOOK.webp';
import ST from '../../assets/project_ST.webp';
import TQ from '../../assets/project_TQ.webp';
import RIMBERIO from '../../assets/project_RIMBERIO.webp';
import './Projectss.scss';

function Projects() {
    return (
        <article className='aboutContainer'>
            <div className='aboutMe'>
                <h1>Proyectos</h1>
                <p>
                    Proyectos actuales en constante actualizacion, mejorando la calidad y eficencia.
                </p>
            </div>
            <section className='aboutContainer_projects'>
                <div className='aboutContainer_projects_box'>
                    <div className='imgContainer'>
                        <img src={HVA} alt='HVA' title='Hotel Virtual Assitant' />
                        <div className='outline'>
                            <a href="https://github.com/juanRCoder/Hotel_Virtual_Assitant" title="github"><FaGithub/></a>
                            <a href="https://juanrcoder.github.io/Project-Landing_HVA/" title="web">< FaEarthAmericas/></a>
                        </div>
                    </div>
                    <div className='techContainer'>
                        <span><SiMongodb />mongoDB</span>
                        <span><SiExpress />expressJs</span>
                        <span><FaReact />reactJS</span>
                        <span><FaNodeJs />nodeJs</span>
                    </div>
                    <h1>Hotel Virtual Assitant</h1>
                    <p>
                        Asistente virtual hotelero donde el usuario puede consultar diferentes necesidades tenga en su estadia en el hotel, reduce el tiempo de respuesta.
                    </p>
                </div>
                <div className='aboutContainer_projects_box'>
                    <div className='imgContainer'>
                        <img src={BS} alt='BS' title='Bank Simulator' />
                        <div className='outline'>
                            <a href="https://github.com/juanRCoder/Bank-Simulator" title="github"><FaGithub/></a>
                        </div>
                    </div>
                    <div className='techContainer'>
                        <span><SiMongodb />mongoDB</span>
                        <span><SiExpress />expressJs</span>
                        <span><FaReact />reactJS</span>
                        <span><FaNodeJs />nodeJs</span>
                    </div>
                    <h1>Bank Simulator</h1>
                    <p>
                        Simulador bancaria capaz de realizar transferencias, retiro, deposito, las operacions basicoas y tambien revisar la informacion bancaria del usuario.
                    </p>
                </div>
                <div className='aboutContainer_projects_box'>
                    <div className='imgContainer'>
                        <img src={EBOOK} alt='EBOOK' title='E-Books' />
                        <div className='outline'>
                            <a href="https://github.com/juanRCoder/E-Books" title="github"><FaGithub/></a>
                            <a href="https://juanrcoder.github.io/E-Books/" title="web">< FaEarthAmericas/></a>
                        </div>
                    </div>
                    <div className='techContainer'>
                        <span><SiMongodb />mongoDB</span>
                        <span><SiExpress />expressJs</span>
                        <span><FaReact />reactJS</span>
                        <span><FaNodeJs />nodeJs</span>
                    </div>
                    <h1>E-Books</h1>
                    <p>
                        Sistema de gestion para biblioteca (e-books), puedes consultar un libro en especifico y tambien darle un seguimiento a los libros prestados.
                    </p>
                </div>
                <div className='aboutContainer_projects_box'>
                    <div className='imgContainer'>
                        <img src={ST} alt='ST' title='SolvThink' />
                        <div className='outline'>
                            <a href="https://github.com/juanRCoder/SolvThink-Resuelve_rapido" title="github"><FaGithub /></a>
                            <a href="https://solvthink.netlify.app/" title="web">< FaEarthAmericas /></a>
                        </div>
                    </div>
                    <div className='techContainer'>
                        <span><SiAngular />angular17</span>
                        <span><SiTypescript />typescript</span>
                        <span><FaSass />scss</span>
                    </div>
                    <h1>SolvThink</h1>
                    <p>
                        Aplicativo donde puedes resolver operaciones basicas de matematicas, asi puedes mejorar tu pensamiento logico con las matematicas del dia a dia.
                    </p>
                </div>
                <div className='aboutContainer_projects_box'>
                    <div className='imgContainer'>
                        <img src={TQ} alt='TQ' title='theme question' />
                        <div className='outline'>
                            <a href="https://github.com/juanRCoder/Theme_Quizz" title="github"><FaGithub /></a>
                            <a href="https://theme-quiz.netlify.app/" title="web">< FaEarthAmericas /></a>
                        </div>
                    </div>
                    <div className='techContainer'>
                        <span><FaSass />scss</span>
                        <span><FaReact />reactTS</span>
                        <span><SiTypescript />typescript</span>
                    </div>
                    <h1>Theme Question</h1>
                    <p>
                        Aplicativo web donde podras resolveras distintas preguntas de 4 categorias, diviertete y aprende algo nuevo con este aplicativo divertido.
                    </p>
                </div>
                <div className='aboutContainer_projects_box'>
                    <div className='imgContainer'>
                        <img src={RIMBERIO} alt='TQ' title='rimberio' />
                        <div className='outline'>
                            <a href="https://github.com/juanRCoder/pageWeb-rimberio" title="github"><FaGithub /></a>
                            <a href="https://page-web-rimberio.vercel.app/" title="web">< FaEarthAmericas /></a>
                        </div>
                    </div>
                    <div className='techContainer'>
                        <span><FaReact />reactTS</span>
                        <span><SiTailwindcss />TailwindCSS</span>
                    </div>
                    <h1>Landing Rimberio</h1>
                    <p>
                        Landing page de Rimberio, pasteleria, tienda de dulces, practicando tailwindCSS y reactTSX.
                    </p>
                </div>
            </section>
        </article>
    )
}

export default Projects;