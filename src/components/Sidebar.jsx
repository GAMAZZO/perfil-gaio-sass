
import Avatar from '../img/eu2.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import curriculo from '../files/curriculo.pdf'

import "../styles/components/sidebar.sass"



const sidebar = () => {
  return (<aside id="sidebar">
    <img src={Avatar} alt="Gaio Maso" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href={curriculo} download target="_blank" className="btn">Download currículo</a>
  </aside>
  )
}

export default sidebar