import React, { useState, useEffect } from 'react'
import { transictionRedirect } from '../util/common';
import { useNavigate } from "react-router-dom";
import DynamicIMG from '../util/DynamicIMG';
import PT_Projects from '../main/texts/PT_Projects.json'
import EN_Projects from '../main/texts/EN_Projects.json'

import svgSetaDireita from '../../img/misc/seta-direita.svg'
import svgSetaEsquerda from '../../img/misc/seta-esquerda.svg'

const Projects = (props) => {

    const navigate = useNavigate();
    const [componentText, setComponentText] = useState({})    

    // function responsible for redirecting to the project page
    const redirectToProject = (project) => {
        props.setProjTransiction(true);
        props.setIsRedirect(true);
        navigate("/projetos/"+project) 
    }

    // effect responsible for defining and switching the page language
    useEffect(() => {
        switch (props.lang) {
            case "PT":
                setComponentText(PT_Projects);
                break;
            default:
                setComponentText(EN_Projects);
        }
    }, [props.lang])

    // array com um card para cada projeto que pode ser exibido na página de projetos
    const projetos = [
        <div className="proj" key="prj13">
            <h4>User AutoWatcher</h4>
            <p>
            {componentText.autowatcherDescription}
            </p>
            <DynamicIMG type={"icon"} name={"Docker"} className={"langicon col_1-3 row_4-5"} alt={"Postgres"} />
            <DynamicIMG type={"icon"} name={"GO"} className={"langicon col_2-4 row_4-5"} alt={"Node"} />            
            <DynamicIMG type={"icon"} name={"SqlServer"} className={"langicon col_3-5 row_4-5"} alt={"Express"} />
            <DynamicIMG type={"icon"} name={"Kafka"} className={"langicon col_2-3 row_5-6"} alt={"React"} />
            <DynamicIMG type={"icon"} name={"Swagger"} className={"langicon col_3-4 row_5-6"} alt={"PlayStore"} />
            <div
                className="projButton"
                onClick={() => {
                    transictionRedirect("mktp", )
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,
        <div className="proj" key="prj12">
            <h4>GO Bird Fiesta</h4>
            <p>
            {componentText.goFiestaDescription}
            </p>
            <DynamicIMG type={"icon"} name={"Docker"} className={"langicon col_1-3 row_4-6"} alt={"Node"} />  
            <DynamicIMG type={"icon"} name={"GO"} className={"langicon col_2-4 row_4-6"} alt={"Golang"} />                      
            <DynamicIMG type={"icon"} name={"Mongo"} className={"langicon col_3-5 row_4-6"} alt={"Express"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("mktp")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,
        <div className="proj" key="prj11">
            <h4>MKTP</h4>
            <p>
            {componentText.mktpDescription}
            </p>
            <DynamicIMG type={"icon"} name={"Postgres"} className={"langicon col_1-3 row_4-5"} alt={"Postgres"} />
            <DynamicIMG type={"icon"} name={"Node"} className={"langicon col_2-4 row_4-5"} alt={"Node"} />            
            <DynamicIMG type={"icon"} name={"Express"} className={"langicon col_3-5 row_4-5"} alt={"Express"} />
            <DynamicIMG type={"icon"} name={"React"} className={"langicon col_2-3 row_5-6"} alt={"React"} />
            <DynamicIMG type={"icon"} name={"Bootstrap"} className={"langicon col_3-4 row_5-6"} alt={"PlayStore"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("mktp")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,
        <div className="proj" key="prj10">
            <h4>Must-Do List</h4>
            <p>
               {componentText.mustDoListDescription}
            </p>
            <DynamicIMG type={"icon"} name={"Android"} className={"langicon col_1-3 row_4-5"} alt={"Android Icon"} />
            <DynamicIMG type={"icon"} name={"Spring"} className={"langicon col_2-4 row_4-5"} alt={"Node Icon"} />            
            <DynamicIMG type={"icon"} name={"Mongo"} className={"langicon col_3-5 row_4-5"} alt={"Express Icon"} />
            <DynamicIMG type={"icon"} name={"AWS"} className={"langicon col_2-3 row_5-6"} alt={"AWS Icon"} />
            <DynamicIMG type={"icon"} name={"Playstore"} className={"langicon col_3-4 row_5-6"} alt={"Play Store Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("mustDoList")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,        
        <div className="proj" key="prj9">
            <h4>IF Mobile</h4>
            <p>
                {componentText.ifMobileDescription}
            </p>            
            <DynamicIMG type={"icon"} name={"Python"} className={"langicon col_1-3 row_4-6"} alt={"Python Icon"} />
            <DynamicIMG type={"icon"} name={"Postgres"} className={"langicon col_2-4 row_4-6"} alt={"Postgres Icon"} />
            <div
                className="projButton"
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,
        <div className="proj" key="prj6">
            <h4>Portfolio</h4>
            <p>{componentText.portfolioDescription}</p>
            <DynamicIMG type={"icon"} name={"React"} className={"langicon col_1-3 row_4-6"} alt={"React Icon"} />
            <DynamicIMG type={"icon"} name={"Sass"} className={"langicon col_2-4 row_4-6"} alt={"Sass Icon"} />
            <DynamicIMG type={"icon"} name={"AWS"} className={"langicon col_3-5 row_4-6"} alt={"AWS Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("Portfolio")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,         
        <div className="proj" key="prj8">
            <h4>Vendor Pop</h4>
            <p>{componentText.vendorPopDescription}</p>
            <DynamicIMG type={"icon"} name={"Java"} className={"langicon col_1-3 row_4-6"} alt={"Java Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("vendorPop")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,       
        <div className="proj" key="prj7">
            <h4>Swing Memory Game</h4>
            <p>{componentText.swingMemoryGameDescription}</p>
            <DynamicIMG type={"icon"} name={"Java"} className={"langicon col_1-3 row_4-6"} alt={"Java Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("swingMemoryGame")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,
        <div className="proj" key="prj5">
            <h4>Visar Livros</h4>
            <p>{componentText.visarLivrosDescription}</p>
            <DynamicIMG type={"icon"} name={"HTML"} className={"langicon col_1-3 row_4-5"} alt={"HTML Icon"} />
            <DynamicIMG type={"icon"} name={"CSS"} className={"langicon col_2-4 row_4-5"} alt={"CSS Icon"} />
            <DynamicIMG type={"icon"} name={"Bootstrap"} className={"langicon col_3-5 row_4-5"} alt={"Bootstrap Icon"} />
            <DynamicIMG type={"icon"} name={"Javascript"} className={"langicon col_1-3 row_5-6"} alt={"Javascript Icon"} />
            <DynamicIMG type={"icon"} name={"Webpack"} className={"langicon col_2-4 row_5-6"} alt={"Webpack Icon"} />
            <DynamicIMG type={"icon"} name={"Babel JS"} className={"langicon col_3-5 row_5-6 long_stk"} alt={"Babel JS Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("visarLivros")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,
        <div className="proj" key="prj4">
            <h4>Synonyms Detection Framework</h4>
            <p>{componentText.synonymsFrameworkDescription}</p>
            <DynamicIMG type={"icon"} name={"Python"} className={"langicon col_1-3 row_4-6"} alt={"Python Icon"} />
                        <div
                className="projButton"
                onClick={() => {
                    redirectToProject("synonymsFramework")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,
        <div className="proj" key="prj3">
            <h4>RPG DB Design</h4>
            <p>{componentText.databaseModelingDescription}</p>
            <DynamicIMG type={"icon"} name={"Mysql"} className={"langicon col_1-3 row_4-6"} alt={"MySql Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("modelagemBD")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,
        <div className="proj" key="prj2">
            <h4>Naval Battle</h4>
            <p>{componentText.navalBattleDescription}</p>
            <DynamicIMG type={"icon"} name={"Python"} className={"langicon col_1-3 row_4-6"} alt={"Python Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("navalBattle")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>,
        <div className="proj" key="prj1">
            <h4>Byte Barrage</h4>
            <p>{componentText.byteBarrageDescription}</p>
            <DynamicIMG type={"icon"} name={"HTML"} className={"langicon col_1-3 row_4-6"} alt={"HTML Icon"} />
            <DynamicIMG type={"icon"} name={"CSS"} className={"langicon col_2-4 row_4-6"} alt={"CSS Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("byteBarrage")
                }}
            >
                <span>{componentText.redirectBtnText}</span>
            </div>
        </div>
    ]

    // variáveis de controle na navegação do módulo
    const [ini, setIni] = useState(0);
    const [fim, setFim] = useState(6);

    let projSel = [];
    for (let i = ini; i < fim; i++) {
        projSel.push(projetos[i])
    }
    
    // função que navega as páginas mais antigas do módulo
    const proxPg = () => {
        if (ini < (projetos.length - 6)) {
            new Promise((resolve) => {
                if ((fim + 6) >= projetos.length) {
                    setFim(projetos.length)
                    setIni(projetos.length - 6)
                } else {
                    setIni(fim)
                    setFim(fim + 6)                    
                }
                resolve()
            }).then(() => {
                projSel = [];
                for (let i = ini; i < fim; i++) {
                    projSel.push(projetos[i])
                }
            })
        }
    }
    
    // função que navega as páginas mais recentes do módulo
    const antePg = () => {
        if (ini > 0) {
            new Promise((resolve) => {
                if ((ini - 6) <= 0) {
                    setFim(6)
                    setIni(0)
                } else {
                    setFim(ini)
                    setIni(ini - 6)
                }
                resolve()
            }).then(() => {
                projSel = [];
                for (let i = ini; i < fim; i++) {
                    projSel.push(projetos[i])
                }
            })
        }
    }

    return (
        <div 
            className = {props.darkMode ? "Projects dark-projects" : "Projects light-projects"}
            style={props.pageLoad ? {"opacity":"0"} : {"opacity":"1"}}
        >
            <div className="blockDescription">
                <h3>{componentText.header}</h3>
                <p>
                    {componentText.description}
                </p>
            </div>

            {/* Project cards container over which projSel iterates, returning each project card contained in it. */}
            <div className="Projects">
                {projSel.map(projeto => { return projeto })}
            </div>

            {/* Module footer with dynamic information and navigation buttons, it is responsible for defining which cards will be stored by the projSel variable. */}
            <div id="LoadProj">
                <span id="navGuia">
                    {componentText.footerTxt1} {ini} 
                    {componentText.footerTxt2} {fim} 
                    {componentText.footerTxt3} {projetos.length} 
                    {componentText.footerTxt4}
                </span>
                <div id="ProjNavCont">
                    <div 
                        className="alterPgBtnPrx"
                        style={(ini === 0) ? {"opacity": "0", "cursor": "auto"} : null }
                        onClick={() => antePg()}
                    >
                        <img src={svgSetaEsquerda} alt="Esquerda" />
                    </div>

                    <div  
                        className="alterPgBtnAnt"
                        style={(fim === projetos.length) ? {"opacity": "0", "cursor": "auto"} : null }
                        onClick={() => proxPg()}
                    >
                        <img src={svgSetaDireita} alt="Direita" />
                    </div >                         
                </div>
            </div>   
        </div>
    )
}

export default Projects