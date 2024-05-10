import { FaReact, FaNodeJs, FaSass, FaGithub, FaEarthAmericas } from "react-icons/fa6";
import { SiTypescript, SiMongodb, SiExpress, SiAngular, SiTailwindcss } from "react-icons/si";
import HVA from '../../assets/project_HVA.webp';
import BS from '../../assets/project_BS.webp';
import EBOOK from '../../assets/project_EBOOK.webp';
import RIMBERIO from '../../assets/project_RIMBERIO.webp';
import ReactProjects from '../../assets/react_mini_projects.webp';
import AngularProjects from '../../assets/angular_mini_projects.webp';
import './Projectss.scss';

function Projects() {
    const projects = [
        {
            img: HVA,
            title: 'Hotel Virtual Assitant',
            github: 'https://github.com/juanRCoder/Hotel_Virtual_Assitant',
            website: 'https://juanrcoder.github.io/Project-Landing_HVA/',
            description: 'Asistente virtual hotelero donde el usuario puede consultar diferentes necesidades tenga en su estadia en el hotel, reduce el tiempo de respuesta.',
            tecnologias: [<SiMongodb />, <SiExpress />, <FaReact />, <FaNodeJs />],
            names: ['MongoDB', 'ExpressJS', 'ReactJSX', 'NodeJS']
        },
        {
            img: BS,
            title: 'Banks Simulator',
            github: 'https://github.com/juanRCoder/Bank-Simulator',
            website: '',
            description: 'Simulador bancaria capaz de realizar transferencias, retiro, deposito, las operacions basicoas y tambien revisar la informacion bancaria del usuario.',
            tecnologias: [<SiMongodb />, <SiExpress />, <FaReact />, <FaNodeJs />],
            names: ['MongoDB', 'ExpressJS', 'ReactJSX', 'NodeJS']
        },
        {
            img: EBOOK,
            title: 'E-Books',
            github: 'https://github.com/juanRCoder/E-Books',
            website: 'https://juanrcoder.github.io/E-Books/',
            description: 'Sistema de gestion para biblioteca (e-books), puedes consultar un libro en especifico y tambien darle un seguimiento a los libros prestados.',
            tecnologias: [<SiMongodb />, <SiExpress />, <FaReact />, <FaNodeJs />],
            names: ['MongoDB', 'ExpressJS', 'ReactJSX', 'NodeJS']
        },
        {
            img: AngularProjects,
            title: 'Angular Mini Projects',
            github: 'https://github.com/juanRCoder/Angular-mini-projects',
            website: 'https://angular-mini-projects.vercel.app/',
            description: 'Desarrollo de mini proyectos aplicando angular-scss-typescript, web site en constante actualizacion de proyectos.',
            tecnologias: [<SiAngular />, <SiTypescript />, <FaSass />],
            names: ['Angular17', 'TypeScript', 'SCSS']
        },
        {
            img: RIMBERIO,
            title: 'Landing Rimberio',
            github: 'https://github.com/juanRCoder/Web-pages/tree/main/src/Rimberio',
            website: 'https://web-pages-nu.vercel.app/rimberio',
            description: 'Landing page de Rimberio, pasteleria, tienda de dulces, practicando tailwindCSS y reactTSX.',
            tecnologias: [<FaReact />, <SiTailwindcss />],
            names: ['ReactTSX', 'TailwindCSS']
        },
        {
            img: ReactProjects,
            title: 'React Mini Projects',
            github: 'https://github.com/juanRCoder/React-mini-projects',
            website: 'https://react-mini-projects-2ao4.vercel.app/',
            description: 'Desarrollo de mini-proyectos con react-tailwind-typescript , web site en constante actualizacion de proyectos.',
            tecnologias: [<FaReact />, <SiTypescript />, <SiTailwindcss />],
            names: ['ReactTSX', 'TypeScript', 'TailwindCSS']
        }
    ]
    return (
        <article className='aboutContainer'>
            <div className='aboutMe'>
                <h1>Proyectos</h1>
                <p>
                    Proyectos actuales en constante actualizacion, mejorando la calidad y eficencia.
                </p>
            </div>
            <section className='aboutContainer_projects'>
                {projects.map((project, i) => 
                        <div key={i} className='aboutContainer_projects_box'>

                            <div className='imgContainer'>
                                <img src={project.img} alt={project.title} title={project.title} />
                                <div className='outline'>
                                    <a href={project.github} title="github"><FaGithub /></a>
                                    {project.website !== '' 
                                        ? <a href={project.website} title="web">< FaEarthAmericas /></a>
                                        : ''
                                    }
                                </div>
                            </div>
                            <div className='techContainer'>
                                <span>{project.tecnologias[0]}{project.names[0]}</span>
                                <span>{project.tecnologias[1]}{project.names[1]}</span>
                                <span>{project.tecnologias[2]}{project.names[2]}</span>
                                <span>{project.tecnologias[3]}{project.names[3]}</span>
                            </div>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                    )}
            </section>
        </article>
    )
}

export default Projects;