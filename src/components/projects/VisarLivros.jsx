import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate, showImg, hideImg } from './ultil';
import DynamicIMG from '../DynamicIMG';

import Github from '../../img/tools/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/visarLivros_1.jpg'
import Img2 from '../../img/project/visarLivros_2.jpg'
import Img3 from '../../img/project/visarLivros_3.jpg'
import Img4 from '../../img/project/visarLivros_4.jpg'

import '../../css/main.css';

const VisarLivros = (props) => {
    
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
                            <h2>Visar Livros</h2>
                        </div>
                    </div>
                    <p className="detailDescription">
                        Feito em 2019 usando HTML, CSS, Javascript, Bootstrap e Babeljs como projeto final 
                        da disciplina de linguagens de script, trata-se de uma página web integrada a API 
                        de livros do google, permite que o usuário realize buscas baseadas em título, autor, 
                        editora ou gênero de um livro.
                    </p>

                    <div className="projBtn">
                        <div className='repoLinkButton greenCheckBg'>
                            <img src={Checkmark} alt="greenCheck"></img> 
                            <span>Projeto Finalizado</span>
                        </div>

                        <div 
                            className='repoLinkButton'
                            onClick={
                                () => window.location.href = "https://github.com/HenriquePRA/Visar-Livros"
                            }
                        >
                            <img src={Github} alt="Github"></img> 
                            <span>Ir ao Repositório</span>
                        </div>
                    </div>
                    
                    {/* Requisitos funcionais do projeto */}
                    <div className="projLangHeader">
                        <DynamicIMG nome={"Javascript"}/>
                        <div className="projLangName">
                            <h4>Requisitos funcionais do projeto</h4>
                        </div>
                    </div>
                    <div className="toolDetail">
                        <ul className="projDescriptionList">
                            <li>
                                <strong>Uso de programação funcional</strong>
                                <p>todos os scripts do projeto interagem com a página quase que exclusivamente através de funções.</p>
                            </li>
                            <li>
                                <strong>Criação de componentes dinâmicos</strong>
                                <p>
                                    Tanto o componente que exibe os resultados quanto o que exibe um livro são dinâmicos onde ambos 
                                    receber diferentes dados de um livro ou conjunto de livros de acordo com o que o usuário pesquisa 
                                    ou seleciona.
                                </p>
                            </li>
                            <li>
                                <strong>Uso do FETCH API e JSON</strong>
                                <p>
                                    Ao carregar a página, faz uso do fetch API para carregar um JSON com as informações de um conjunto 
                                    de livros e inseri-los no código html da página.
                                </p>
                            </li>
                            <li>
                                <strong>Uso de RegExp</strong>
                                <p>Usa de expressões regulares para remover tags html que geralmente podem estar contidas nas informações de um livro.</p>
                            </li>
                            <li>
                                <strong>Uso de pacotes do JS</strong>
                                <p>
                                    Faz uso do babeljs para transpilar o código javascript moderno usado no projeto para um código javascript em uma 
                                    versão antiga de modo que os scripts sejam executados sem problemas em navegadores mais antigos.
                                </p>
                            </li>
                            <li>
                                <strong>Uso de módulos com Webpack</strong>
                                <p>
                                    Faz uso de 2 módulos, pushcard.js que exporta funções responsáveis por receber, tratar e inserir 
                                    dados de um JSON no código html da página, e search.js que exporta funções responsáveis por realizar 
                                    as buscas google books do que for pesquisado.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Características*/}
                    <div className="projLangHeader">
                        <DynamicIMG nome={"Webpack"}/>
                        <div className="projLangName">
                            <h4>Características</h4>
                        </div>
                    </div>
                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            Trata-se de uma single page application ou seja faz uso de uma página HTML que é modificada conforme o usuário 
                            a usa, apesar de fazer o uso do framework de CSS bootstrap possui folha de estilos própria.
                        </p>
                    </div>
                    
                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img1} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} 
                            />
                            <p className="ml_1_auto">
                                <em>Módulo de pesquisa</em>
                            </p>
                        </div>
                    </div>

                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            A pesquisa retorna um JSON com múltiplos registros que contêm informações sobre livros, esses registros são 
                            mapeados de modo que cada livro se transforma em um card com imagem, título e descrição reduzida.
                        </p>
                    </div>

                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img2} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} 
                            />
                            <p className="ml_1_auto">
                                <em>Página de resultados em estado inicial</em>
                            </p>
                        </div>
                    </div>

                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            Ao clicar em um card é feita outra requisição à API do google books que retorna todos o dados do livro, 
                            esses dados são inseridos em um modal que irá conter o título, autores, gêneros, descrição e link para 
                            a página do livro no google books.
                        </p>
                    </div>
                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img3} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} 
                            />
                            <p className="ml_1_auto">
                                <em>Exibição detalhada de um livro</em>
                            </p>
                        </div>
                    </div>

                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            Apesar de fazer o uso do framework bootstrap possui folha de estilos própria de forma a garantir 
                            responsividade de 350px até 4k.
                        </p>
                    </div>

                    <div className="loneImg mt_0 mb_0">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img4} 
                                className="ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} 
                            />
                            <p className="ml_1_auto">
                                <em>Exibição detalhada de um livro</em>
                            </p>
                        </div>
                    </div>

                    <div className="projLangHeader">
                        <DynamicIMG nome={"Bootstrap"}/>
                        <div className="projLangName">
                            <h4>Executando o Projeto localmente</h4>
                        </div>
                    </div>

                    <div className="toolDetail">
                        <ol className="projDescriptionList">
                            <li>
                                Tenha instalado o git a partir da versão 2.2 e o nodejs a partir da versão 12.
                            </li>
                            <li>
                                Em um local de preferência clone o repositório usando o comando git clone.
                            </li>
                            <li>
                                Abra um terminal e Navegue até diretório clonado.
                            </li>
                            <li>
                                No terminal execute o comando npm install para instalar as dependências do projeto.
                            </li>
                            <li>
                                Ainda no terminal execute o comando npm start subir o projeto localmente.
                            </li>
                        </ol>
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

export default VisarLivros;