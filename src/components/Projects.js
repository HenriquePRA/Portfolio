import React from 'react'
import HtmlSvg from '../img/tools/html-5.svg'
import CssSvg from '../img/tools/css.svg'
import JavascriptSvg from '../img/tools/javascript.svg'
import firebaseSvg from '../img/tools/firebase.svg'
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

const Projects = () => {

    return (
        <div className="Proj_container">
            <div className="blockDescription">
                <h3>Projetos</h3>
                <p>
                    Aqui estão os projetos que fiz por iniciativa própria ou por requisito de disciplinas na faculdade
                    esses projetos variam em nível de complexidade e tamanho.
                </p>
            </div>
            <div className="Projects">
                <div className="proj">
                    <h4>Must-Do List</h4>
                    <p>
                        Esse é meu primeiro desenvolvendo aplicações para plataformas android, trata-se de um
                        to do list com cadastro de usuários e dados persistentes
                    </p>
                    <img src={androidSvg} className="langicon one_of4_stk" alt="Android Icon"></img>
                    <img src={vueSvg} className="langicon two_of4_stk" alt="Vue Icon"></img>
                    <img src={springSvg} className="langicon three_of4_stk" alt="Spring Icon"></img>
                    <img src={mongoSvg} className="langicon four_of4_stk" alt="Mongo Icon"></img>

                    <button className="projButton">
                        <span>Ver Mais</span>
                    </button>
                </div>
                <div className="proj">
                    <h4>IF Mobile</h4>
                    <p>
                        Projeto final de bancos de dados relacionais da disciplina de banco de dados 2
                    </p>
                    <img src={postgreSvg} className="langicon one_of5_stk" alt="Postgres Icon"></img>
                    <img src={expressSvg} className="langicon two_of5_stk" alt="express Icon"></img>
                    <img src={reactSvg} className="langicon three_of5_stk" alt="react Icon"></img>
                    <img src={nodeSvg} className="langicon four_of5_stk" alt="Node Icon"></img>
                    <img src={bootstrapSvg} className="langicon five_of5_stk" alt="bootstrap Icon"></img>     

                    <button className="projButton">
                        <span>Ver Mais</span>
                    </button>
                </div>

                <div className="proj">
                    <h4>Vendor Pop</h4>
                    <p>Projeto final da disciplina de programação orientada a objetos, nesse projeto busca simular
                        em um aplicativo de vendas que pertence a uma rede de lanchonetes. 
                    </p>
                    <img src={angularSvg} className="langicon one_of3_stk" alt="Spring Icon"></img>
                    <img src={springSvg} className="langicon two_of3_stk" alt="Spring Icon"></img>
                    <img src={mysqlSvg} className="langicon three_of3_stk" alt="mysql Icon"></img>

                    <button className="projButton">
                        <span>Ver Mais</span>
                    </button>
                </div>
                <div className="proj">
                    <h4>Swing Memory Game</h4>
                    <p>Esse projeto consiste em dois jogos de Memória onde um faz o uso do java swing para ser 
                        jogado e outro faz o uso do console.
                    </p>
                    <img src={javaSvg} className="langicon one_stk" alt="Java Icon"></img>
                    <button className="projButton">
                        <span>Ver Mais</span>
                    </button>
                </div>

                <div className="proj">
                    <h4>React/Sass Portfolio</h4>
                    <p>Criei esse portfolio como um projeto para aprender e dominar o react, node e sass.</p>
                    <img src={reactSvg} className="langicon one_of2_stk" alt="React Icon"></img>
                    <img src={sassSvg} className="langicon two_of2_stk" alt="Sass Icon"></img>                
                    <button className="projButton">
                        <span>Ver Mais</span>
                    </button>
                </div>

                <div className="proj">
                    <h4>Engine de busca</h4>
                    <p>Feito na disciplina de estrutura de dados esse projeto possúi uma engine de busca que permite o usuário 
                        buscar curriculos em estruturas de dados variadas.
                    </p>
                    <img src={djangoSvg} className="langicon one_of2_stk" alt="Django Icon"></img>
                    <img src={bootstrapSvg} className="langicon two_of2_stk" alt="Bootstrap Icon"></img>                
                    <button className="projButton">
                        <span>Ver Mais</span>
                    </button>
                </div>

                <div className="proj">
                    <h4>My Book List</h4>
                    <p>Usando o servico firebase e uma api de livros esse projeto permite o cadastro de usuários e a avaliacao de livros por eles.</p>
                    <img src={HtmlSvg} className="langicon one_of4_stk" alt="HTML Icon"></img>
                    <img src={CssSvg} className="langicon two_of4_stk" alt="CSS Icon"></img>
                    <img src={JavascriptSvg} className="langicon three_of4_stk" alt="Javascript Icon"></img>
                    <img src={firebaseSvg} className="langicon four_of4_stk" alt="Firebase Icon"></img>
                    <button className="projButton">
                        <span>Ver Mais</span>
                    </button>
                </div>

                <div className="proj">
                    <h4>Naval Battle</h4>
                    <p>Esse projeto simula um jogo de batalha naval foi minha primeira experiencia com python.</p>
                    <img src={pythonSvg} className="langicon one_stk" alt="HTML Icon"></img>
                    <button className="projButton">
                        <span>Ver Mais</span>
                    </button>
                </div>

                <div className="proj">
                    <h4>Byte Barrage</h4>
                    <p>Esse é meu primeiro projeto front-end, simula um site catalogo de venda de propriedades em jogos.</p>
                    <img src={HtmlSvg} className="langicon one_of2_stk" alt="HTML Icon"></img>
                    <img src={CssSvg} className="langicon two_of2_stk" alt="CSS Icon"></img>
                    <button className="projButton">
                        <span>Ver Mais</span>
                    </button>
                </div>

                <div id="LoadProj">               
                    <button>Carregar Mais</button>
                </div>   
            </div>
        </div>
    )
}

export default Projects