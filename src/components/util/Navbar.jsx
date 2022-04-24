import React, { useState } from 'react'
import sobreSvg from '../../img/misc/sobre.svg'
import projetosSvg from '../../img/misc/projects.svg'
import contatoSvg from '../../img/misc/contato.svg'

// Retorna um módulo de navbar lateral com efeitos suaves, recebe a propriedade blocoatual
// para aplcação de estilos e depende da existencia das divs .Proj_container e contact para
// uso das funções de scroll sem erros

const Navbar = (props) => {

    const [mouseOverNavSt, setMouseOverNavSt] = useState(false)

    // Função de efeito estético responsável por alterar o estilo da navbar e de cada
    // botão nela através da alteração direta de estilos e classes do elemento
    const mouseOverNav = (e) => {
        const nav = e.currentTarget
        setMouseOverNavSt(true)
        const botoes = nav.firstChild.childNodes
        botoes.forEach(btn => {
            btn.className = "navBtn overNavBtn";
            setTimeout(() => {
                btn.lastChild.style.display = 'block'
                btn.lastChild.style.opacity = '1'
            }, 100);
        }, 100);
    }

    // Função de efeito estético responsável por alterar o estilo da navbar e de cada
    // botão nela através da alteração direta de estilos e classes do elemento
    const mouseLeaveNav = (e) => {
        const nav = e.currentTarget
        setTimeout(() => {
            const botoes = nav.firstChild.childNodes
            botoes.forEach(btn => {
                btn.lastChild.style.opacity = '0'
                btn.lastChild.style.display = 'none'
                btn.className = "navBtn outNavBtn";
                setMouseOverNavSt(false)
            })
        }, 100)
    }

    // Função reponsável pelo scroll suave ao topo da página
    const scrollProfile = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // Função responsável pelo scrol suave ao inicio da div .Proj_container
    const scrollProjects = () => {
        let projs_div = document.querySelector(".Proj_container");
        if (window.innerHeight > projs_div.offsetHeight) {
            projs_div.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        } else {
            projs_div.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }

    // Função responsável pelo scrol suave ao inicio da div .Contact
    const scrollContact = () => {
        let cont_div = document.querySelector(".Contact");
        if (window.innerHeight > cont_div.offsetHeight) {
            cont_div.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        } else {
            cont_div.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }
    
    // Conjunto de propriedades usados para destacar o botão ligado a área do site
    // ao qual o usuário se encontra
    const destacar = {
        'backgroundColor': '#455a64',
        'boxShadow': '0 2px 6px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.3)'
    }

    return (
        <div id="navbar"
            className={mouseOverNavSt ?  "navBarExpandida" : "navBarOculta"}
            onMouseEnter={(e) => mouseOverNav(e)}
            onMouseLeave={(e) => mouseLeaveNav(e)}
        >
            <div className="navContainer">
                <div 
                    className="navBtn" 
                    onClick={() => scrollProfile()}
                    style={(props.blocoatual === 'sobre') ? destacar : null}
                >
                    <img src={sobreSvg} alt="about icon"></img>
                    <span className="navSpan" style={{"margin":"auto .5rem auto 1rem"}}>
                        SOBRE
                    </span>
                </div>
                <div 
                    className="navBtn" 
                    onClick={() => scrollProjects()}
                    style={(props.blocoatual === 'projetos') ? destacar : null}
                >
                    <img src={projetosSvg} alt="projects icon"></img>
                    <span className="navSpan">
                        PROJETOS
                    </span>
                </div>
                <div 
                    className="navBtn" 
                    onClick={() => scrollContact()}
                    style={(props.blocoatual === 'contato') ? destacar : null}
                >
                    <img src={contatoSvg} alt="contact icon"></img>
                    <span className="navSpan">
                        CONTATO
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;