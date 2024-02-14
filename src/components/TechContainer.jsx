import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di'

import '../styles/components/techcontainer.sass'

const techs = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, message: "Linguagem de criação de estruturas de páginas web" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, message: "Linguagem de estilo utilizada para personalizar paginas web " },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, message: "JavaScript é uma linguagem de programação utilizada para criar interatividade e dinamismo em páginas da web" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, message: "Node.js é uma plataforma que executa código JavaScript no servidor" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, message: "Sistema de banco de dados relacional de código aberto para aplicativos web" },
    { id: "react", name: "React", icon: <DiReact />, message: "React é uma biblioteca JavaScript para construir interfaces de usuário interativas e eficientes" },
];

const TechContainer = () => {
    return (
        <section className='tech-container'>
            <h2>Tecnologias</h2>
            <div className='tech-grid'>
                {techs.map((tech) => (
                    <div className='tech-card' id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className='tech-info'>
                            <h3>{tech.name}</h3>
                            <p>{tech.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TechContainer
