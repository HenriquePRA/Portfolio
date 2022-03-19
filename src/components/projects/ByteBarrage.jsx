import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate } from './dealNavigate';
import DynamicIMG from '../DynamicIMG';

import Github from '../../img/tools/github.svg'
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
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // function responsable for showing an image
    const showImg = (target) => {
        setShowPic(true)
        setSelpic([
            <img 
                src={target.src} 
                alt={target.alt + " onViewMode"}
                className="selpic"
                key={target.alt}
            />
        ])
    }

    // function responsible for hiding an image
    const hideImg = (target) => {
        let clsTarget = target.target.className
        if (!(clsTarget === "selpic")) {
            setShowPic(false)
        }
    }

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
                            <h2>Byte Barrage</h2>
                        </div>
                    </div>
                    <p className="detailDescription">
                        Feito em 2018 esse projeto foi o requisito final para que eu concluísse a disciplina de Linguagem de Marcação
                        nele é explorado um vasto grupo de funcionalidades da linguagem de marcação HTML5 e de estilos CSS3. 
                        possui 5 páginas, index , pesquisa, contato, cadastro e login. cada página possui sua folha de estilo própria e 
                        todas as páginas utilizam a folha de estilo main.
                    </p>

                    <div className="projBtn">
                        <div 
                            className='repoLinkButton greenCheckBg'
                            onClick={
                                () => window.location.href = "https://github.com/HenriquePRA/Byte-Barrage"
                            }
                        >
                            <img src={Checkmark} alt="greenCheck"></img> 
                            <span>Projeto Finalizado</span>
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
                            <span>Ir ao Repositório</span>
                        </div>
                    </div>

                    {/* detalhamento do uso do html */}
                    <div className="projLangHeader">
                        <DynamicIMG nome={"HTML"}/>
                        <div className="projLangName">
                            <h4>HTML5</h4>
                        </div>
                    </div>
                    <div className="toolDetail">
                        <p style={{"margin":"0"}}>
                            Faz uso de entidades para a exibição em texto de caracteres reservados, tags variadas como elementos 
                            semânticos presentes no HTML5 para as páginas assim como elementos não semânticos e atributos desde
                            os mais comuns como class e id até os menos usados como tabindex para a exploração de suas funcionalidades.
                        </p>
                    </div>

                    {/* detalhamento do css3 */}
                    <div className="projLangHeader">
                        <DynamicIMG nome={"CSS"}/>
                        <div className="projLangName">
                            <h4>CSS3</h4>
                        </div>
                    </div>

                    <div className="toolDetail">
                        <p style={{"margin":"0 0 2rem 0"}}>
                            Por se tratar de um projeto final de faculdade tem como requisitos o a demonstração do domínio de múltiplas 
                            funcionalidades do CSS3 sendo elas:
                        </p>
                        <ul className="langUseList">
                            <li key="CSS_description_1">
                                <strong>Seletores</strong>
                                <p>Faz utilização de seletores na estilização com CSS: ID, class, cascata e herança, pseudo-classes e pseudo-elementos</p>
                            </li>
                            <li key="CSS_description_2">
                                <strong>Posicionamento</strong>
                                <p>Para posicionar os elementos das páginas usa grid, flexbox, float e position.</p>
                            </li>
                            <li key="CSS_description_3">
                                <strong>Animações</strong>
                                <p>faz uso de animações, transitions e transform.</p>
                            </li>
                            <li key="CSS_description_4">
                                <strong>Responsividade</strong>
                                <p>Possui responsividade para dispositivos com largura de tela de 350px até 2560px</p>
                            </li>
                        </ul>
                    </div>

                    {/* screenshots */}
                    <div className='screenshotsheader'>
                        <img src={Camera} alt="camera img" />
                        <h3>Screnshots</h3>
                    </div>
                    <section className="screenshots">
                        <img src={Img1} alt="pagina de pesquisa" onClick={(e) => (showImg(e.currentTarget))} />
                        <img src={Img2} alt="pagina principal" onClick={(e) => (showImg(e.currentTarget))} />
                        <img src={Img4} alt="pagina de contato" onClick={(e) => (showImg(e.currentTarget))} />
                        <img src={Img5} alt="pagina de cadastro" onClick={(e) => (showImg(e.currentTarget))} />
                        <img src={Img6} alt="pagina de login" onClick={(e) => (showImg(e.currentTarget))} />
                        <img src={Img3} alt="pagina principal mobile" onClick={(e) => (showImg(e.currentTarget))}/>
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
                onClick={(e) => (hideImg(e))}
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