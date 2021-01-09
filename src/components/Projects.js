import React, { useState } from 'react'
import HtmlSvg from '../img/tools/html-5.svg'
import CssSvg from '../img/tools/css.svg'
import JavascriptSvg from '../img/tools/javascript.svg'
import pythonSvg from '../img/tools/python.svg'
import reactSvg from '../img/tools/react.svg'
import sassSvg from '../img/tools/sass.svg'
import javaSvg from '../img/tools/java.svg'
import djangoSvg from '../img/tools/django.svg'
import bootstrapSvg from '../img/tools/bootstrap.svg'
import postgreSvg from '../img/tools/postgresql.svg'
import expressSvg from '../img/tools/express.svg'
import nodeSvg from '../img/tools/nodejs.svg'
import springSvg from '../img/tools/spring.svg'
import mysqlSvg from '../img/tools/mysql.svg'
import angularSvg from '../img/tools/angular.svg'
import androidSvg from '../img/tools/android.svg'
import vueSvg from '../img/tools/vue.svg'
import mongoSvg from '../img/tools/mongodb.svg'
import webpackSvg from '../img/tools/webpack.svg'
import babelSvg from '../img/tools/babel.svg'
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
            <img src={androidSvg} className="langicon one_of4_stk" alt="Android"></img>
            <img src={vueSvg} className="langicon two_of4_stk" alt="Vue"></img>
            <img src={springSvg} className="langicon three_of4_stk" alt="Spring"></img>
            <img src={mongoSvg} className="langicon four_of4_stk" alt="Mongo"></img>

            <div className="projButton" onClick={() => updateProj("Must-Do List")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj9">
            <h4>IF Mobile</h4>
            <p>
                Projeto final de bancos de dados relacionais da disciplina de banco de dados 2
            </p>
            <img src={postgreSvg} className="langicon one_of5_stk" alt="Postgres"></img>
            <img src={expressSvg} className="langicon two_of5_stk" alt="express"></img>
            <img src={reactSvg} className="langicon three_of5_stk" alt="react"></img>
            <img src={nodeSvg} className="langicon four_of5_stk" alt="Node"></img>
            <img src={bootstrapSvg} className="langicon five_of5_stk" alt="bootstrap"></img>     

            <div className="projButton" onClick={() => updateProj("IF Mobile")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj8">
            <h4>Vendor Pop</h4>
            <p>Projeto final da disciplina de programação orientada a objetos, esse projeto trata-se app de vendas. 
            </p>
            <img src={angularSvg} className="langicon one_of3_stk" alt="Spring"></img>
            <img src={springSvg} className="langicon two_of3_stk" alt="Spring"></img>
            <img src={mysqlSvg} className="langicon three_of3_stk" alt="mysql"></img>

            <div className="projButton" onClick={() => updateProj("Vendor Pop")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj7">
            <h4>Swing Memory Game</h4>
            <p>Esse projeto consiste em dois jogos de Memória onde um faz o uso do java swing e outro faz o console.</p>
            <img src={javaSvg} className="langicon one_stk" alt="Java"></img>
            <div className="projButton" onClick={() => updateProj("Swing Memory Game")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj6">
            <h4>React/Sass Portfolio</h4>
            <p>Criei esse portfolio como um projeto a fim de dominar o react com sass e exibir meus projetos.</p>
            <img src={reactSvg} className="langicon one_of2_stk" alt="React"></img>
            <img src={sassSvg} className="langicon two_of2_stk" alt="Sass"></img>                
            <div className="projButton" onClick={() => updateProj("React/Sass Portfolio")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj5">
            <h4>Modelagem de Banco de Dados</h4>
            <p>Feito na disciplina de banco de dados 1 neste projeto eu modelo um banco de dados relacional.</p>
            <img src={mysqlSvg} className="langicon one_stk" alt="MySql"></img>
            <div className="projButton" onClick={() => updateProj("Modelagem de Banco de Dados")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj4">
            <h4>Engine de busca</h4>
            <p>Projeto final de estruturas de dados esse projeto resume-se em uma engine de busca.</p>
            <img src={djangoSvg} className="langicon one_of2_stk" alt="Django"></img>
            <img src={bootstrapSvg} className="langicon two_of2_stk" alt="Bootstrap"></img>                
            <div className="projButton" onClick={() => updateProj("Engine de busca (Framework de detecção Sinonímia)")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj3">
            <h4>Visar Livros</h4>
            <p>Projeto final da disciplina de linguagens de script, com suporte a navegadores antigos trata-se de uma página de busca integrada com a API de livros do Google.</p>
            <img src={HtmlSvg} className="langicon one_of6_stk" alt="HTML"></img>
            <img src={CssSvg} className="langicon two_of6_stk" alt="CSS"></img>
            <img src={bootstrapSvg} className="langicon three_of6_stk" alt="Bootstrap"></img>
            <img src={JavascriptSvg} className="langicon four_of6_stk" alt="Javascript"></img>
            <img src={webpackSvg} className="langicon five_of6_stk" alt="Webpack"></img>            
            <img src={babelSvg} 
                className="langicon six_of6_stk" 
                style={{"height": "auto", "width": "4rem", "justifySelf":"right"}}
                alt="Babel"
            ></img>
            <div className="projButton" onClick={() => updateProj("Visar Livros")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj2">
            <h4>Naval Battle</h4>
            <p>Feito em python trata-se de um jogo de batalha naval que pode ser jogado entre jogadores ou contra o computador</p>
            <img src={pythonSvg} className="langicon one_stk" alt="HTML"></img>
            <div className="projButton" onClick={() => updateProj("Naval Battle")}>
                <span>VER MAIS</span>
            </div>
        </div>,
        <div className="proj" key="prj1">
            <h4>Byte Barrage</h4>
            <p>Esse é meu primeiro projeto front-end, simula um site catalogo de venda de propriedades em jogos.</p>
            <img src={HtmlSvg} className="langicon one_of2_stk" alt="HTML"></img>
            <img src={CssSvg} className="langicon two_of2_stk" alt="CSS"></img>
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