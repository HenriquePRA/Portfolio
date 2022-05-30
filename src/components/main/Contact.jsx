import React, { useState, useEffect } from 'react'

import EN_Contact from './texts/EN_Contact.json';
import PT_Contact from './texts/PT_Contact.json';

import WhatsIcon from '../../img/misc/whatsapp.svg'
import EmailIcon from '../../img/misc/email.svg'
import Github from '../../img/tools/icons/github.svg';
import Linkedin from '../../img/misc/linkedin.svg';

const Contact = (props) => {

    const [componentText, setComponentText] = useState({});

    const redirect = (link) => {
        setTimeout(() => {
            props.setOnTransition(true)
        }, 250);
        setTimeout(() => {
            window.location.href = link
        }, 400);
    } 

    // effect responsible for defining and switching the page language
    useEffect(() => {
        switch (props.lang) {
            case "PT":
                setComponentText(PT_Contact);
                break;
            default:
                setComponentText(EN_Contact);
        }
    }, [props.lang])

    const copyBtn = (e, cls) => {
        // copia o email
        const email = document.querySelector(cls)
        let aux = document.createElement("input")
        aux.setAttribute("value", email.innerHTML)
        document.body.appendChild(aux)
        aux.select()
        document.execCommand("copy")
        document.body.removeChild(aux)

        // aplica estilos no botão
        const botao = e.currentTarget
        botao.style.backgroundColor = "#4caf50";
        botao.innerHTML = "<span>COPIADO !</span>"

        setTimeout(() => {
            botao.innerHTML = "<span>COPIAR</span>"
            botao.removeAttribute('style');
        }, 1500);
    }

    return (
        <div 
            className = {props.darkMode ? "Contact dark-contact" : "Contact light-contact"}
            style={props.pageLoad ? {"opacity":"0"} : {"opacity":"1"}}
        >
            <div className="contactHeader">
                <h3>{componentText.header}</h3>
                <p>
                    {componentText.description}
                </p>
            </div>
            <div id="tel-wpp">
                <div id="tel-header">
                    <img src={WhatsIcon} className="contactIcon" alt="whatsapp"></img>
                    <h4>{componentText.phoneHeader}</h4>
                </div>
                <div className="numero">
                    <span className="tel-1">(55) 83 988900948</span>
                    <span style={{'display':'none'}} className="num_cel">5583988900948</span>
                    <div 
                        className="contactButton"
                        onClick={(e) => copyBtn(e, ".num_cel")}
                    >
                    <span>{componentText.copy}</span>
                    </div>                        
                </div>
            </div>

            <div id="email">
                <div id="email-Header">
                    <img src={EmailIcon} className="contactIcon" alt="emails"></img>
                    <h4>{componentText.mailHeader}</h4>
                </div>
                <div id="emails">
                    <div className="emailBlock">
                        <span className="email-1">HenriqueP.R@hotmail.com</span> 
                        <div 
                            className="contactButton" 
                            onClick={(e) => copyBtn(e, ".email-1")}
                        >
                            <span>{componentText.copy}</span>
                        </div>
                    </div>
                    <div className="emailBlock">
                        <span className="email-2">HenriquePoggiRA@gmail.com</span> 
                        <div 
                            className="contactButton"
                            onClick={(e) => copyBtn(e, ".email-2")}
                        >
                            <span>{componentText.copy}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="socialCards">
                <div 
                    onClick={
                        () => redirect("https://github.com/HenriquePRA")
                    }
                    className="socialCard"
                >
                    <div className="SCimgCont">
                        <img src={Github} alt="github logo"></img>
                    </div>
                    <span>Github</span>
                </div>
                <div 
                    onClick={
                        () => redirect("https://www.linkedin.com/in/henrique-poggi/")
                    }
                    className="socialCard"
                >
                    <div className="SCimgCont">
                        <img src={Linkedin} alt="linkedin logo"></img>
                    </div>
                    <span>Linkedin</span>
                </div>
            </div>
        </div>
    )
}

export default Contact;