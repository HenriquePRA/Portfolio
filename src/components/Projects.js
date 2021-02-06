import React, { useState } from 'react'
import HtmlSvg from '../img/tools/html-5.svg'
import CssSvg from '../img/tools/css.svg'
import JavascriptSvg from '../img/tools/javascript.svg'
import pythonSvg from '../img/tools/python.svg'
import reactSvg from '../img/tools/react.svg'
import sassSvg from '../img/tools/sass.svg'
import javaSvg from '../img/tools/java.svg'
import bootstrapSvg from '../img/tools/bootstrap.svg'
import postgreSvg from '../img/tools/postgresql.svg'
import expressSvg from '../img/tools/express.svg'
import nodeSvg from '../img/tools/nodejs.svg'
import springSvg from '../img/tools/spring.svg'
import mysqlSvg from '../img/tools/mysql.svg'
import androidSvg from '../img/tools/android.svg'
import vueSvg from '../img/tools/vue.svg'
import mongoSvg from '../img/tools/mongodb.svg'
import webpackSvg from '../img/tools/webpack.svg'
import babelSvg from '../img/tools/babel.svg'
import guiSvg from '../img/tools/gui.svg'
import svgSetaDireita from '../img/misc/seta-direita.svg'
import svgSetaEsquerda from '../img/misc/seta-esquerda.svg'

import jsonProjs from './projects_pt';

const Projects = (props) => {

    // função que atualiza o modal com detalhamento de um projeto
    const updateProj = (name) => {
        let select_proj;
        jsonProjs.forEach(proj => {
            if (proj.name === name) {
                select_proj = proj;
            }
        })
        props.setprojdata(select_proj);
        props.setShowproj(true);
    }

    // array com todos os projetos
    const projetos = [
        <div className="proj" key="prj10">
            <h4>Must-Do List</h4>
            <p>
                Esse é meu primeiro desenvolvendo apps para plataformas android, é um
                to do list com dados persistentes.
            </p>
            <img src={androidSvg} className="langicon col_1-3 row_4-5" alt="Android"></img>
            <img src={vueSvg} className="langicon col_2-4 row_4-5" alt="Vue"></img>
            <img src={springSvg} className="langicon col_1-3 row_5-6" alt="Spring"></img>
            <img src={mongoSvg} className="langicon col_2-4 row_5-6" alt="Mongo"></img>

            <div className="projButton" onClick={() => updateProj("Must-Do List")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj9">
            <h4>IF Mobile</h4>
            <p>
                Projeto final de bancos de dados relacionais da disciplina de banco de dados 2
            </p>
            <img src={postgreSvg} className="langicon col_1-3 row_4-5" alt="Postgres"></img>
            <img src={expressSvg} className="langicon col_2-4 row_4-5" alt="express"></img>
            <img src={reactSvg} className="langicon col_3-5 row_4-5" alt="react"></img>
            <img src={nodeSvg} className="langicon col_2-3 row_5-6" alt="Node"></img>
            <img src={bootstrapSvg} className="langicon col_3-4 row_5-6" alt="bootstrap"></img>     

            <div className="projButton" onClick={() => updateProj("IF Mobile")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj8">
            <h4>Vendor Pop</h4>
            <p>Projeto final da disciplina de POO nele eu exploro conceitos avançados de programação orientada a objetos com a linguagem java.</p>
            <img src={javaSvg} className="langicon col_1-3 row_4-6" alt="Java"></img>
            <img src={guiSvg} className="langicon col_2-4 row_4-6" alt="GUI"></img>

            <div className="projButton" onClick={() => updateProj("Vendor Pop")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj7">
            <h4>Swing Memory Game</h4>
            <p>Projeto inicial da disciplina de Programação orientada a objetos, consiste em dois jogos de Memória onde um faz o uso do java swing e outro faz uso do console.</p>
            <img src={javaSvg} className="langicon col_1-3 row_4-6" alt="Java"></img>
            <img src={guiSvg} className="langicon col_2-4 row_4-6" alt="GUI"></img>
            <div className="projButton" onClick={() => updateProj("Swing Memory Game")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj6">
            <h4>Portfolio</h4>
            <p>Criado para mostrar de forma mais fluida os projetos que tenho trabalhado e as tecnologias que venho aprendendo.</p>
            <img src={reactSvg} className="langicon col_1-3 row_4-6" alt="React"></img>
            <img src={sassSvg} className="langicon col_2-4 row_4-6" alt="Sass"></img>                
            <div className="projButton" onClick={() => updateProj("Portfolio")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj5">
            <h4>Visar Livros</h4>
            <p>Projeto final da disciplina de linguagens de script, com suporte a navegadores antigos trata-se de uma página de busca integrada com a API de livros do Google.</p>
            <img src={HtmlSvg} className="langicon col_1-3 row_4-5" alt="HTML"></img>
            <img src={CssSvg} className="langicon col_2-4 row_4-5" alt="CSS"></img>
            <img src={bootstrapSvg} className="langicon col_3-5 row_4-5" alt="Bootstrap"></img>
            <img src={JavascriptSvg} className="langicon col_1-3 row_5-6" alt="Javascript"></img>
            <img src={webpackSvg} className="langicon col_2-4 row_5-6" alt="Webpack"></img>            
            <img src={babelSvg} className="langicon col_3-5 row_5-6 long_stk" alt="Babel"></img>
            <div className="projButton" onClick={() => updateProj("Visar Livros")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj4">
            <h4>Synonyms Detection Framework</h4>
            <p>Feito em 2019 como projeto da disciplina de Estruturas de Dados, capaz de realizar buscas de forma a detectar sinônimos do que for pesquisado.</p>
            <img src={pythonSvg} className="langicon col_1-3 row_4-6" alt="Python"></img>
            <div className="projButton" onClick={() => updateProj("Synonyms Detection Framework")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj3">
            <h4>Modelagem de Banco de Dados</h4>
            <p>Projeto final da disciplina de Banco de Dados 1, nele eu modelo um banco de dados relacional, passando pelos modelos Conceitual, Lógico e Físico.</p>
            <img src={mysqlSvg} className="langicon col_1-3 row_4-6" alt="MySql"></img>
            <div className="projButton" onClick={() => updateProj("Modelagem de Banco de Dados")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj2">
            <h4>Naval Battle</h4>
            <p>Feito em python trata-se de um jogo de batalha naval que pode ser jogado entre jogadores ou contra o computador</p>
            <img src={pythonSvg} className="langicon col_1-3 row_4-6" alt="Python"></img>
            <div className="projButton" onClick={() => updateProj("Naval Battle")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj1">
            <h4>Byte Barrage</h4>
            <p>Esse é meu primeiro projeto front-end, simula um site catalogo de venda de propriedades em jogos.</p>
            <img src={HtmlSvg} className="langicon col_1-3 row_4-6" alt="HTML"></img>
            <img src={CssSvg} className="langicon col_2-4 row_4-6" alt="CSS"></img>
            <div className="projButton" onClick={() => updateProj("Byte Barrage")}>
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
            <div className="Projects">
                {projSel.map(projeto => { return projeto })}

            </div>
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