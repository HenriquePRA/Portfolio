import React,{ useEffect, useState } from 'react';
import { showImg, hideImg, getLangText, transictionRedirect } from '../util/common';
import DynamicIMG from '../util/DynamicIMG';
import Navbar from '../util/Navbar';
import PT_NavalBattle from './texts/PT_NavalBattle.json';
import EN_NavalBattle from './texts/EN_NavalBattle.json';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'
import Img1 from '../../img/project/navalBattle_1.jpg'
import Img2 from '../../img/project/navalBattle_2.jpg'
import Img3 from '../../img/project/navalBattle_3.jpg'

import '../../css/main.css';

const NavalBattle = (props) => {

    // state responsible for storing all the page displayed text on a json
    const [pageText, setPageText] = useState({})
    
    // states required for displaying images in the page modal
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // effect responsible for defining and switching the page language
    useEffect(() => {
        setPageText(getLangText(props.lang, PT_NavalBattle, EN_NavalBattle))
    }, [props.lang])

    // effect responsible for scrolling to top when loading the page
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, []);

    return (
        <div className = {props.darkMode ? "dark-project" : "light-project"}>
            <Navbar 
                page={"proj"} 
                isRedirect={props.isRedirect}
                darkMode={props.darkMode}
                setDarkMode={props.setDarkMode}
                setLang={props.setLang}
                lang={props.lang}
                setOnTransition={props.setOnTransition}
                setPageload={props.setPageload}
                pageLoad={props.pageLoad}
            />

            <div className="detail-container">
                <div
                    className="detail"
                    style={props.pageLoad ? {"opacity":"0"} : {"opacity":"1"}}    
                >
                    <div className="project-header">
                        <div className="project-name">
                            <h2>{pageText.header}</h2>
                        </div>
                    </div>
                    <p className="project-description">
                        {pageText.about}
                    </p>

                    <div className='status-and-tools'>
                        <div className="badges">
                            <DynamicIMG type={"badge"} name={"Python"} />
                        </div>
                        
                        <div className="project-btn">
                            <div className='link-btn green-btn-bg'>
                                <img src={Checkmark} alt="greenCheck"></img> 
                                <span>{pageText.projectStatus}</span>
                            </div>

                            <div 
                                className='link-btn'
                                onClick={
                                    () => (transictionRedirect("https://github.com/HenriquePRA/Byte-Barrage", props.setPageload, props.setOnTransition))
                                }
                            >
                                <img src={Github} alt="Github"></img> 
                                <span>{pageText.projectRepo}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.caracteristcsHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail">
                        <p style={{"margin":"0"}}>
                            {pageText.caracteristcsDescription}
                        </p>
                        <p>
                            {pageText.mainFileDescription}
                        </p>

                        <div className="loneImg">
                            <div className="loneImgSubContainer">
                                <img src={Img1} alt="" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} />
                                <p className="ml_1_auto">
                                    <em>{pageText.imgDescription_1}</em>
                                </p>
                            </div>
                        </div>

                        <p>
                            {pageText.jogadorFileDescription}
                        </p>

                        <p>
                            {pageText.embarcacaoFileDescription}
                        </p>

                        <p>
                            {pageText.partidaFileDescription}
                        </p>
                        
                        <div className="loneImg">
                            <div className="loneImgSubContainer">
                                <img src={Img2} alt="Jogadas durante uma partida" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} />
                                <p className="ml_1_auto">
                                    <em>{pageText.imgDescription_2}</em>
                                </p>
                            </div>
                        </div>           

                        <p>
                            {pageText.posicionarFileDescription}
                        </p>

                        <ul>
                            <li>{pageText.posicionarDescriptionList_1}</li>
                            <li>{pageText.posicionarDescriptionList_2}</li>
                            <li>{pageText.posicionarDescriptionList_3}</li>
                        </ul>

                        <div className="loneImg">
                            <div className="loneImgSubContainer">
                                <img src={Img3} alt="menu_principal" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} />
                                <p className="ml_1_auto">
                                    <em>
                                        {pageText.imgDescription_3}
                                    </em>
                                </p>                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className = {props.darkMode ? "bg-modal dark-modal" : "bg-modal light-modal"}
                style={!showPic ? 
                    {"display":"none", "opacity":"0"}
                :
                    {"display":"flex", "opacity":"1"}
                }
                onClick={(e) => (hideImg(e, setShowPic))}
            >
                <div className="imgContainer">
                    <div className="close" >
                        <img src={CruzSvg} className="close-svg" alt=" " />
                    </div>
                    {selPic.map(img => {return img})}
                </div>                
            </div>
        </div>
    )
}

export default NavalBattle;