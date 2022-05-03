import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate, showImg, hideImg, getLangText } from './UtilFunctions';
import DynamicIMG from '../util/DynamicIMG';
import PT_ByteBarrage from './texts/PT_ByteBarrage.json';
import EN_ByteBarrage from './texts/EN_ByteBarrage.json';

import Github from '../../img/tools/icons/github.svg'
import Camera from '../../img/misc/camera.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'
import LinkSvg from '../../img/misc/link.svg'
import Img1 from '../../img/project/byteBarrage_1.jpg'
import Img2 from '../../img/project/byteBarrage_2.jpg'
import Img3 from '../../img/project/byteBarrage_3.jpg'
import Img4 from '../../img/project/byteBarrage_4.jpg'
import Img5 from '../../img/project/byteBarrage_5.jpg'
import Img6 from '../../img/project/byteBarrage_6.jpg'

import '../../css/main.css';
import 'react-alice-carousel/lib/alice-carousel.css';


const ByteBarrage = (props) => {
    
    const navigate = useNavigate();
    
    // State responsible for storing all the page displayed text on a json
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
                <div 
                    className="projDetailBlock"
                       
                >
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
                            <DynamicIMG type={"badge"} name={"HTML"} />
                            <DynamicIMG type={"badge"} name={"CSS"} />
                        </div>
                        
                        <div className="projBtn">
                            <h4>{pageText.projStatusHeader}</h4>
                            <div className='repoLinkButton greenCheckBg'>
                                <img src={Checkmark} alt="greenCheck"></img> 
                                <span>{pageText.projectStatus}</span>
                            </div>

                            <div 
                                className='repoLinkButton linkBg'
                                onClick={
                                    () => window.location.href = "https://henriquepra.github.io/Byte-Barrage/"
                                }
                            >
                                <img src={LinkSvg} alt="projOn"></img> 
                                <span>Projeto Online</span>
                            </div>

                            <div 
                                className='repoLinkButton'
                                onClick={
                                    () => window.location.href = "https://github.com/HenriquePRA/Byte-Barrage"
                                }
                            >
                                <img src={Github} alt="Github"></img> 
                                <span>{pageText.projectRepo}</span>
                            </div>
                        </div>
                    </div>

                    {/* detalhamento do uso do html */}
                    <div className="projLangHeader">
                        <DynamicIMG type="icon" name={"HTML"}/>
                        
                        <div className="projLangName">
                            <h4>{pageText.htmlHeader}</h4>
                        </div>
                    </div>
                    <div className="toolDetail">
                        <p style={{"margin":"0"}}>
                            {pageText.htmlDescription}
                        </p>
                    </div>

                    {/* detalhamento do css3 */}
                    <div className="projLangHeader">
                        <DynamicIMG type="icon" name={"CSS"}/>
                        <div className="projLangName">
                            <h4>{pageText.cssHeader}</h4>
                        </div>
                    </div>

                    <div className="toolDetail">
                        <p style={{"margin":"0 0 2rem 0"}}>
                            {pageText.cssDescrition}
                        </p>
                        <ul className="projDescriptionList">
                            <li key="CSS_description_1">
                                <strong>{pageText.cssSelectorsHeader}</strong>
                                <p>{pageText.cssSelectorsBody}</p>
                            </li>
                            <li key="CSS_description_2">
                                <strong>{pageText.cssPositionHeader}</strong>
                                <p>{pageText.cssPositionBody}</p>
                            </li>
                            <li key="CSS_description_3">
                                <strong>{pageText.cssAnimationHeader}</strong>
                                <p>{pageText.cssAnimationBody}</p>
                            </li>
                            <li key="CSS_description_4">
                                <strong>{pageText.cssResponsivenessHeader}</strong>
                                <p>{pageText.cssResponsivenessBody}</p>
                            </li>
                        </ul>
                    </div>

                    {/* screenshots */}
                    <div className="projLangHeader">
                        <img src={Camera} alt="camera img" />
                        <h3>{pageText.screenshotsHeader}</h3>
                    </div>
                    <section className="screenshots">
                        <img src={Img1} alt="pagina de pesquisa" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} />
                        <img src={Img2} alt="pagina principal" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} />
                        <img src={Img4} alt="pagina de contato" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} />
                        <img src={Img5} alt="pagina de cadastro" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} />
                        <img src={Img6} alt="pagina de login" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} />
                        <img src={Img3} alt="pagina principal mobile" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))}/>
                    </section>

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

export default ByteBarrage;