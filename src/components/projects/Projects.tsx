import { FaReact, FaSass, FaGithub, FaEarthAmericas, FaVuejs } from "react-icons/fa6";
import { SiTypescript, SiAngular, SiTailwindcss } from "react-icons/si";
import HVA from '../../assets/github-profile.png';
import BS from '../../assets/project_BS.webp';
import RIMBERIO from '../../assets/project_RIMBERIO.webp';
import ReactProjects from '../../assets/react_mini_projects.webp';
import AngularProjects from '../../assets/angular_mini_projects.webp';
import './Projectss.scss';

function Projects() {
    const projects = [
        {
            img: HVA,
            title: 'Github Profile',
            github: 'https://github.com/juanRCoder/Hotel_Virtual_Assitant',
            website: 'https://vue-projects-r8hq.vercel.app/github-profile',
            description: 'Buscador de perfiles de github, en el cual puedes encontrar la informacion del usuario mediante el username en github.',
            tecnologias: [<FaVuejs />, <SiTailwindcss />, <SiTypescript />],
            names: ['Vue', 'TailwindCSS', 'TypeScript']
        },
        {
            img: BS,
            title: 'Translate app',
            github: 'https://github.com/juanRCoder/angular-projects/tree/main/src/app/translate-app',
            website: 'https://angular-mini-projects.vercel.app/translate-app',
            description: 'Traductor para textos en el cual puedes escoger entre tres idiomas español, inglés o francés.',
            tecnologias: [<SiAngular />, <SiTypescript />, <FaSass />],
            names: ['Angular', 'TypeScript', 'SCSS']
        },
        {
            img: AngularProjects,
            title: 'Angular Mini Projects',
            github: 'https://github.com/juanRCoder/Angular-mini-projects',
            website: 'https://angular-mini-projects.vercel.app/',
            description: 'Desarrollo de mini proyectos aplicando angular-scss-typescript, web site en constante actualizacion de proyectos.',
            tecnologias: [<SiAngular />, <SiTypescript />, <FaSass />],
            names: ['Angular', 'TypeScript', 'SCSS']
        },
        {
            img: RIMBERIO,
            title: 'Landing Rimberio',
            github: 'https://github.com/juanRCoder/react-projects/tree/main/src/Pages/Rimberio',
            website: 'https://react-projects-2024.vercel.app/rimberio',
            description: 'Landing page de Rimberio, pasteleria, tienda de dulces, practicando tailwindCSS y reactTSX.',
            tecnologias: [<FaReact />, <SiTailwindcss />],
            names: ['ReactTSX', 'TailwindCSS']
        },
        {
            img: ReactProjects,
            title: 'React Mini Projects',
            github: 'https://github.com/juanRCoder/React-mini-projects',
            website: 'https://react-projects-2024.vercel.app/',
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
                                        ? <a href={project.website} title="web" target="_BLANK">< FaEarthAmericas /></a>
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