import React, { useState } from 'react'
import sobreSvg from '../img/misc/sobre.svg'
import projetosSvg from '../img/misc/projects.svg'
import contatoSvg from '../img/misc/contato.svg'


const Navbar = (props) => {

    const [mouseOverNavSt, setMouseOverNavSt] = useState(false)

    // controle de estilo e responsividade da navbar
    const mouseOverNav = (e) => {
        if (!props.showproj) {
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
    }

    const mouseLeaveNav = (e) => {
        if (!props.showproj) {
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
    }

    // scroll automatico 
    const scrollProfile = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    const scrollProjects = () => {
        let projs_div = document.querySelector(".Proj_container");
        if (window.innerHeight > projs_div.offsetHeight) {
            projs_div.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        } else {
            projs_div.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }

    const scrollContact = () => {
        let cont_div = document.querySelector(".Contact");
        if (window.innerHeight > cont_div.offsetHeight) {
            cont_div.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        } else {
            cont_div.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }
    
    const destacar = {
        'backgroundColor': '#455a64',
        'boxShadow': '0 2px 6px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(255, 255, 255, 0.3)'
    }

    return (
        <div id="navbar"
            style={props.showproj ? {"display": "none"} : {"display": "flex"}}
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