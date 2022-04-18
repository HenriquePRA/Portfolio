import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate, showImg, hideImg } from './ultil';
import DynamicIMG from '../DynamicIMG';

import Github from '../../img/tools/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/synonymsFramework_1.jpg'
import Img2 from '../../img/project/synonymsFramework_2.svg'
import Img3 from '../../img/project/synonymsFramework_3.jpg'
import Img4 from '../../img/project/synonymsFramework_4.jpg'

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
                                () => window.location.href = "https://github.com/HenriquePRA/Synonyms-Detection-Framework"
                            }
                        >
                            <img src={Github} alt="Github"></img> 
                            <span>Ir ao Repositório</span>
                        </div>
                    </div>
                    
                    {/* Processo de carga */}
                    <div className="projLangHeader">
                        <DynamicIMG nome={"Python"}/>
                        <div className="projLangName">
                            <h4>Carga da Base de dados</h4>
                        </div>
                    </div>
                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            A parte de carga é feita pela função CreatDicionario() essa função utiliza a biblioteca csv do python, 
                            ela abre o arquivo csv com aproximadamente 1600 registros não tratados e para cada registro do 
                            arquivo csv é criado um dicionário de dados de acordo.
                        </p>
                    </div>

                    {/* Dados Estatísticos sobre a Base de Dados*/}
                    <div className="projLangHeader">
                        <DynamicIMG nome={"Python"}/>
                        <div className="projLangName">
                            <h4>Dados Estatísticos sobre a Base de Dados</h4>
                        </div>
                    </div>
                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            A geração de dados estatísticos depende apenas da função estatisitcas() que recebe como argumento 
                            a lista de currículos atualmente carregada, que caso não esteja carregada retornará uma mensagem 
                            de erro. caso essa lista exista a função retorna ao usuário o número de currículos, número de palavras, 
                            porcentagem de Graduações, Especializações, Mestrados, Doutorados e Pós Doutorados.
                        </p>
                    </div>
                    
                    <div className="loneImg">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img1} 
                                className="width_100"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} 
                                />
                            <p className="ml_1_auto">
                                <em>Resultado da geração de dados estatísticos</em>
                            </p>
                        </div>
                    </div> 

                    {/* Framework de busca */}
                    <div className="projLangHeader">
                        <DynamicIMG nome={"Python"}/>
                        <div className="projLangName">
                            <h4>Framework de Busca</h4>
                        </div>
                    </div>

                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            São exibidas as opções de pesquisa baseadas nas seguintes chaves:
                        </p>
                        <ul className="projDescriptionList">
                            <li>Graduação</li>
                            <li>Especialização</li>
                            <li>Mestrado</li>
                            <li>Doutorado</li>
                            <li>Pós-Doutorado</li>        
                        </ul>
                        <p>
                            Após o usuário informar a qualificação desejada desejada outro input 
                            espera receber uma string que será utilizada como filtro para o campo 
                            qualificação de todos os registros.
                        </p>
                        <p>
                            Com a chave qualificação e a string com área do conhecimento uma função percorre 
                            todos os registros carregados utilizando uma implementação da distância 
                            de edição damerau levenshtein para comparar a string informada com cada string 
                            armazenada no array da qualificação cuja chave foi informada.
                        </p>
                    </div>

                    <div className="loneImg mt_1 mb_1">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img2} 
                                className="width_100"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "horizontal"))} 
                                />
                            <p className="ml_1_auto">
                                <em>Definição Damerau–Levenshtein distance</em>
                            </p>
                        </div>
                    </div>

                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            A comparação é feita ignorando caracteres com acentos e com todas os caracteres de ambas 
                            as strings em caixa alta, e por fim caso o resultado da comparação apresentar uma 
                            similaridade aceitável entre ambas as strings o currículo do docente é inserido ao 
                            final de uma lista que é retornada ao usuário.
                        </p>
                    </div>

                    <div className="loneImg mt_1 mb_1">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img3} 
                                className="width_80 ml_1_auto"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} 
                                />
                            <p className="ml_1_auto">
                                <em>Resultado da Busca</em>
                            </p>
                        </div>
                    </div>

                    {/* Sobre */}
                    <div className="projLangHeader">
                        <DynamicIMG nome={"Python"}/>
                        <div className="projLangName">
                            <h4>Sobre </h4>
                        </div>
                    </div>
                    <div className="toolDetail pt_0 pb_1">
                        <p>
                            A opção sobre explica em mais detalhes o funcionamento interno do projeto, desde a 
                            estrutura do dicionário usado pelos registros até a descrição detalhada de funções do
                            projeto. 
                        </p>
                    </div>

                    <div className="loneImg mt_1">
                        <div className="loneImgSubContainer">
                            <img 
                                src={Img4} 
                                className="width_100"
                                alt="Imagem Modelo Entidade-Relacionamento" 
                                onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} 
                                />
                            <p className="ml_1_auto">
                                <em>Exibição do Sobre</em>
                            </p>
                        </div>
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