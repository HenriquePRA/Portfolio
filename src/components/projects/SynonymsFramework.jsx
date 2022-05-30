import React,{ useEffect, useState } from 'react';
import { showImg, hideImg, getLangText, transictionRedirect } from '../util/common';
import DynamicIMG from '../util/DynamicIMG';
import Navbar from '../util/Navbar';
import PT_SynonymsFramework from './texts/PT_SynonymsFramework.json';
import EN_SynonymsFramework from './texts/EN_SynonymsFramework.json';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'
import Img1 from '../../img/project/synonymsFramework_1.jpg'
import Img2 from '../../img/project/synonymsFramework_2.svg'
import Img3 from '../../img/project/synonymsFramework_3.jpg'
import Img4 from '../../img/project/synonymsFramework_4.jpg'

import '../../css/main.css';

const SynonymsFramework = (props) => {

    // state responsible for storing all the page displayed text on a json
    const [pageText, setPageText] = useState({})
    
    // states required for displaying images in the page modal
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // effect responsible for defining and switching the page language
    useEffect(() => {
        setPageText(getLangText(props.lang, PT_SynonymsFramework, EN_SynonymsFramework))
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
                                    () => (transictionRedirect("https://github.com/HenriquePRA/Synonyms-Detection-Framework", props.setPageload, props.setOnTransition))
                                }
                            >
                                <img src={Github} alt="Github"></img> 
                                <span>{pageText.projectRepo}</span>
                            </div>
                        </div>
                    </div>

                    {/* Processo de carga */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.loadHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_0 pb_1">
                        <p>
                            {pageText.loadDescription}
                        </p>
                    </div>

                    {/* Dados Estatísticos sobre a Base de Dados*/}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.statisticsHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_0 pb_1">
                        <p>
                            {pageText.statisticsDescription}
                        </p>
                    </div>
                    
                    <div className="loneImg">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img1} 
                                className="width_100"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                />
                            <p className="ml_1_auto">
                                <em>Resultado da geração de dados estatísticos</em>
                            </p>
                        </div>
                    </div> 

                    {/* Framework de busca */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.searchFrameworkHeader}</h4>
                        </div>
                    </div>

                    <div className="section-detail pt_0 pb_1">
                        <p>
                            {pageText.searchFrameworkListHeader}
                        </p>
                        <ul className="section-detail-list">
                            <li>{pageText.searchFrameworkListIten_1}</li>
                            <li>{pageText.searchFrameworkListIten_2}</li>
                            <li>{pageText.searchFrameworkListIten_3}</li>
                            <li>{pageText.searchFrameworkListIten_4}</li>      
                            <li>{pageText.searchFrameworkListIten_5}</li>
                        </ul>
                        <p>
                            {pageText.searchFrameworkDescription_1}
                        </p>
                        <p>
                            {pageText.searchFrameworkDescription_2}
                        </p>
                    </div>

                    <div className="loneImg mt_1 mb_1">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img2} 
                                alt="Imagem Modelo Entidade-Relacionamento"
                                style={{"backgroundColor": "#dfe5eb", "padding":"1rem"}}
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                />
                            <p className="ml_1_auto">
                                <em>{pageText.imgDescription_2}</em>
                            </p>
                        </div>
                    </div>

                    <div className="section-detail pt_0 pb_1">
                        <p>
                            {pageText.searchFrameworkDescription_3}
                        </p>
                    </div>

                    <div className="loneImg mt_1 mb_1">
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

                    {/* Sobre */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.aboutFuncHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_0 pb_1">
                        <p>
                            {pageText.aboutFuncDescription}
                        </p>
                    </div>

                    <div className="loneImg mt_1">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img4} 
                                className="width_100"
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

export default SynonymsFramework;