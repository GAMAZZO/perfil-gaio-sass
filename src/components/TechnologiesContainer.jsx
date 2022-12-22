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
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text:"Tenho entendimento das tags mais usadas, e aprendo a medida que se necessita delas. Ainda estou aprendendo como usar de maneira eficiente, para melhor aproveitamento." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, text:"Ainda há muito de aprender e me exercitar ao usar em diferentes situações. Fico impressionado com o que o Css é capas de fazer, e a cada projeto novo é uma suspresa. Ainda irei ficar muitos anos aprendendo, porque realmente é muita coisa, e isso faz o Css ser muito completo." },
  { id: "sass", name: "Sass", icon: <TbBrandSass />, text:"Foi utilizado nesta página, eu ainda preciso treinar mais, para fazer códigos de estilização mais enxutos, e com menos poluição visual de códigos e pontuações." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text:"Já usei por uma boa quantidades de vezes em meus estudos, e a medida que vou aprendendo outras formas de fazer algo com o React, usando tecnologias diferentes, mais conhecimentos de comandos no terminal eu aprendo." },
  { id: "springboot", name: "Springboot", icon: <SiSpringboot />, text:"Usei muito pouco, tenho que fazer meu primeiro projeto ainda, mas a forma que ele deixa o Java mais limpo e rápido, é muito bom. E usando o spring.io, fica mais rápido para iniciar o projeto, como o Node.Js." },
  { id: "react", name: "React", icon: <DiReact />, text:"Esta página foi feito nela, já fiz pequenas coisas para estudo e dois projetos maiores, sendo um este, muito estudo ainda me aguarda para usar e abusar deste framework incrível." },
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

