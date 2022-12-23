import {
  DiHtml5,
  DiCss3,
  DiJava,
  DiNodejsSmall,
  DiReact
} from 'react-icons/di'
import { SiSpringboot } from 'react-icons/si'

import "../styles/components/technologiescontainer.sass"


const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text:"Experiência adquirida por meio de projetos e cursos online, sempre visando a eficiência e otmização de código." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, text:"Experiência básica com a estilização de projetos próprios e modificações de outros utilizados a fim de estudo e torna-los responsivos, sempre visando um código limpo e ficiente." },
  { id: "java", name: "Java", icon: <DiJava />, text:"Somente o básico, falta experiência com implementações backend, somente testes pessoais e de estudo." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text:"Experiência básica por utilizar ao criar projetos backend, e comandos para funcionamneto da aplicação." },
  { id: "springboot", name: "Springboot", icon: <SiSpringboot />, text:"Pouca Experiência ao utiliza-lo a fins de estudo de novos frameworks." },
  { id: "react", name: "React", icon: <DiReact />, text:"Experiência básica, contudo, suficiente para um projeto completo de frontend, possuindo um entendimento geral deste framework." },
];




const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>

      <div className="technologies-grid">
        {technologies.map((tech) => (

          <div className="technology-card" id={tech.id} key={tech.id}>
            
            <div className="technology-info">
              <div className="h3-flex">
                <h3>{tech.icon}</h3>
                <h3 >{tech.name}</h3>
              </div>
              <p>{tech.text}</p>
            </div>
          </div>
          
        ))}
      </div>

    </section>
  )
}

export default TechnologiesContainer

