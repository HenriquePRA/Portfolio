import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate, showImg, hideImg } from './ultil';
import DynamicIMG from '../DynamicIMG';

import Github from '../../img/tools/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/ModelagemBDRel_1.jpg'
import Img2 from '../../img/project/ModelagemBDRel_2.jpg'
import Img3 from '../../img/project/ModelagemBDRel_3.jpg'
import Img4 from '../../img/project/ModelagemBDRel_4.jpg'

import '../../css/main.css';

const SynonymsFramework = (props) => {
    
    const navigate = useNavigate();
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

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
                            <h2>Synonyms-Detection-Framework</h2>
                        </div>
                    </div>
                    <p className="detailDescription">
                        Feito em 2019 como projeto da disciplina de Estruturas de Dados, 
                        esse projeto tem por objetivo de criar um framework capaz de carregar 
                        dados de um arquivo csv, nessa base de dados gerar dados estatísticos e realizar 
                        buscas de forma a detectar sinônimos do que for pesquisado.
                    </p>

                    <div className="projBtn">
                        <div className='repoLinkButton greenCheckBg'>
                            <img src={Checkmark} alt="greenCheck"></img> 
                            <span>Projeto Finalizado</span>
                        </div>

                        <div 
                            className='repoLinkButton'
                            onClick={
                                () => window.location.href = "https://github.com/HenriquePRA/Modelagem-BD-RPG"
                            }
                        >
                            <img src={Github} alt="Github"></img> 
                            <span>Ir ao Repositório</span>
                        </div>
                    </div>
                    
                    {/* Requisitos */}
                    <div className="projLangHeader">
                        <DynamicIMG nome={"Python"}/>
                        <div className="projLangName">
                            <h4>Requisitos do Projeto </h4>
                        </div>
                    </div>
                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            Por se tratar de um projeto final de disciplina, este projeto possúi vários requisitos técnicos 
                            em suas diversas etapas de modelagem especialmente quanto ao script SQL em seu modelo físico, sendo eles:
                        </p>
                        <ul className="projDescriptionList">
                            <li>
                                <p>
                                    <strong>Introdução</strong>: descrição da finalidade do banco de dados. A introdução deverá conter as informações 
                                    da realidade a ser modelada (minimundo) com a descrição detalhada das regras de negócio e a definição do escopo do 
                                    projeto.
                                </p> 
                            </li>
                            <li>
                                <p>
                                    <strong>Esquema Conceitual:</strong> Foi modelado diagrama E-R (Entidade-Relacionamento) contendo as cardinalidades 
                                    máxima e mínima de cada relacionamento onde foi Uilizada a notação de Peter Chen com o brModelo.
                                </p> 
                            </li>
                            <li>
                                <p>
                                    <strong>Esquema lógico:</strong> foi modelado o diagrama relacional normalizado contendo as cardinalidades máxima e
                                     mínima de cada relacionamento onde foi utilizado a notação crow's foot (IE) com o MySQL Workbench. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Dicionário de Dados:</strong> feito de modo a descrever tabelas e seus atributos de forma a detalhar seu tipo, 
                                    descrição, se pode receber valores nulos, o domínio de origem (em caso de chave estrangeira) e se o atributo é chave 
                                    estrangeira our primária. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Script de Criaçao:</strong> Sript separado para criação das tabelas do projeto escrito utilizando a 
                                    linguagem de consulta estruturada SQL. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Script de Povoamento:</strong> Um sript separado para o povoamento das tabelas do projeto escrito utilizando a linguagem de 
                                    consulta estruturada SQL, deve possuir uma quantidade mínima de dados necessários para o uso do script de consultas. 
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

export default SynonymsFramework;