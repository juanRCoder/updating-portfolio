import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs, FaFigma, FaSass } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiJquery, SiPython, SiFlask, SiMysql, SiMongodb, SiExpress, SiAngular, SiTailwindcss } from "react-icons/si";

import './Skills.scss';

function Skills() {
    const skillsFrontend = [
        { icon: <FaHtml5 className="rIcon" />, text: 'HTML5' },
        { icon: <FaCss3Alt className="rIcon" />, text: 'CSS3' },
        { icon: <SiJavascript className="rIcon" />, text: 'JAVASCRIPT' },
        { icon: <SiTypescript className="rIcon" />, text: 'TYPESCRIPT' },
        { icon: <SiJquery className="rIcon" />, text: 'JQUERY' },
        { icon: <FaReact className="rIcon" />, text: 'REACT' },
        { icon: <SiAngular className="rIcon" />, text: 'ANGULAR17' },
        { icon: <FaFigma className="rIcon" />, text: 'FIGMA' },
        { icon: <FaSass className="rIcon" />, text: 'SCSS' },
        { icon: <SiTailwindcss className="rIcon" />, text: 'TAILWINDCSS' },
    ]
    const skillsBackend = [
        { icon: <FaNodeJs className="rIcon" />, text: 'NODE' },
        { icon: <SiExpress className="rIcon" />, text: 'EXPRESSJS' },
        { icon: <FaGitAlt className="rIcon" />, text: 'GIT' },
        { icon: <SiPython className="rIcon" />, text: 'PYTHON' },
        { icon: <SiFlask className="rIcon" />, text: 'FLASK' },

    ]
    const dataBases = [
        { icon: <SiMysql className="rIcon" />, text: 'MYSQL' },
        { icon: <SiMongodb className="rIcon" />, text: 'MONGODB' },
    ]
    return (
        <article className='aboutContainer'>
            <div className='aboutMe'>
                <h1>Habilidades</h1>
                <p>
                    Estas son mis habilidades aprendidas y conocimiento sólido y práctico en cada uno de ellos.
                    Mi compromiso con la excelencia no se detiene aquí; estoy constantemente actualizando mis habilidades y explorando nuevas áreas para seguir creciendo como profesional.
                </p>
                <h3 className="h3">Desarrollo Frontend</h3>
                <div className="gridContainer">
                    {skillsFrontend.map((skill, i) => (
                        <span key={i}>{skill.icon}<p>{skill.text}</p></span>
                    ))}
                </div>
                <h3 className="h3">Desarrollo Backend</h3>
                <div className="gridContainer">
                    {skillsBackend.map((skill, i) => (
                        <span key={i}>{skill.icon}<p>{skill.text}</p></span>
                    ))}
                </div>
                <h3 className="h3">Bases de datos</h3>
                <div className="gridContainer">
                    {dataBases.map((skill, i) => (
                        <span key={i}>{skill.icon}<p>{skill.text}</p></span>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default Skills;