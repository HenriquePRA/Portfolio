import React,{ useEffect, useState } from 'react';
import { showImg, hideImg, getLangText, transictionRedirect } from '../util/common';
import DynamicIMG from '../util/DynamicIMG';
import Navbar from '../util/Navbar';
import PT_Portfolio from './texts/PT_Portfolio.json';
import EN_Portfolio from './texts/EN_Portfolio.json';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/portfolio_1.png'
import Img1_2 from '../../img/project/portfolio_1_2.png'
import Img2 from '../../img/project/portfolio_2.png'
import Img2_2 from '../../img/project/portfolio_2_2.png'
import Img3 from '../../img/project/portfolio_3.png'
import Img3_2 from '../../img/project/portfolio_3_2.png'

import '../../css/main.css';

const Portfolio = (props) => {
    
    // state responsible for storing all the page displayed text on a json
    const [pageText, setPageText] = useState({})
        
    // states required for displaying images in the page modal
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // effect responsible for defining and switching the page language
    useEffect(() => {
        setPageText(getLangText(props.lang, PT_Portfolio, EN_Portfolio))
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
                            <DynamicIMG type={"badge"} name={"React"} />
                            <DynamicIMG type={"badge"} name={"Sass"} />
                            <DynamicIMG type={"badge"} name={"AWS"} />
                        </div>
                        
                        <div className="project-btn">
                            <div className='link-btn green-btn-bg'>
                                <img src={Checkmark} alt="greenCheck"></img> 
                                <span>{pageText.projectStatus}</span>
                            </div>

                            <div 
                                className='link-btn'
                                onClick={
                                    () => (transictionRedirect("https://github.com/HenriquePRA/Portfolio"))
                                }
                            >
                                <img src={Github} alt="Github"></img> 
                                <span>{pageText.projectRepo}</span>
                            </div>
                        </div>
                    </div>

                     {/* Project structure description */}
                     <div className="header">
                        <div className="header-text">
                            <h4>{pageText.descriptionHeader}</h4>
                        </div>
                    </div>
                    
                    <div className="section-detail pt_0 pb_1">
                        <p>{pageText.description}</p>
                    </div>

                    {/* Project structure image */}
                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={props.darkMode ? Img1_2 : Img1} 
                                className="width_80 ml_1_auto "
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_1}</em>
                            </p>
                        </div>
                    </div>

                    {/* Project pages and modules description */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.pagesHeader}</h4>
                        </div>
                    </div>

                    <div className="section-detail pt_0 pb_1">
                        <ul className="section-detail-list">
                            <li>
                                {pageText.mainPageHeader}
                                <p>{pageText.mainPage}</p>
                            </li>
                            <li>
                                {pageText.projectPageHeader}
                                <p>{pageText.projectPage}</p>
                            </li>                            
                        </ul>
                    </div>

                    {/* Projects page structure image */}
                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={props.darkMode ? Img2_2 : Img2} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                            />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_2}</em>
                            </p>
                        </div>
                    </div>

                     {/* Support modules description */}
                     <div className="header">
                        <div className="header-text">
                            <h4>{pageText.supportModHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_0 pb_1">
                        <p>{pageText.supModMain}</p>
                        <ul className="section-detail-list">
                            <li>
                                <p>
                                    {pageText.navBarHeader}: 
                                    {pageText.navBar}
                                </p>
                            </li>
                            <li>
                                <p>
                                    {pageText.dynamicIMGHeader}: 
                                    {pageText.dynamicIMG}
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* dynamicImg image */}
                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={props.darkMode ? Img3_2 : Img3}
                                className="width_60 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                            />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_3}</em>
                            </p>
                        </div>
                    </div>

                    <div className="section-detail pt_0 pb_1 mb_1">
                        <ul className="section-detail-list">
                            <li>
                                <p>
                                    {pageText.transitionsHeader}:
                                    {pageText.transitionsAbout}
                                </p>
                            </li>
                        </ul>
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

export default Portfolio;