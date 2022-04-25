import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import DynamicIMG from '../util/DynamicIMG';

import svgSetaDireita from '../../img/misc/seta-direita.svg'
import svgSetaEsquerda from '../../img/misc/seta-esquerda.svg'

const Projects = (props) => {

    const navigate = useNavigate();

    // function to store vertical position in cache and redirect user
    const redirectToProject = (project) => {
        props.setIsRedirect(true);
        navigate("/projetos/"+project)
    }

    // array com um card para cada projeto que pode ser exibido na página de projetos
    const projetos = [
        <div className="proj" key="prj10">
            <h4>Must-Do List</h4>
            <p>
                Esse é meu primeiro desenvolvendo apps para plataformas android, é um
                to do list com dados persistentes.
            </p>
            <DynamicIMG type={"icon"} name={"Android"} className={"langicon col_1-3 row_4-6"} alt={"Android Icon"} />
            <DynamicIMG type={"icon"} name={"Spring"} className={"langicon col_2-4 row_4-6"} alt={"Spring Icon"} />
            <DynamicIMG type={"icon"} name={"Mongo"} className={"langicon col_3-5 row_4-6"} alt={"Mongo Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("mustDoList")
                }}
            >
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj9">
            <h4>IF MKTP</h4>
            <p>
                Projeto final de bancos de dados relacionais da disciplina de banco de dados 2
            </p>            
            <DynamicIMG type={"icon"} name={"Postgres"} className={"langicon col_1-3 row_4-5"} alt={"Postgres Icon"} />
            <DynamicIMG type={"icon"} name={"Express"} className={"langicon col_2-4 row_4-5"} alt={"Express Icon"} />
            <DynamicIMG type={"icon"} name={"React"} className={"langicon col_3-5 row_4-5"} alt={"React Icon"} />
            <DynamicIMG type={"icon"} name={"Node"} className={"langicon col_2-3 row_5-6"} alt={"Node Icon"} />
            <DynamicIMG type={"icon"} name={"Bootstrap"} className={"langicon col_3-4 row_5-6"} alt={"Bootstrap Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("ifMktp")
                }}
            >
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj8">
            <h4>Vendor Pop</h4>
            <p>Projeto final da disciplina de POO nele eu exploro conceitos avançados de programação orientada a objetos com a linguagem java.</p>
            <DynamicIMG type={"icon"} name={"Java"} className={"langicon col_1-3 row_4-6"} alt={"Java Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("vendorPop")
                }}
            >
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj7">
            <h4>Swing Memory Game</h4>
            <p>Projeto inicial da disciplina de Programação orientada a objetos, consiste em dois jogos de Memória onde um faz o uso do java swing e outro faz uso do console.</p>
            <DynamicIMG type={"icon"} name={"Java"} className={"langicon col_1-3 row_4-6"} alt={"Java Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("swingMemoryGame")
                }}
            >
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj6">
            <h4>React Portfolio</h4>
            <p>Criado para mostrar de forma mais fluida os projetos que tenho trabalhado e as tecnologias que venho aprendendo.</p>
            <DynamicIMG type={"icon"} name={"React"} className={"langicon col_1-3 row_4-6"} alt={"React Icon"} />
            <DynamicIMG type={"icon"} name={"Sass"} className={"langicon col_2-4 row_4-6"} alt={"Sass Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("Portfolio")
                }}
            >
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj5">
            <h4>Visar Livros</h4>
            <p>Projeto final da disciplina de linguagens de script, com suporte a navegadores antigos trata-se de uma página de busca integrada com a API de livros do Google.</p>
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
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj4">
            <h4>Synonyms Detection Framework</h4>
            <p>Feito em 2019 como projeto da disciplina de Estruturas de Dados, capaz de realizar buscas de forma a detectar sinônimos do que for pesquisado.</p>
            <DynamicIMG type={"icon"} name={"Python"} className={"langicon col_1-3 row_4-6"} alt={"Python Icon"} />
                        <div
                className="projButton"
                onClick={() => {
                    redirectToProject("synonymsFramework")
                }}
            >
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj3">
            <h4>Modelagem de BD Relacional</h4>
            <p>Projeto final da disciplina de Banco de Dados 1, nele eu modelo um banco de dados relacional, passando pelos modelos Conceitual, Lógico e Físico.</p>
            <DynamicIMG type={"icon"} name={"Mysql"} className={"langicon col_1-3 row_4-6"} alt={"MySql Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("modelagemBD")
                }}
            >
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj2">
            <h4>Naval Battle</h4>
            <p>Feito em python trata-se de um jogo de batalha naval que pode ser jogado entre jogadores ou contra o computador</p>
            <DynamicIMG type={"icon"} name={"Python"} className={"langicon col_1-3 row_4-6"} alt={"Python Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("navalBattle")
                }}
            >
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj1">
            <h4>Byte Barrage</h4>
            <p>Esse é meu primeiro projeto front-end, simula um site catalogo de venda de propriedades em jogos.</p>
            <DynamicIMG type={"icon"} name={"HTML"} className={"langicon col_1-3 row_4-6"} alt={"HTML Icon"} />
            <DynamicIMG type={"icon"} name={"CSS"} className={"langicon col_2-4 row_4-6"} alt={"CSS Icon"} />
            <div
                className="projButton"
                onClick={() => {
                    redirectToProject("byteBarrage")
                }}
            >
                <span>VER MAIS</span>
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
                    setFim(fim + 6)
                    setIni(fim - 6)
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
        <div className="Proj_container">
            <div className="blockDescription">
                <h3>PROJETOS</h3>
                <p>
                    Aqui estão os projetos que fiz por iniciativa própria ou por requisito de disciplinas na faculdade
                    esses projetos variam em nível de complexidade e tamanho.
                </p>
            </div>

            {/* 
                Container dos cards dos projetos ao qual itera projSel retornando cada card contido no mesmo 
            */}
            <div className="Projects">
                {projSel.map(projeto => { return projeto })}
            </div>

            {/* 
                Rodapé do módulo com informações e botões para navegação dinamicos, é responsável por definir
                quais cards serão armazenados pela variável projSel
            */}
            <div id="LoadProj">
                <span id="navGuia">
                    {"Exibindo " + ini + " a " + fim + " de " + projetos.length + " projetos"}
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