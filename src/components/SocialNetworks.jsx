import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, text_link:"https://www.linkedin.com/in/gaioamazonasmaso/" },
    { name: "github", icon: <FaGithub />, text_link:"https://github.com/GAMAZZO", },
    { name: "instagram", icon: <FaInstagram />, text_link:"https://www.instagram.com/gaio_maso/" }, 
]

const SocialNetworks = () => {
  return(
    <section id="social-networks">

    {socialNetworks.map((network) => (
        <a href={network.text_link} target="_blank" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}

  </section>
  )
}

export default SocialNetworks