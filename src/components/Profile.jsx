import React from 'react';
import Fotoperfil from '../img/misc/profile.png';
import Github from '../img/tools/github.svg';
import Linkedin from '../img/misc/linkedin.svg';


const Profile = (props) => {
    
    return (
        <div 
            style={props.showproj ? 
                {"display":"none"}
            :
                {"display":"flex"}
            }
            id="profileBlockCont"
        >

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