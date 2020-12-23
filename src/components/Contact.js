import React from 'react'
import WhatsIcon from '../img/misc/whatsapp.svg'
import EmailIcon from '../img/misc/email.svg'
import Github from '../img/tools/github.svg';
import Linkedin from '../img/misc/linkedin.svg';

const Contact = () => {
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
                <button className="contactButton">COPIAR</button>                        
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
                    <button className="contactButton">COPIAR</button>
                </div>
                <div className="emailBlock">
                    <span className="email-2">HenriquePoggiRA@gmail.com</span> 
                    <button className="contactButton">COPIAR</button>
                </div>
            </div>
        </div>

        <div className="socialCards">
            <div>
                <div className="SCimgCont">
                    <img src={Github} alt="github logo"></img>
                </div>
                <span>Github</span>
            </div>
            <div>
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