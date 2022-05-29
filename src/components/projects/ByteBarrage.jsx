import React,{ useEffect, useState } from 'react';
import { showImg, hideImg, getLangText, transictionRedirect } from '../util/common';
import DynamicIMG from '../util/DynamicIMG';
import Navbar from '../util/Navbar';
import PT_ByteBarrage from './texts/PT_ByteBarrage.json';
import EN_ByteBarrage from './texts/EN_ByteBarrage.json';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'
import LinkSvg from '../../img/misc/link.svg'
import Img1 from '../../img/project/byteBarrage_1.jpg'
import Img2 from '../../img/project/byteBarrage_2.jpg'
import Img4 from '../../img/project/byteBarrage_4.jpg'
import Img5 from '../../img/project/byteBarrage_5.jpg'

import '../../css/main.css';

const ByteBarrage = (props) => {
    
    // state responsible for storing all the page displayed text on a json
    const [pageText, setPageText] = useState({})

    // states required for displaying images in the page modal
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // effect responsible for defining and switching the page language
    useEffect(() => {
        setPageText(getLangText(props.lang, PT_ByteBarrage, EN_ByteBarrage))
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
                            <DynamicIMG type={"badge"} name={"HTML"} />
                            <DynamicIMG type={"badge"} name={"CSS"} />
                        </div>
                        
                        <div className="project-btn">
                            <div className='link-btn green-btn-bg'>
                                <img src={Checkmark} alt="greenCheck"></img> 
                                <span>{pageText.projectStatus}</span>
                            </div>

                            <div 
                                className='link-btn gray-link-btn'
                                onClick={
                                    () => (transictionRedirect("https://henriquepra.github.io/Byte-Barrage/", props.setPageload, props.setOnTransition))
                                }
                            >
                                <img src={LinkSvg} alt="projOn"></img> 
                                <span>{pageText.projectOnline}</span>
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

                    {/* detalhamento do uso do html */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.htmlHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail">
                        <p style={{"margin":"0"}}>
                            {pageText.htmlDescription}
                        </p>
                    </div>

                    {/* detalhamento do css3 */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.cssHeader}</h4>
                        </div>
                    </div>

                    <div className="section-detail">
                        <p style={{"margin":"0 0 2rem 0"}}>
                            {pageText.cssDescrition}
                        </p>
                        <ul className="section-detail-list">
                            <li key="CSS_description_1">
                                <span>{pageText.cssSelectorsHeader}</span>
                                <p>{pageText.cssSelectorsBody}</p>
                            </li>
                            <li key="CSS_description_2">
                                <span>{pageText.cssPositionHeader}</span>
                                <p>{pageText.cssPositionBody}</p>
                            </li>
                            <li key="CSS_description_3">
                                <span>{pageText.cssAnimationHeader}</span>
                                <p>{pageText.cssAnimationBody}</p>
                            </li>
                            <li key="CSS_description_4">
                                <span>{pageText.cssResponsivenessHeader}</span>
                                <p>{pageText.cssResponsivenessBody}</p>
                            </li>
                        </ul>
                    </div>

                    {/* screenshots */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.screenshotsHeader}</h4>
                        </div>
                    </div>

                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img2} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_2}</em>
                            </p>
                        </div>
                    </div>

                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img1} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_1}</em>
                            </p>
                        </div>
                    </div>

                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img5} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_5}</em>
                            </p>
                        </div>
                    </div>

                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img4} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_4}</em>
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

export default ByteBarrage;