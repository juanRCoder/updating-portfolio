import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs, FaBootstrap, FaFigma, FaSass } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiJquery, SiPython, SiFlask, SiMysql, SiMongodb, SiExpress, SiAngular, SiCanva } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

import './Skills.scss';

function Skills() {
    const skills = [
        { icon: <FaHtml5 className="rIcon" />, text: 'HTML5' },
        { icon: <FaCss3Alt className="rIcon" />, text: 'CSS3' },
        { icon: <SiJavascript className="rIcon" />, text: 'javaScript' },
        { icon: <SiTypescript className="rIcon" />, text: 'typeScript' },
        { icon: <SiJquery className="rIcon" />, text: 'jQuery' },
        { icon: <FaGitAlt className="rIcon" />, text: 'git' },
        { icon: <SiPython className="rIcon" />, text: 'python' },
        { icon: <SiFlask className="rIcon" />, text: 'flask' },
        { icon: <SiMysql className="rIcon" />, text: 'MySQL' },
        { icon: <SiMongodb className="rIcon" />, text: 'mongoDB' },
        { icon: <FaReact className="rIcon" />, text: 'react' },
        { icon: <FaNodeJs className="rIcon" />, text: 'nodeJS' },
        { icon: <SiExpress className="rIcon" />, text: 'expressJS' },
        { icon: <SiAngular className="rIcon" />, text: 'angular17' },
        { icon: <SiCanva className="rIcon" />, text: 'canvas' },
        { icon: <FaBootstrap className="rIcon" />, text: 'bootstrap' },
        { icon: <FaFigma className="rIcon" />, text: 'figma' },
        { icon: <TbBrandVscode className="rIcon" />, text: 'vsCode' },
        { icon: <FaSass className="rIcon" />, text: 'scss' },
    ]
    return (
        <article className='aboutContainer'>
            <div className='aboutMe'>
                <h1>Habilidades</h1>
                <p>
                    Estas son mis habilidades aprendidas y conocimiento sólido y práctico en cada uno de ellos.
                    Mi compromiso con la excelencia no se detiene aquí; estoy constantemente actualizando mis habilidades y explorando nuevas áreas para seguir creciendo como profesional.
                </p>
                <div className="gridContainer">
                    {skills.map((skill, i) => (
                        <span key={i}>{skill.icon}<p>{skill.text}</p></span>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default Skills;