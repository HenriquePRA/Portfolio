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


const Projects = () => {

    return (
        <div className="Projects">
            <div className="proj">
                <h4>IF Mobile</h4>
                <p>Esse projeto consiste em dois jogos de Memória onde um faz o uso do java swing para ser 
                    jogado e outro faz o uso do console.
                </p>
                <img src={javaSvg} className="langicon" id="proj5-lang1" alt="Java Icon"></img>
                <button className="projButton">
                    <span>Ver Mais</span>
                </button>
            </div>

            <div className="proj">
                <h4>Mongo CRUD</h4>
                <p>Esse projeto consiste em dois jogos de Memória onde um faz o uso do java swing para ser 
                    jogado e outro faz o uso do console.
                </p>
                <img src={javaSvg} className="langicon" id="proj5-lang1" alt="Java Icon"></img>
                <button className="projButton">
                    <span>Ver Mais</span>
                </button>
            </div>
            <div className="proj">
                <h4>Swing Memory Game</h4>
                <p>Esse projeto consiste em dois jogos de Memória onde um faz o uso do java swing para ser 
                    jogado e outro faz o uso do console.
                </p>
                <img src={javaSvg} className="langicon" id="proj5-lang1" alt="Java Icon"></img>
                <button className="projButton">
                    <span>Ver Mais</span>
                </button>
            </div>

            <div className="proj">
                <h4>React/Sass Portfolio</h4>
                <p>Criei esse portfolio como um projeto para aprender e dominar o react, node e sass.</p>
                <img src={reactSvg} className="langicon" id="proj4-lang1" alt="React Icon"></img>
                <img src={sassSvg} className="langicon" id="proj4-lang2" alt="Sass Icon"></img>                
                <button className="projButton">
                    <span>Ver Mais</span>
                </button>
            </div>

            <div className="proj">
                <h4>Engine de busca</h4>
                <p>Feito na disciplina de estrutura de dados esse projeto possúi uma engine de busca que permite o usuário 
                    buscar curriculos em estruturas de dados variadas.
                </p>
                <img src={djangoSvg} className="langicon" id="proj6-lang1" alt="Django Icon"></img>
                <img src={bootstrapSvg} className="langicon" id="proj6-lang3" alt="Bootstrap Icon"></img>                
                <button className="projButton">
                    <span>Ver Mais</span>
                </button>
            </div>

            <div className="proj">
                <h4>My Book List</h4>
                <p>Usando o servico firebase e uma api de livros esse projeto permite o cadastro de usuários e a avaliacao de livros por eles.</p>
                <img src={HtmlSvg} className="langicon" id="proj3-lang1" alt="HTML Icon"></img>
                <img src={CssSvg} className="langicon" id="proj3-lang2" alt="CSS Icon"></img>
                <img src={JavascriptSvg} className="langicon marginBt8" id="proj3-lang3" alt="Javascript Icon"></img>
                <img src={firebaseSvg} className="langicon marginBt8" id="proj3-lang4" alt="Firebase Icon"></img>
                <button className="projButton">
                    <span>Ver Mais</span>
                </button>
            </div>

            <div className="proj">
                <h4>Naval Battle</h4>
                <p>Esse projeto simula um jogo de batalha naval foi minha primeira experiencia com python.</p>
                <img src={pythonSvg} className="langicon" id="proj2-lang1" alt="HTML Icon"></img>
                <button className="projButton">
                    <span>Ver Mais</span>
                </button>
            </div>

            <div className="proj">
                <h4>Byte Barrage</h4>
                <p>Esse é meu primeiro projeto front-end, simula um site catalogo de venda de propriedades em jogos.</p>
                <img src={HtmlSvg} className="langicon" id="proj1-lang1" alt="HTML Icon"></img>
                <img src={CssSvg} className="langicon" id="proj1-lang2" alt="CSS Icon"></img>
                <button className="projButton">
                    <span>Ver Mais</span>
                </button>
            </div>

            <div id="LoadProj">               
                {/* <button>Carregar Mais</button> */}
            </div>   
        </div>
    )
}

export default Projects