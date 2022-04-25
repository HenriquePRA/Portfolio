import React,{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate, showImg, hideImg } from './UtilFunctions';
import DynamicIMG from '../util/DynamicIMG';

import Github from '../../img/tools/icons/github.svg'
import CruzSvg from '../../img/misc/cruz.svg'
import Checkmark from '../../img/misc/check.svg'

import Img1 from '../../img/project/navalBattle_1.jpg'
import Img2 from '../../img/project/navalBattle_2.jpg'
import Img3 from '../../img/project/navalBattle_3.jpg'

import '../../css/main.css';

const NavalBattle = (props) => {
    
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
                            <h2>Naval Battle</h2>
                        </div>
                    </div>
                    <p className="detailDescription">
                        Feito em python como projeto final da disciplina de Algoritimo e Programação Estruturada, 
                        trata-se de um jogo de batalha naval que pode ser jogado usando o console do python no modo 
                        jogador contra jogador ou jogador contra bot, faz uso de modularização, funções, POO básico, 
                        e estruturas de dados simples.
                    </p>

                    <div className="projBtn">
                        <div className='repoLinkButton greenCheckBg'>
                            <img src={Checkmark} alt="greenCheck"></img> 
                            <span>Projeto Finalizado</span>
                        </div>

                        <div 
                            className='repoLinkButton'
                            onClick={
                                () => window.location.href = "https://github.com/HenriquePRA/Naval-Battle"
                            }
                        >
                            <img src={Github} alt="Github"></img> 
                            <span>Ir ao Repositório</span>
                        </div>
                    </div>

                    
                    <div className="projLangHeader">
                        <DynamicIMG type="icon" name={"Python"}/>
                        <div className="projLangName">
                            <h4>Características </h4>
                        </div>
                    </div>
                    <div className="toolDetail">
                        <p style={{"margin":"0"}}>
                            Possúi 5 módulos: main.py, Escolha.py, Jogador.py, Embarcacao.py, Partida.py, PosicionarFrota.py
                        </p>

                        <ul className="projDescriptionList">
                            <li key="main_file_description">
                                <p>
                                    main.py - Módulo principal, responsável por iniciar e finalizar o 
                                    jogo e permite que o usuário escolha o modo de jogo, faz uso dos modulos 
                                    Jogador.py, Escolha.py e Partida.py
                                </p>
                            </li>
                            <div className="loneImg">
                                <div className="loneImgSubContainer">
                                    <img src={Img1} alt="Menu Principal" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} />
                                    <p className="ml_1_auto">
                                        <em>Menu Principal.</em>
                                    </p>
                                </div>
                            </div>
                            <li>
                                <p>
                                    Jogador.py - Módulo que contem a classe Jogador, responsável por guardar a frota, 
                                    numero de embarcoes, matrizes usadas durante o posicionamento e o jogo, string formada 
                                    a partir da matriz do jogo, o tipo de jogador(player ou bot) e o nome do jogador.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Embarcacao.y - Módulo que contem a classe Embarcacao, responavel por armazenar o número 
                                    de ataques recebidos por uma embarcação o maximo de ataques que uma embarcação pode receber 
                                    dependendo do seu tipo, a quantidade de células do tabuleiro que a embarcação ocupa, o seu tipo, 
                                    se esta posicionada em um tabuleiro e as posiçoes que ocupa.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Partida.py - Módulo que contém a função responsável por dar andamento ao jogo em si, invoca variadas 
                                    funções para dar andemento ao jogo.
                                </p>
                            </li>
                            <div className="loneImg">
                                <div className="loneImgSubContainer">
                                    <img src={Img2} alt="Jogadas durante uma partida" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} />
                                    <p className="ml_1_auto">
                                        <em>Jogadas durante uma partida.</em>
                                    </p>
                                </div>
                            </div>
                            <li>
                                <p>
                                    PosicionarFrota.py - Módulo que contém funções responsáveis por posicionar a frota de um jogador em seus tabuleiro, 
                                    apesar do seu objetivo ser simples sua criação foi a parte mais complexa do projeto tendo em vista as regras do jogo 
                                    que são:
                                </p>
                                <ul>
                                    <li>As embarcações não devem estar em células adjacentes umas das outras</li>
                                    <li>As embarcações devem estar posicionadas horizontalmente e verticalmente</li>
                                    <li>Todas as embarcaçoes devem formar uma linha reta no tabuleiro</li>
                                </ul>
                            </li>
                            
                            <div className="loneImg">
                                <div className="loneImgSubContainer">
                                    <img src={Img3} alt="menu_principal" onClick={(e) => (showImg(e.currentTarget, setShowPic, setSelpic, "vertical"))} />
                                    <p className="ml_1_auto">
                                        <em>
                                            Finalização de uma partida.
                                        </em>
                                    </p>                                    
                                </div>
                            </div>
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

export default NavalBattle;