import { FaReact, FaNodeJs, FaSass, FaGithub, FaEarthAmericas } from "react-icons/fa6";
import { SiTypescript, SiMongodb, SiExpress, SiAngular, SiTailwindcss } from "react-icons/si";
import HVA from '../../assets/project_HVA.webp';
import BS from '../../assets/project_BS.webp';
import EBOOK from '../../assets/project_EBOOK.webp';
import RIMBERIO from '../../assets/project_RIMBERIO.webp';
import ReactProjects from '../../assets/reactMiniProjects.webp';
import AngularProjects from '../../assets/angularMiniProjects.webp';
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
                            <a href="https://github.com/juanRCoder/Hotel_Virtual_Assitant" title="github"><FaGithub /></a>
                            <a href="https://juanrcoder.github.io/Project-Landing_HVA/" title="web">< FaEarthAmericas /></a>
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
                            <a href="https://github.com/juanRCoder/Bank-Simulator" title="github"><FaGithub /></a>
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
                            <a href="https://github.com/juanRCoder/E-Books" title="github"><FaGithub /></a>
                            <a href="https://juanrcoder.github.io/E-Books/" title="web">< FaEarthAmericas /></a>
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
                        <img src={AngularProjects} alt='AngularProjects' title='AngularProjects' />
                        <div className='outline'>
                            <a href="https://github.com/juanRCoder/Angular-mini-projects" title="github"><FaGithub /></a>
                            <a href="https://angular-mini-projects.vercel.app/" title="web">< FaEarthAmericas /></a>
                        </div>
                    </div>
                    <div className='techContainer'>
                        <span><SiAngular />angular17</span>
                        <span><SiTypescript />typescript</span>
                        <span><FaSass />scss</span>
                    </div>
                    <h1>Angular Mini Projects</h1>
                    <p>
                        Desarrollo de mini proyectos aplicando angular-scss-typescript, web site en constante actualizacion de proyectos.
                    </p>
                </div>
                <div className='aboutContainer_projects_box'>
                    <div className='imgContainer'>
                        <img src={RIMBERIO} alt='TQ' title='rimberio' />
                        <div className='outline'>
                            <a href="https://github.com/juanRCoder/Web-pages/tree/main/src/Rimberio" title="github"><FaGithub /></a>
                            <a href="https://web-pages-nu.vercel.app/rimberio" title="web">< FaEarthAmericas /></a>
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
                <div className='aboutContainer_projects_box'>
                    <div className='imgContainer'>
                        <img src={ReactProjects} alt='RMP' title='react-mini-projects' />
                        <div className='outline'>
                            <a href="https://github.com/juanRCoder/React-mini-projects" title="github"><FaGithub /></a>
                            <a href="https://react-mini-projects-2ao4.vercel.app/" title="web">< FaEarthAmericas /></a>
                        </div>
                    </div>
                    <div className='techContainer'>
                        <span><FaReact />ReacTSX</span>
                        <span><SiTypescript />TypeScript</span>
                        <span><SiTailwindcss />TailwindCSS</span>
                    </div>
                    <h1>React Mini Projects</h1>
                    <p>
                        Desarrollo de mini-proyectos con react-tailwind-typescript , web site en constante actualizacion de proyectos.
                    </p>
                </div>
            </section>
        </article>
    )
}

export default Projects;