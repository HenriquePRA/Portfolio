import React, { useState, useEffect } from 'react'
import { dealNavigate } from './common'
import { useNavigate } from "react-router-dom";
import sobreSvg from '../../img/misc/sobre.svg'
import projetosSvg from '../../img/misc/projects.svg'
import contatoSvg from '../../img/misc/contato.svg'
import languageSvg from '../../img/misc/language.svg'
import returnSvg from '../../img/misc/return.svg'
import lampSvg from '../../img/misc/lamp.svg'
import PT_Navbar from './texts/PT_Navbar.json';
import EN_Navbar from './texts/EN_Navbar.json';


// Retorna um módulo de navbar lateral com efeitos suaves, recebe a propriedade blocoatual
// para aplcação de estilos e depende da existencia das divs .Proj_container e contact para
// uso das funções de scroll sem erros

const Navbar = (props) => {

    const navigate = useNavigate();

    const [showLang, setShowLang] = useState(false);
    const [componentText, setComponentText] = useState({})

    // function responsible for redirecting the page
    const transictionNavigate = () => {
        props.setProjTransiction(true)
        setTimeout(() => {
            props.setOnTransition(true)
            dealNavigate(props.isRedirect, navigate)
        }, 300);
    } 

    // function responsible for ascending to the top of the page
    const scrollProfile = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // function responsible for scrolling to the beginning  of the div ".Projects"
    const scrollProjects = () => {
        let projs_div = document.querySelector(".Projects");
        if (window.innerHeight > projs_div.offsetHeight) {
            projs_div.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        } else {
            projs_div.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }

    // function responsible for scrolling to the beginning of the div ".Contact"
    const scrollContact = () => {
        let cont_div = document.querySelector(".Contact");
        if (window.innerHeight > cont_div.offsetHeight) {
            cont_div.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        } else {
            cont_div.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }

    // styles applied on the divs ".langBtn" to make them visible
    const showLangBtn = {
        'display': 'flex',
        'opacity': '1',
        'height': 'auto',
    }

    const showLangText = {
        'display': 'block',
    }

    // function responsible to hide smoothly all the divs ".langBtn" 
    const hideLangBtn = () => {
        const btn = document.querySelectorAll(".langBtn")
        btn.forEach(langBtn => {
            const txt = langBtn.childNodes
            txt.forEach(txt => {
                txt.style.opacity = 0;
            })
        })
        setTimeout(() => {
            setShowLang(false)
        }, 300); 
    }
    
    // function responsible to show smoothly all the divs ".langBtn"
    const setShowLangBtn = () => {
        const btn = document.querySelectorAll(".langBtn")
        btn.forEach(langBtn => {
            const txt = langBtn.childNodes
            txt.forEach(txt => {
                txt.style.opacity = 1;
            })
        })
        setShowLang(true)
    }

    // functions for timed language change
    const setLang = (name) => {
        props.setOnTransition(true)
        setTimeout(() => {
            props.setLang(name)
        }, 300);
    }

    // only on main page, style responsible to highlight the part of the page where the user is located
    const destacar = {
        'backgroundColor': '#405c79',
    }

    // effect responsible for defining and switching the page language
    useEffect(() => {
        switch (props.lang) {
            case "PT":
                setComponentText(PT_Navbar);
                break;
            default:
                setComponentText(EN_Navbar);
        }
    }, [props.lang])

    
    return (
        <div id="navbar"
            style={props.pageLoad ? {"opacity":"0"} : {"opacity":"1"}}
        >
            {props.page === "main" ?
                <div 
                    className="navBtn" 
                    onClick={() => scrollProfile()}
                    style={(props.blocoatual === 'sobre') ? destacar : null}
                >
                    <img src={sobreSvg} alt="about"></img>
                    <span className="navSpan" style={{"margin":"auto .5rem auto 1rem"}}>
                        {componentText.about}
                    </span>
                </div>
            : null }

            {props.page === "main" ?
                <div 
                    className="navBtn" 
                    onClick={() => scrollProjects()}
                    style={(props.blocoatual === 'projetos') ? destacar : null}
                >
                    <img src={projetosSvg} alt="projects"></img>
                    <span className="navSpan">
                        {componentText.projects}
                    </span>
                </div>
            : null }

            {props.page === "main" ?
                <div 
                    className="navBtn"
                    onClick={() => scrollContact()}
                    style={(props.blocoatual === 'contato') ? destacar : null}
                >
                    <img src={contatoSvg} alt="contact"></img>
                    <span className="navSpan">
                        {componentText.contact}
                    </span>
                </div>
            : null }

            {props.page === "proj" ?
                <div 
                    className="navBtn retornar"
                    onClick={() => transictionNavigate()}
                >
                    <img src={returnSvg} alt="return"></img>
                    <span className="navSpan">
                        {props.isRedirect ? componentText.return : componentText.goToPort}
                    </span>
                </div>
            : null }

            <div 
                className='langBlock' 
                onClick={() => {setShowLangBtn()}}
                onMouseLeave={() => {hideLangBtn()}}
            >
                {props.lang !== "EN" ?
                    <div 
                        className="navBtn langBtn" 
                        style={showLang ? showLangBtn : null}
                        onClick={() => {setLang("EN")}}
                    >
                        <h3 style={showLang ? showLangText : null}>EN</h3>
                        <span 
                            className='navSpan'
                            style={showLang ? showLangText : null}
                        >
                            {componentText.enBtn}
                        </span>
                    </div>
                : null }
                {props.lang !== "PT" ?
                    <div 
                        className="navBtn langBtn" 
                        style={showLang ? showLangBtn : null}
                        onClick={() => {setLang("PT")}}
                    >
                        <h3 style={showLang ? showLangText : null}>PT</h3>
                        <span 
                            className='navSpan'
                            style={showLang ? showLangText : null}
                        >
                            {componentText.ptBtn}
                        </span>
                    </div>
                : null }
                <div className="navSpamBtn">
                    <img src={languageSvg} alt="linguagem icon"></img>
                    <span className="navSpan">
                        {componentText.language}
                    </span>
                </div>
            </div>
            <div 
                className="navBtn configBtn"
                onClick={() => props.setDarkMode(!props.darkMode)}
            >
                <img src={lampSvg} alt="light/dark icon" className="noSpanExtended"></img>
            </div>
        </div>
    )
    
}

export default Navbar;