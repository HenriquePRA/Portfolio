import React from 'react';
import { transictionRedirect } from '../util/common';
import Fotoperfil from '../../img/misc/profile.jpg';
import Github from '../../img/tools/icons/github.svg';
import Linkedin from '../../img/misc/linkedin.svg';
import bgGradient from "../../img/misc/gradient.jpg";

// Retorna uma div com uma imagem de foto de perfil e outras duas imagens com
// icones que quando clicados redirecionam o usuário ao website do icone  

const Profile = (props) => {

    const transictionRedirect = (link) => {
        props.setPageload(true)
        setTimeout(() => {
            props.setOnTransition(true)
        }, 250);
        setTimeout(() => {
            window.location.href = link
        }, 400);
    } 

    return (
        <div 
            className = {props.darkMode ? "Profile dark-profile" : "Profile light-profile"}
            style={props.pageLoad ? {"opacity":"0"} : {"opacity":"1"}}
        >
            <div id="ProfileBlock">
                <div id="imgDiv">
                    <img src={Fotoperfil} alt=""></img>
                </div>
                <h3>Henrique Poggi</h3>
                <h5>{props.lang === "PT" ? "Engenheiro de Software" : "Software Engineer"}</h5>
                <div id="links">
                    <img 
                        src={Github} 
                        alt="Github" 
                        className="lnk1" 
                        onClick={
                            () => transictionRedirect("https://github.com/HenriquePRA")
                        }
                    ></img>
                    <img 
                        src={Linkedin} 
                        alt="Linkedin" 
                        className="lnk2" 
                        onClick={
                            () => transictionRedirect("https://www.linkedin.com/in/henrique-poggi/")
                        }
                    ></img>
                </div>
                <img 
                    className={props.darkMode ? "gradient dark-gradient" : "gradient light-gradient"}
                    src={bgGradient} 
                />
            </div>
        </div>
    )
}

export default Profile;