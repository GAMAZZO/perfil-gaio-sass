
import Avatar from '../img/eu.jpg'
import SocialNetworks from './SocialNetworks'

import "../styles/components/sidebar.sass"

const sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Gaio Maso" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <p>informações de contato</p>
    <a href="" className="btn">Download currículo</a>
  </aside>
}

export default sidebar