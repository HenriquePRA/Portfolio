import React,{ useEffect, useState } from 'react';
import { showImg, hideImg, getLangText, transictionRedirect } from '../util/common';
import DynamicIMG from '../util/DynamicIMG';
import Navbar from '../util/Navbar';
import PT_SwingMemoryGame from './texts/PT_SwingMemoryGame.json';
import EN_SwingMemoryGame from './texts/EN_SwingMemoryGame.json';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'
import Img1 from '../../img/project/memoryGame_1.jpg'
import Img2 from '../../img/project/memoryGame_2.jpg'

const SwingMemoryGame = (props) => {

 // state responsible for storing all the page displayed text on a json
    const [pageText, setPageText] = useState({})
    
    // states required for displaying images in the page modal
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // effect responsible for defining and switching the page language
    useEffect(() => {
        setPageText(getLangText(props.lang, PT_SwingMemoryGame, EN_SwingMemoryGame))
    }, [props.lang])

    // effect responsible for scrolling to top when loading the page
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, []);

    // fade effect when loading the page
    useEffect(() => {
        if (props.projTransiction) {
            setTimeout(() => {
                props.setProjTransiction(false);
            }, 300);
        }
    }, [props.projTransiction]);

    return (
        <div className = {props.darkMode ? "dark-project" : "light-project"}>
            <Navbar 
                page={"proj"} 
                isRedirect={props.isRedirect}
                darkMode={props.darkMode}
                setDarkMode={props.setDarkMode}
                setLang={props.setLang}
                lang={props.lang}
                setProjTransiction={props.setProjTransiction}
                setOnTransition={props.setOnTransition}
                setPageload={props.setPageload}
                pageLoad={props.pageLoad}
            />
            <div className="detail-container">
                <div 
                    className="detail"
                    style={props.projTransiction ? {"opacity":"0"} : {"opacity":"1"}}    
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
                            <DynamicIMG type={"badge"} name={"Java"} />
                        </div>
                        
                        <div className="project-btn">
                            <div className='link-btn green-btn-bg'>
                                <img src={Checkmark} alt="greenCheck"></img> 
                                <span>{pageText.projectStatus}</span>
                            </div>

                            <div 
                                className='link-btn'
                                onClick={
                                    () => (transictionRedirect("https://github.com/HenriquePRA/Synonyms-Detection-Framework", props.setPageload, props.setOnTransition))
                                }
                            >
                                <img src={Github} alt="Github"></img> 
                                <span>{pageText.projectRepo}</span>
                            </div>
                        </div>
                    </div>

                    {/* MemoryGame.java class */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.memoryGameHeader}</h4>
                        </div>
                    </div>

                    <div className="section-detail pt_0 pb_1">
                        <p>
                            {pageText.memoryGameAbout}
                        </p>
                        <ul className="section-detail-list">
                            <li className='mb_1'>{pageText.listItem_1}</li>
                            <li className='mb_1'>{pageText.listItem_2}</li>
                            <li className='mb_1'>{pageText.listItem_3}</li>
                            <li>{pageText.listItem_4}</li>
                        </ul>
                    </div>


                    {/* ConsoleGame.java class */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.consoleGameHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_0">
                        <p>
                            {pageText.consoleGameAbout}
                        </p>
                    </div>

                    <div className="loneImg mb_1">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img1} 
                                alt="Imagem Modelo Entidade-Relacionamento"
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_1}</em>
                            </p>
                        </div>
                    </div>

                    {/* SwingGame.java class */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.SwingGameHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_0">
                        <p>
                            {pageText.SwingGameAbout}
                        </p>
                    </div>

                    <div className="loneImg mb_1">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img2} 
                                alt="Imagem Modelo Entidade-Relacionamento"
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_2}</em>
                            </p>
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

export default SwingMemoryGame;