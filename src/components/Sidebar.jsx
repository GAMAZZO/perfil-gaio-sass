import Avatar from '../img/eu.jpg'
import "../styles/components/sidebar.sass"

const sidebar = () => {
  return <aside id="sidebar">
    <p>imagem</p>
    <p className="title">Desenvolvedor</p>
    <p>redes sociais</p>
    <p>informações de contato</p>
    <a href="" className="btn">Download currículo</a>
  </aside>
}

export default sidebar