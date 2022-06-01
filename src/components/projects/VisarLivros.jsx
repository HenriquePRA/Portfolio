import React,{ useEffect, useState } from 'react';
import { showImg, hideImg, getLangText, transictionRedirect } from '../util/common';
import DynamicIMG from '../util/DynamicIMG';
import Navbar from '../util/Navbar';
import PT_VisarLivros from './texts/PT_VisarLivros.json';
import EN_VisarLivros from './texts/EN_VisarLivros.json';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/visarLivros_1.jpg'
import Img2 from '../../img/project/visarLivros_2.jpg'
import Img3 from '../../img/project/visarLivros_3.jpg'
import Img4 from '../../img/project/visarLivros_4.jpg'

import '../../css/main.css';

const VisarLivros = (props) => {
    
    // state responsible for storing all the page displayed text on a json
    const [pageText, setPageText] = useState({})
    
    // states required for displaying images in the page modal
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // effect responsible for defining and switching the page language
    useEffect(() => {
        setPageText(getLangText(props.lang, PT_VisarLivros, EN_VisarLivros))
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
                <div className="detail">
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
                            <DynamicIMG type={"badge"} name={"Javascript"} />
                            <DynamicIMG type={"badge"} name={"Babel JS"} />
                            <DynamicIMG type={"badge"} name={"Webpack"} />
                            <DynamicIMG type={"badge"} name={"Bootstrap"} />
                            <DynamicIMG type={"badge"} name={"HTML"} />
                            <DynamicIMG type={"badge"} name={"CSS"} />
                        </div>
                        
                        <div className="project-btn">
                            <div className='link-btn green-btn-bg'>
                                <img src={Checkmark} alt="greenCheck"></img> 
                                <span>{pageText.projectStatus}</span>
                            </div>

                            <div 
                                className='link-btn'
                                onClick={
                                    () => (transictionRedirect("https://github.com/HenriquePRA/Visar-Livros", props.setPageload, props.setOnTransition))
                                }
                            >
                                <img src={Github} alt="Github"></img> 
                                <span>{pageText.projectRepo}</span>
                            </div>
                        </div>
                    </div>

                    {/* Requisitos funcionais do projeto */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.projReqHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail">
                        <ul className="section-detail-list">
                            <li>
                                {pageText.projReq_Item_1_header}
                                <p>{pageText.projReq_Item_1_about}</p>
                            </li>
                            <li>
                                {pageText.projReq_Item_2_header}
                                <p>{pageText.projReq_Item_2_about}</p>
                            </li>
                            <li>
                                {pageText.projReq_Item_3_header}
                                <p>{pageText.projReq_Item_3_about}</p>
                            </li>
                            <li>
                                {pageText.projReq_Item_4_header}
                                <p>{pageText.projReq_Item_4_about}</p>
                            </li>
                            <li>
                                {pageText.projReq_Item_5_header}
                                <p>{pageText.projReq_Item_5_about}</p>
                            </li>
                            <li>
                                {pageText.projReq_Item_6_header}
                                <p>{pageText.projReq_Item_6_about}</p>
                            </li>
                        </ul>
                    </div>

                    {/* Características*/}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.featuresHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_0 pb_1">
                        <p>{pageText.featuresAbout}</p>
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

                    <div className="section-detail pt_0 pb_1">
                        <p>{pageText.featuresDescription_1}</p>
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

                    <div className="section-detail pt_0 pb_1">
                        <p>{pageText.featuresDescription_2}</p>
                    </div>
                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img3} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                            />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_3}</em>
                            </p>
                        </div>
                    </div>

                    <div className="section-detail pt_0 pb_1">
                        <p>{pageText.featuresDescription_3}</p>
                    </div>

                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img4} 
                                className="ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                            />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_4}</em>
                            </p>
                        </div>
                    </div>

                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.runHeader}</h4>
                        </div>
                    </div>

                    <div className="section-detail">
                        <ol className="section-detail-list">
                            <li>{pageText.runListItem_1}</li>
                            <li>{pageText.runListItem_2}</li>
                            <li>{pageText.runListItem_3}</li>
                            <li>{pageText.runListItem_4}</li>
                            <li>{pageText.runListItem_5}</li>
                        </ol>
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

export default VisarLivros;