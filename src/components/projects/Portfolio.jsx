import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate, showImg, hideImg, getLangText } from './UtilFunctions';
import DynamicIMG from '../util/DynamicIMG';
import PT_Portfolio from './texts/PT_Portfolio.json';
import EN_Portfolio from './texts/EN_Portfolio.json';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/portfolio_1.png'
import Img2 from '../../img/project/portfolio_2.png'
import Img3 from '../../img/project/portfolio_3.png'

import '../../css/main.css';

const Portfolio = (props) => {
    
    const navigate = useNavigate();
    
    // State responsible for storing all the page displayed text on a json
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

    return (
        <div id="bg-modal" className="projMain">
            <div
                className="retornar"
                onClick={() => {
                    dealNavigate(props.isRedirect, navigate)
                }}                
            >
                <span>
                    {props.isRedirect ? "VOLTAR" : "IR PARA O PORTFOLIO"}
                </span>
            </div>

            <div className="projdetailCont">
                <div className="projDetailBlock">
                    <div className="projHeader">
                        <div className="projNameHeader">
                            <h2>{pageText.header}</h2>
                        </div>
                    </div>
                    <p className="detailDescription">
                        {pageText.about}
                    </p>

                    <div className='statusAndTools'>
                        <div className="badgeBlock">
                            <h4>{pageText.toolsHeader}</h4>
                            <DynamicIMG type={"badge"} name={"React"} />
                            <DynamicIMG type={"badge"} name={"Sass"} />
                        </div>
                        
                        <div className="projBtn">
                            <h4>{pageText.projStatusHeader}</h4>
                            <div className='repoLinkButton greenCheckBg'>
                                <img src={Checkmark} alt="greenCheck"></img> 
                                <span>{pageText.projectStatus}</span>
                            </div>

                            <div 
                                className='repoLinkButton'
                                onClick={
                                    () => window.location.href = "https://github.com/HenriquePRA/Visar-Livros"
                                }
                            >
                                <img src={Github} alt="Github"></img> 
                                <span>{pageText.projectRepo}</span>
                            </div>
                        </div>
                    </div>

                     {/* Project structure description */}
                     <div className="projLangHeader">
                        <DynamicIMG type="icon" name={"React"}/>
                        <div className="projLangName">
                            <h4>{pageText.descriptionHeader}</h4>
                        </div>
                    </div>
                    
                    <div className="toolDetail pt_0 pb_1">
                        <p>{pageText.description}</p>
                    </div>

                    {/* Project structure image */}
                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img1} 
                                className="width_100"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_1}</em>
                            </p>
                        </div>
                    </div>

                    {/* Project pages and modules description */}
                    <div className="projLangHeader">
                        <DynamicIMG type="icon" name={"React"}/>
                        <div className="projLangName">
                            <h4>{pageText.pagesHeader}</h4>
                        </div>
                    </div>

                    <div className="toolDetail pt_0 pb_1">
                        <ul className="projDescriptionList">
                            <li>
                                <strong>{pageText.mainPageHeader}</strong>
                                <p>{pageText.mainPage}</p>
                            </li>
                            <li>
                                <strong>{pageText.projectPageHeader}</strong>
                                <p>{pageText.projectPage}</p>
                            </li>                            
                        </ul>
                    </div>

                    {/* Projects page structure image */}
                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img2} 
                                className="width_100"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_2}</em>
                            </p>
                        </div>
                    </div>

                     {/* Support modules description */}
                     <div className="projLangHeader">
                        <DynamicIMG type="icon" name={"React"}/>
                        <div className="projLangName">
                            <h4>{pageText.supportModHeader}</h4>
                        </div>
                    </div>
                    <div className="toolDetail pt_0 pb_1">
                        <p>{pageText.supModMain}</p>
                        <ul className="projDescriptionList">
                            <li>
                                <p>
                                    <strong>{pageText.navBarHeader}: </strong>
                                    {pageText.navBar}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>{pageText.dynamicIMGHeader}: </strong>
                                    {pageText.dynamicIMG}
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* dynamicImg image */}
                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img3} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "horizontal"))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_3}</em>
                            </p>
                        </div>
                    </div>

                    <div className="toolDetail pt_0 pb_1">
                        <ul className="projDescriptionList">
                            <li>
                                <p>
                                    <strong>{pageText.effectsHeader}: </strong>
                                    {pageText.effects}
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            
            <div 
                className="bg-modal" 
                id="bg-modal" 
                style={!showPic ? 
                    {"display":"none"}
                :
                    {"display":"flex"}
                }
                onClick={(e) => (hideImg(e, setShowPic))}
            >
                <div className="imgContainer">
                    <div className="fechar" id="fecharImg" >
                        <img src={CruzSvg} className="fechar_btn" alt="fechar modal" />
                    </div>
                    {selPic.map(img => {return img})}
                </div>                
            </div>
        </div>
    )
}

export default Portfolio;