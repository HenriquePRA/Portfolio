import React from 'react';
import Fotoperfil from '../../img/misc/profile.jpg';
import Github from '../../img/tools/icons/github.svg';
import Linkedin from '../../img/misc/linkedin.svg';

// Retorna uma div com uma imagem de foto de perfil e outras duas imagens com
// icones que quando clicados redirecionam o usuário ao website do icone  

const Profile = () => {
    return (
        <div id="profileBlockCont">
            <div id="ProfileBlock">
                <div id="imgDiv">
                    <img src={Fotoperfil} alt=""></img>
                </div>
                <h3>Henrique Poggi</h3>
                <h5>Desenvolvedor junior</h5>
                <div id="links">
                    <img 
                        src={Github} 
                        alt="Github" 
                        className="lnk1" 
                        onClick={
                            () => window.location.href = "https://github.com/HenriquePRA"
                        }
                    ></img>
                    <img 
                        src={Linkedin} 
                        alt="Linkedin" 
                        className="lnk2" 
                        onClick={
                            () => window.location.href = "https://www.linkedin.com/in/henrique-poggi/"
                        }
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default Profile;