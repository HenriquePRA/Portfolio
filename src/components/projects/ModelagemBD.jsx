import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate, showImg, hideImg } from '../util/common';
import DynamicIMG from '../util/DynamicIMG';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/ModelagemBDRel_1.jpg'
import Img2 from '../../img/project/ModelagemBDRel_2.jpg'
import Img3 from '../../img/project/ModelagemBDRel_3.jpg'
import Img4 from '../../img/project/ModelagemBDRel_4.jpg'

import '../../css/main.css';

const ModelagemBD = (props) => {
    
    const navigate = useNavigate();
    const [ showPic, setShowPic ] = useState(false)
    const [ selPic, setSelpic ] = useState([])

    // effect responsible for scrolling to top when loading the page
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, []);

    return (
        <div id="bg-modal" className="project">
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

            <div className="detail-container">
                <div 
                    className="detail"                       
                >
                    <div className="project-header">
                        <div className="project-name">
                            <h2>Modelagem de Banco de Dados Relacional</h2>
                        </div>
                    </div>
                    <p className="project-description">
                        Feito em 2019 como projeto final da disciplina de Banco de Dados 1 esse projeto engloba a modelagem de um 
                        banco de dados relacional desde a idealização de como seria o minimundo em que será inserido passando 
                        pelos modelos conceitual, lógico até chegar ao físico usando MySQL.
                    </p>

                    <div className="project-btn">
                        <div className='link-btn green-btn-bg'>
                            <img src={Checkmark} alt="greenCheck"></img> 
                            <span>Projeto Finalizado</span>
                        </div>

                        <div 
                            className='link-btn'
                            onClick={
                                () => window.location.href = "https://github.com/HenriquePRA/Modelagem-BD-RPG"
                            }
                        >
                            <img src={Github} alt="Github"></img> 
                            <span>Ir ao Repositório</span>
                        </div>
                    </div>
                    
                    {/* Requisitos */}
                    <div className="header">
                        <DynamicIMG type="icon" name={"SQL"}/>
                        <div className="header-text">
                            <h4>Requisitos do Projeto </h4>
                        </div>
                    </div>
                    <div className="section-detail pt_0 pb_1">
                        <p>
                            Por se tratar de um projeto final de disciplina, este projeto possúi vários requisitos técnicos 
                            em suas diversas etapas de modelagem especialmente quanto ao script SQL em seu modelo físico, sendo eles:
                        </p>
                        <ul className="section-detail-list">
                            <li>
                                <p>
                                    Introdução: descrição da finalidade do banco de dados. A introdução deverá conter as informações 
                                    da realidade a ser modelada (minimundo) com a descrição detalhada das regras de negócio e a definição do escopo do 
                                    projeto.
                                </p> 
                            </li>
                            <li>
                                <p>
                                    Esquema Conceitual: Foi modelado diagrama E-R (Entidade-Relacionamento) contendo as cardinalidades 
                                    máxima e mínima de cada relacionamento onde foi Uilizada a notação de Peter Chen com o brModelo.
                                </p> 
                            </li>
                            <li>
                                <p>
                                    Esquema lógico: foi modelado o diagrama relacional normalizado contendo as cardinalidades máxima e
                                     mínima de cada relacionamento onde foi utilizado a notação crow's foot (IE) com o MySQL Workbench. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    Dicionário de Dados: feito de modo a descrever tabelas e seus atributos de forma a detalhar seu tipo, 
                                    descrição, se pode receber valores nulos, o domínio de origem (em caso de chave estrangeira) e se o atributo é chave 
                                    estrangeira our primária. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    Script de Criaçao: Sript separado para criação das tabelas do projeto escrito utilizando a 
                                    linguagem de consulta estruturada SQL. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    Script de Povoamento: Um sript separado para o povoamento das tabelas do projeto escrito utilizando a linguagem de 
                                    consulta estruturada SQL, deve possuir uma quantidade mínima de dados necessários para o uso do script de consultas. 
                                </p>
                            </li>                        
                        </ul>
                    </div>

                    {/* Minimundo */}
                    <div className="header">
                        <DynamicIMG type="icon" name={"Txt"}/>
                        <div className="header-text">
                            <h4>Minimundo</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_1 pb_1">
                        Representa a descrição de um banco de dados de um jogo de fantasia RPG, nesse jogo é determinado que os 
                        jogadores podem interagir, fazer missões, obter conquistas, chefiar e fazer parte de uma guilda que pode 
                        possuir ou não alinhamento e outras entidades e relações comuns em um jogo de fantasia RPG que são descritos
                        em maior detalhe no arquivo completo com o minimundo.
                    </div>

                    {/* Modelo Conceitual */}
                    <div className="header">
                        <DynamicIMG type="icon" name={"Entity"}/>
                        <div className="header-text">
                            <h4>Modelo Conceitual</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_1 pb_1">
                        <p>O esquema conceitual atendem aos seguintes requisitos técnicos.</p>
                        <ul>
                            <li>Entidade fraca com relacionamento identificador</li> 
                            <li>Entidade associativa (agregação)</li>
                            <li>Estrutura de especialização com uma tabela para cada entidade</li>
                            <li>Relacionamento N:N</li>
                            <li>Relacionamento 1:1</li>
                            <li>Relacionamento com atributos</li>
                            <li>Relacionamento ternário</li>
                            <li>Auto-Relacionamento</li>
                            <li>Atributo Multivalorado</li>
                            <li>Atributo Composto</li>
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
                                    <em>Modelo Entidade-Relacionamento</em>
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
                                    <em>Modelo Lógico</em>
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
                                    <em>Dicionário de Dados</em>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modelo Físico */}
                    <div className="header">
                        <DynamicIMG type="icon" name={"Mysql"}/>
                        <div className="header-text">
                            <h4>Modelo Físico (Criação, Povoamento, Atualização)</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_1 pb_1">
                        <p>O Script de criação, povoamento e Atualização seguintes requisitos técnicos.</p>
                        <ul>
                            <li>(Criação) Uso da constraint CHECK (mínimo de 3, diferentes)</li> 
                            <li>(Criação) Uso da constraint UNIQUE</li>
                            <li>(Criação) Uso da constraint FOREIGN KEY</li>
                            <li>(Criação) Uso da constraint DEFAULT</li>
                            <li>(Povoamento) Inserção pelo menos 5 linhas em cada tabela</li>
                            <li>(Atualização) Update de um campo</li>
                            <li>(Atualização) Update de múltiplos campos</li>
                            <li>(Atualização) Exclusão de dados com condição em pelo menos duas tabelas</li>
                        </ul>
                        <div className="loneImg">
                            <div className="loneImgSubContainer">
                                <img 
                                    src={Img4}
                                    alt="Imagem Modelo Entidade-Relacionamento" 
                                    onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic))} 
                                    />
                                <p className="ml_1_auto">
                                    <em>Modelo Entidade-Relacionamento</em>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modelo Físico parte2 */}
                    <div className="header">
                        <DynamicIMG type="icon" name={"Mysql"}/>
                        <div className="header-text">
                            <h4>Modelo Físico (Consultas)</h4>
                        </div>
                    </div>
                    <div className="section-detail pt_1 pb_1">
                        <p>O Script de consultas com suas respostas comentadas, tendo como requisito o uso das seguintes cláusulas</p>
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
                            <li>SUBCONSULTA</li>
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
                    <div className="close" id="fecharImg" >
                        <img src={CruzSvg} className="close-svg" alt="" />
                    </div>
                    {selPic.map(img => {return img})}
                </div>                
            </div>
        </div>
    )
}

export default ModelagemBD;