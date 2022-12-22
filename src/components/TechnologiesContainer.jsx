import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'
import { SiSpringboot } from 'react-icons/si'
import { TbBrandSass } from 'react-icons/tb'

import "../styles/components/technologiescontainer.sass"

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text:"Tenho entendimento das mais usadas, e aprendo a medida que se necessita das outras. Ainda estou aprendendo como usar de maneira eficiente, para melhor aproveitamento " },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "sass", name: "Sass", icon: <TbBrandSass /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "springboot", name: "Springboot", icon: <SiSpringboot /> },
  { id: "react", name: "React", icon: <DiReact /> },
];




const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>

      <div className="technologies-grid">
        {technologies.map((tech) => (

          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">

              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
          
        ))}
      </div>

    </section>
  )
}

export default TechnologiesContainer