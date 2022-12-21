
import Avatar from '../img/eu3.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import "../styles/components/sidebar.sass"

const sidebar = () => {
  return (<aside id="sidebar">
    <img src={Avatar} alt="Gaio Maso" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    < InformationContainer />
    <a href="" className="btn">Download currículo</a>
  </aside>
  )
}

export default sidebar