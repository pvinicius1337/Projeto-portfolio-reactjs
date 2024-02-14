import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/paulo-vinicius-mota/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/pvinicius1337" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/pvinicius1337/?next=%2F" }
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className="social-btn" id={network.name} target="_blank" key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
}

export default SocialNetworks;

