import React from 'react'
import WhatsIcon from '../img/misc/whatsapp.svg'
import EmailIcon from '../img/misc/email.svg'
import Github from '../img/tools/github.svg';
import Linkedin from '../img/misc/linkedin.svg';

const Contact = () => {


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
        <div className="Contact">
        <div className="contactHeader">
            <h3>Contato</h3>
            <p>
                Sinta-se livre para entrar em contato comigo pelos meios abaixo que 
                eu respondo o mais rápido possível.
            </p>
        </div>
        <div id="tel-wpp">
            <div id="tel-header">
                <img src={WhatsIcon} className="contactIcon" alt="whatsapp"></img>
                <h4>Telefone/Whatsapp</h4>
            </div>
            <div className="numero">
                <span className="tel-1">(83) 988900948</span>
                <span style={{'display':'none'}} className="num_cel">83988900948</span>
                <div 
                    className="contactButton"
                    onClick={(e) => copyBtn(e, ".num_cel")}
                >
                   <span>COPIAR</span>
                </div>                        
            </div>
        </div>

        <div id="email">
            <div id="email-Header">
                <img src={EmailIcon} className="contactIcon" alt="emails"></img>
                <h4>Endereços de e-mail</h4>
            </div>
            <div id="emails">
                <div className="emailBlock">
                    <span className="email-1">HenriqueP.R@hotmail.com</span> 
                    <div 
                        className="contactButton" 
                        onClick={(e) => copyBtn(e, ".email-1")}
                    >
                        <span>COPIAR</span>
                    </div>
                </div>
                <div className="emailBlock">
                    <span className="email-2">HenriquePoggiRA@gmail.com</span> 
                    <div 
                        className="contactButton"
                        onClick={(e) => copyBtn(e, ".email-2")}
                    >
                        <span>COPIAR</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="socialCards">
            <div 
                onClick={
                    () => window.location.href = "https://github.com/HenriquePRA"
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
                    () => window.location.href = "https://www.linkedin.com/in/henrique-poggi/"
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