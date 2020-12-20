import React from 'react';
import Fotoperfil from '../img/misc/profilepic.jpg';
import Github from '../img/tools/github.svg';
import Linkedin from '../img/misc/linkedin.svg';


const Profile = (props) => {

    return (
        <div id="ProfileBlock">
            <div id="imgDiv">
                <img src={Fotoperfil} alt=""></img>
            </div>                    
            <h3>Henrique Poggi</h3>
            <h5>Desenvolvedor junior</h5>
            <div id="links">
                <img src={Github} alt="Github"></img>
                <img src={Linkedin} alt="Linkedin"></img>
            </div>
        </div>
    )
}

export default Profile;