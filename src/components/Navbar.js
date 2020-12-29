import React from 'react'
import sobreSvg from '../img/misc/sobre.svg'
import projetosSvg from '../img/misc/projects.svg'
import contatoSvg from '../img/misc/contato.svg'


const Navbar = (props) => {
    
    const mouseOverNav = (e) => {
        if (!props.showproj) {
            const nav = e.currentTarget
            nav.style.width = '8.5rem'
            const botoes = nav.firstChild.childNodes
            botoes.forEach(btn => {
                btn.style.backgroundColor = '#32474a'
                btn.style.width = '8rem'
                btn.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
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
                    btn.style.boxShadow = 'none'
                    btn.style.width = '3.2rem'
                    btn.style.backgroundColor = 'transparent'
                    nav.style.width = '5rem'
                })
            }, 100)
        }
    }

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

    return (
        <div id="navbar"
            style={props.showproj ? {"left": "-5rem"} : {"left": "0"}}
            onMouseEnter={(e) => mouseOverNav(e)}
            onMouseLeave={(e) => mouseLeaveNav(e)}
        >
            <div className="navContainer">
                <div className="navBtn" onClick={() => scrollProfile()}>
                    <img src={sobreSvg} alt="about icon"></img>
                    <span className="navSpan">
                        SOBRE
                    </span>
                </div>
                <div className="navBtn" onClick={() => scrollProjects()}>
                    <img src={projetosSvg} alt="projects icon"></img>
                    <span className="navSpan">
                        PROJETOS
                    </span>
                </div>
                <div className="navBtn" onClick={() => scrollContact()}>
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