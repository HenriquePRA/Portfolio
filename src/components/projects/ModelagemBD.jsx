import React,{ useEffect, useState } from 'react';
import { showImg, hideImg, getLangText, transictionRedirect } from '../util/common';
import DynamicIMG from '../util/DynamicIMG';
import Navbar from '../util/Navbar';
import PT_ModelagemBD from './texts/PT_ModelagemBD.json';
import EN_ModelagemBD from './texts/EN_ModelagemBD.json';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/ModelagemBDRel_1.jpg'
import Img2 from '../../img/project/ModelagemBDRel_2.jpg'
import Img3 from '../../img/project/ModelagemBDRel_3.jpg'
import Img4 from '../../img/project/ModelagemBDRel_4.jpg'

import '../../css/main.css';

const ModelagemBD = (props) => {

    // state responsible for storing all the page displayed text on a json
    const [pageText, setPageText] = useState({})
    
    // states required for displaying images in the page modal
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // effect responsible for defining and switching the page language
    useEffect(() => {
        setPageText(getLangText(props.lang, PT_ModelagemBD, EN_ModelagemBD))
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
                            <DynamicIMG type={"badge"} name={"Mysql"} />
                        </div>
                        
                        <div className="project-btn">
                            <div className='link-btn green-btn-bg'>
                                <img src={Checkmark} alt="greenCheck"></img> 
                                <span>{pageText.projectStatus}</span>
                            </div>

                            <div 
                                className='link-btn'
                                onClick={
                                    () => (transictionRedirect("https://github.com/HenriquePRA/Modelagem-BD-RPG", props.setPageload, props.setOnTransition))
                                }
                            >
                                <img src={Github} alt="Github"></img> 
                                <span>{pageText.projectRepo}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Requisitos */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.requirementsHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_0 pb_1">
                        <p>
                            {pageText.requirementsDescription}
                        </p>
                        <ul className="section-detail-list">
                            <li><p>{pageText.requirementsListItem_1}</p></li>
                            <li><p>{pageText.requirementsListItem_2}</p></li>
                            <li><p>{pageText.requirementsListItem_3}</p></li>
                            <li><p>{pageText.requirementsListItem_4}</p></li>
                            <li><p>{pageText.requirementsListItem_5}</p></li>
                            <li><p>{pageText.requirementsListItem_6}</p></li>                        
                        </ul>
                    </div>

                    {/* Minimundo */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.descriptionHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_1 pb_1">
                        <p>
                            {pageText.descriptionBody}                           
                        </p>
                    </div>

                    {/* Modelo Conceitual */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.conceptHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_1 pb_1">
                        <p>{pageText.conceptDesciption}</p>
                        <ul>
                            <li>{pageText.conceptListItem_1}</li> 
                            <li>{pageText.conceptListItem_2}</li>
                            <li>{pageText.conceptListItem_3}</li>
                            <li>{pageText.conceptListItem_4}</li>
                            <li>{pageText.conceptListItem_5}</li>
                            <li>{pageText.conceptListItem_6}</li>
                            <li>{pageText.conceptListItem_7}</li>
                            <li>{pageText.conceptListItem_8}</li>
                            <li>{pageText.conceptListItem_9}</li>
                            <li>{pageText.conceptListItem_10}</li>
                        </ul>
                        <div className="loneImg">
                            <div className="loneImgSubContainer">
                                <img 
                                    src={Img1} 
                                    className="width_100"
                                    alt="Imagem Modelo Entidade-Relacionamento" 
                                    onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                    />
                                <p className="ml_1_auto">
                                    <em>{pageText.imgDescription_1}</em>
                                </p>
                            </div>
                        </div>                    
                        <div className="loneImg">
                            <div className="loneImgSubContainer">
                                <img 
                                    src={Img2} 
                                    className="width_100"
                                    alt="Modelo Lógico" 
                                    onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                    />
                                <p className="ml_1_auto">
                                    <em>{pageText.imgDescription_2}</em>
                                </p>
                            </div>
                        </div>
                        <div className="loneImg">
                            <div className="loneImgSubContainer">
                                <img 
                                    src={Img3} 
                                    className="width_100"
                                    alt="Modelo Lógico" 
                                    onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                    />
                                <p className="ml_1_auto">
                                    <em>{pageText.imgDescription_3}</em>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modelo Físico */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.physicalmodelHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_1 pb_1">
                        <p>{pageText.physicalmodelDesciption}</p>
                        <ul>
                            <li>{pageText.physicalmodelList_1_Item_1}</li> 
                            <li>{pageText.physicalmodelList_1_Item_2}</li>
                            <li>{pageText.physicalmodelList_1_Item_3}</li>
                            <li>{pageText.physicalmodelList_1_Item_4}</li>
                            <li>{pageText.physicalmodelList_1_Item_5}</li>
                            <li>{pageText.physicalmodelList_1_Item_6}</li>
                            <li>{pageText.physicalmodelList_1_Item_7}</li>
                            <li>{pageText.physicalmodelList_1_Item_8}</li>
                        </ul>
                        <div className="loneImg">
                            <div className="loneImgSubContainer">
                                <img 
                                    src={Img4}
                                    alt="Imagem Modelo Entidade-Relacionamento" 
                                    onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                    />
                                <p className="ml_1_auto">
                                    <em>{pageText.imgDescription_4}</em>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modelo Físico parte2 */}
                    <div className="header">
                        <div className="header-text">
                            <h4>{pageText.queryHeader}</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_1 pb_1">
                        <p>{pageText.queryDesciption}</p>
                        <ul>
                            <li>IN</li>
                            <li>NOT IN</li>
                            <li>BETWEEN</li>
                            <li>NOT BETWEEN</li>
                            <li>IS NULL</li>
                            <li>IS NOT NULL</li>
                            <li>LIKE</li>
                            <li>NOT LIKE</li>
                            <li>ORDER BY</li>
                            <li>COUNT</li>
                            <li>SUM</li>
                            <li>AVG</li>
                            <li>MAX</li>
                            <li>MIN</li>
                            <li>GROUP BY</li>
                            <li>HAVING</li>
                            <li>INNER JOIN</li>
                            <li>LEFT JOIN</li>
                            <li>RIGHT JOIN</li>
                            <li>SUBQUERY</li>
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

export default ModelagemBD;