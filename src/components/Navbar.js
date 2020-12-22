import React, {useState} from 'react'
import sobreSvg from '../img/misc/sobre.svg'
import projetosSvg from '../img/misc/projects.svg'
import contatoSvg from '../img/misc/contato.svg'


const Navbar = () => {
    
    const [tLock, setTlock] = useState(false);

    const setbtnStyleEnter = (e) => {
        if (!tLock) {
            const alvo = e.currentTarget
            alvo.style.backgroundColor = '#32474abe'
            alvo.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'            
        }
    }

    const setbtnStyleLeave = (e) => {
        if (!tLock) {
            const alvo = e.currentTarget
            alvo.style.backgroundColor = '#32474a'            
        }

    }

    const mouseOverNav = (e) => {
        if (!tLock) {
            setTlock(true)
            const nav = e.currentTarget
            nav.style.width = '8.5rem'        
            setTimeout(() => {
                const botoes = nav.firstChild.childNodes
                botoes.forEach(btn => {
                    btn.style.backgroundColor = '#32474a'
                    btn.style.width = '8rem'
                    btn.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
                    setTimeout(() => {
                        btn.lastChild.style.display = 'block'
                        btn.lastChild.style.opacity = '1'
                        setTlock(false)
                    }, 100);
                });
            }, 150);            
        }
    }

    const mouseLeaveNav = (e) => {
        if (!tLock) {
            setTlock(true)
            const nav = e.currentTarget
            setTimeout(() => {
                const botoes = nav.firstChild.childNodes
                botoes.forEach(btn => {
                    btn.lastChild.style.opacity = '0'
                    btn.lastChild.style.display = 'none'
                    setTimeout(() => {
                        btn.style.boxShadow = 'none'
                        btn.style.width = '3.2rem'
                        btn.style.backgroundColor = 'transparent'
                        nav.style.width = '5rem'
                        setTlock(false)
                    }, 100);
                })
            }, 150)            
        }

    }

    return (
        <div id="navbar"
            onMouseEnter={(e) => mouseOverNav(e)}
            onMouseLeave={(e) => mouseLeaveNav(e)}        
        >
            <div className="navContainer">
                <button
                    onMouseEnter={(e) => setbtnStyleEnter(e)}
                    onMouseLeave={(e) => setbtnStyleLeave(e)}
                >
                    <img src={sobreSvg} alt="about icon"></img>
                    <span className="navSpan">
                        SOBRE
                    </span>
                </button>
                <button
                    onMouseEnter={(e) => setbtnStyleEnter(e)}
                    onMouseLeave={(e) => setbtnStyleLeave(e)}
                >
                    <img src={projetosSvg} alt="projects icon"></img>
                    <span className="navSpan">
                        PROJETOS
                    </span>                    
                </button>
                <button
                    onMouseEnter={(e) => setbtnStyleEnter(e)}
                    onMouseLeave={(e) => setbtnStyleLeave(e)}
                >
                    <img src={contatoSvg} alt="contact icon"></img>
                    <span className="navSpan">
                        CONTATO
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Navbar;