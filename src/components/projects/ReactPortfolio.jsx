import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate, showImg, hideImg } from './UtilFunctions';
import DynamicIMG from '../util/DynamicIMG';

import Github from '../../img/tools/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/portfolio_1.png'
import Img2 from '../../img/project/portfolio_2.png'
import Img3 from '../../img/project/portfolio_3.png'

import '../../css/main.css';

const ReactPortfolio = (props) => {
    
    const navigate = useNavigate();
    
    const [pageText, setPageText] = useState({})

    // states required for displaying images in the page modal
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // this function returns texts that are used in the page display, 
    // depending on which language is selected in the portfolio state
    const getLangText = (text) => {
        switch (text) {
            case "PT":
                return {
                    "header":"React Portfolio",
                    "about":`Uma vez que eu já tinha conhecimento sólido a respeito das ferramentas ECMAScript6/HTML5/CSS em 2021
                    construí esse projeto com três objetivos domínio das funcionalidades básicas do ReactJS/JSX e SASS para seu uso em 
                    projetos futuros, me inserir no mercado profissional de desenvolvimento de software e mostrar aos meus amigos de 
                    faculdade e familiares os projetos que tenho trabalhado`,
                    "projectStatus":"Finalizado",
                    "projectRepo":"Ir ao Repositório",
                    "descriptionHeader":"Estrutura do projeto",
                    "description": `O Projeto é dividido em dois tipos de páginas: a Portfolio que é a página principal e as páginas de projeto, 
                    que apesar de serem várias seu funcionamento interno e layout é muito semelhante todavia diferem em vários pontos.`,
                    "imgDescription_1":"Estrutura Simplificada do Projeto",
                    "pagesHeader":"Páginas Projeto",
                    "mainPageHeader":"Main Page",
                    "mainPage":`Possui os módulos próprios About, Contact e Projects, faz uso de módulos de suporte que estão presentes também
                    nas páginas de projetos.`,
                    "projectPageHeader":"Project Page",
                    "projectPage":`Página simples dos projetos com cada projeto podendo ter sua documentação diferente é necessário a
                    exibição de diferentes documentações por esse motivo cada projeto possui sua página única, e assim como a mainPage
                    utiliza módulos de suporte comuns a ambas todavia possui um script com funções usada apenas pelas páginas de projeto`,
                    "imgDescription_2":"Funcionamento das páginas de projeto",
                    "supportModHeader":"Módulos de Suporte",
                    "supModMain": "Compartilhados entre as páginas de projeto e a página principal os módulos de suporte são 3:",
                    "navBarHeader": "NavBar",
                    "navBar": `Se adapta e auxilia a navegação interna da página e entre as páginas, altera estados de exibição da aplicação como
                    modo noturno e linguagem exibida`,
                    "dynamicIMGHeader":"DynamicIMG",
                    "dynamicIMG":"Usada exclusivamente para retornar uma img com o svg correspondente a uma string como parametro.",
                    "effectsHeader":"Effects",
                    "effects":"Responsável por efeitos de animação ao carregar uma página, interagir com um módulo, trocar linguagem e alterar os estilos de exibição claro/escuro",
                    "imgDescription_3":"Funcionamento do DynamicIMG"
                }
            default:
                return {
                    "header":"React Portfolio",
                    "about":`Uma vez que eu já tinha conhecimento sólido a respeito das ferramentas ECMAScript6/HTML5/CSS em 2021
                    construí esse projeto com três objetivos domínio das funcionalidades básicas do ReactJS/JSX e SASS para seu uso em 
                    projetos futuros, me inserir no mercado profissional de desenvolvimento de software e mostrar aos meus amigos de 
                    faculdade e familiares os projetos que tenho trabalhado`,
                    "projectStatus":"Finalizado",
                    "projectRepo":"Ir ao Repositório",
                    "descriptionHeader":"Estrutura do projeto",
                    "description": `O Projeto é dividido em dois tipos de páginas: a Portfolio que é a página principal e as páginas de projeto, 
                    que apesar de serem várias seu funcionamento interno e layout é muito semelhante todavia diferem em vários pontos.`,
                    "imgDescription_1":"Estrutura Simplificada do Projeto",
                    "pagesHeader":"Páginas Projeto",
                    "mainPageHeader":"Main Page",
                    "mainPage":`Possui os módulos próprios About, Contact e Projects, faz uso de módulos de suporte que estão presentes também
                    nas páginas de projetos.`,
                    "projectPageHeader":"Project Page",
                    "projectPage":`Página simples dos projetos com cada projeto podendo ter sua documentação diferente é necessário a
                    exibição de diferentes documentações por esse motivo cada projeto possui sua página única, e assim como a mainPage
                    utiliza módulos de suporte comuns a ambas todavia possui um script com funções usada apenas pelas páginas de projeto`,
                    "imgDescription_2":"Funcionamento das páginas de projeto",
                    "supportModHeader":"Módulos de Suporte",
                    "supModMain": "Compartilhados entre as páginas de projeto e a página principal os módulos de suporte são 3:",
                    "navBarHeader": "NavBar",
                    "navBar": `Se adapta e auxilia a navegação interna da página e entre as páginas, altera estados de exibição da aplicação como
                    modo noturno e linguagem exibida`,
                    "dynamicIMGHeader":"DynamicIMG",
                    "dynamicIMG":"Usada exclusivamente para retornar uma img com o svg correspondente a uma string como parametro.",
                    "effectsHeader":"Effects",
                    "effects":"Responsável por efeitos de animação ao carregar uma página, interagir com um módulo, trocar linguagem e alterar os estilos de exibição claro/escuro",
                    "imgDescription_3":"Funcionamento do DynamicIMG"
                }
        }
    }
    // effect responsible for defining and switching the page language
    useEffect(() => {
        setPageText(getLangText(props.lang))
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

                    <div className="projBtn">
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

                     {/* Project structure description */}
                     <div className="projLangHeader">
                        <DynamicIMG nome={"React"}/>
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
                        <DynamicIMG nome={"React"}/>
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
                        <DynamicIMG nome={"React"}/>
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

export default ReactPortfolio;