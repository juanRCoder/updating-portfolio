import { FaReact, FaGithub, FaEarthAmericas, FaVuejs } from "react-icons/fa6";
import { SiTypescript, SiAngular, SiTailwindcss } from "react-icons/si";
import GithubProfile from '../../assets/github-profile.png';
import TranslateApp from '../../assets/translate-app.webp';
import RIMBERIO from '../../assets/project_RIMBERIO.webp';
import TipAmountApp from '../../assets/tip-amount-app.png';
import CalculoFinanciero from '../../assets/calculo-financiero.png';
import Cvinter from '../../assets/cvinter.png';
import './Projectss.scss';

function Projects() {
    const projects = [
        {
            img: GithubProfile,
            title: 'Github Profile',
            github: 'https://github.com/juanRCoder/vue-projects-typescript-app/tree/main/src/projects/github-profile',
            website: 'https://vue-projects-r8hq.vercel.app/github-profile',
            description: 'Buscador de perfiles de github, en el cual puedes encontrar la informacion del usuario mediante el username en github.',
            tecnologias: [<FaVuejs />, <SiTypescript />, <SiTailwindcss />],
            names: ['Vue', 'TypeScript', 'TailwindCSS']
        },
        {
            img: TranslateApp,
            title: 'Translate app',
            github: 'https://github.com/juanRCoder/angular-projects/tree/main/src/app/translate-app',
            website: 'https://angular-mini-projects.vercel.app/translate-app',
            description: 'Traductor para textos en el cual puedes escoger entre tres idiomas español, inglés o francés.',
            tecnologias: [<SiAngular />, <SiTypescript />, <SiTailwindcss />],
            names: ['Angular', 'TypeScript', 'TailwindCSS']
        },
        {
            img: TipAmountApp,
            title: 'Tip Amount Calculator',
            github: 'https://github.com/juanRCoder/react-projects-typescript-app/tree/main/src/tipAmount',
            website: 'https://react-projects-2024.vercel.app/tip-amount',
            description: 'Calculadora de propinas para restaurantes en caso haya muchoas personas que quieran otorgar propinas',
            tecnologias: [<FaReact />, <SiTypescript />, <SiTailwindcss />],
            names: ['React', 'TypeScript', 'TailwindCSS']
        },
        {
            img: RIMBERIO,
            title: 'Landing Rimberio',
            github: 'https://github.com/juanRCoder/react-projects/tree/main/src/Pages/Rimberio',
            website: 'https://react-projects-2024.vercel.app/rimberio',
            description: 'Landing page de Rimberio, pasteleria, tienda de dulces, practicando tailwindCSS y reactTSX.',
            tecnologias: [<FaReact />, <SiTypescript />, <SiTailwindcss />],
            names: ['React', 'TypeScript', 'TailwindCSS']
        },
        {
            img: CalculoFinanciero,
            title: 'Calculo Financiero',
            github: 'https://github.com/juanRCoder/angular-projects/tree/main/src/app/calculo-financiero',
            website: 'https://angular-mini-projects.vercel.app/calculo-financiero',
            description: 'Pagina web con finalidad de mostrar ingresos, gastos y ahorro economicos de manera grafica y expresiva',
            tecnologias: [<SiAngular />, <SiTypescript />, <SiTailwindcss />],
            names: ['Angular', 'TypeScript', 'TailwindCSS']
        },
        {
            img: Cvinter,
            title: 'Cvinter',
            github: 'https://github.com/juanRCoder/angular-projects/tree/main/src/app/calculo-financiero',
            website: 'https://angular-mini-projects.vercel.app/calculo-financiero',
            description: 'Pagina web en la cual puedes generar tu propio Curriculum tomando como plantilla 5 modelos muy atraticvos para las empresas',
            tecnologias: [<FaReact />, <SiTypescript />, <SiTailwindcss />],
            names: ['React', 'TypeScript', 'TailwindCSS']
        },
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