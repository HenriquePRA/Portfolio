import React from 'react'
import sobreSvg from '../img/misc/sobre.svg'
import projetosSvg from '../img/misc/projects.svg'
import contatoSvg from '../img/misc/contato.svg'


const Navbar = () => {
    return (
        <div id="navbar">
            <div className="navContainer">
                <button>
                    <img src={sobreSvg} alt="about icon"></img>
                    <span>SOBRE</span>
                </button>
                <button>
                    <img src={projetosSvg} alt="projects icon"></img>
                    <span>PROJETOS</span>                    
                </button>
                <button>
                    <img src={contatoSvg} alt="contact icon"></img>
                    <span>CONTATO</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar;