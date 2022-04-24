import React, { useState, useEffect } from 'react';

import '../../css/main.css';

import Navbar from '../util/Navbar';
import Profile from './Profile';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

let Main = (props) => {

    const [blocoatual, setblocoatual] = useState('sobre');

    // efeito que detecta e estiliza baseado no scroll
    useEffect(() => {

        // função que dependendo do dispositivo retorna o tamanho + espaçamento dos módulos

        const calculapagina = (view) => {
            if (view === 'desktop') {
                return {
                    'b1' : (Math.round((document.body.offsetHeight/100)*35) + 200),
                    'b2' : Math.round((document.body.offsetHeight/100)*36)
                }
            } else {
                return {
                    'b1' : (Math.round((document.body.offsetHeight/100)*29) + 200),
                    'b2' : (Math.round((document.body.offsetHeight/100)*50) + 100)
                }
            }
        }

        // função que define o bloco atual baseada na posição do scroll na janela e 
        // tamanho dos blocos

        const lidaScroll = () => {
            let tamanhos = {}
            let posiAtual = window.innerHeight + window.scrollY;
            
            if (document.body.offsetWidth > 850) {
                tamanhos = calculapagina('desktop')
            } else {
                tamanhos = calculapagina('mobile')
            }
            if ((posiAtual <= tamanhos['b1']) && (blocoatual !== 'sobre')) {
                setblocoatual('sobre')
            } else if ((
                posiAtual <= (tamanhos['b1'] + tamanhos['b2']) 
                && (posiAtual > tamanhos['b1'])
                && (blocoatual !== 'projetos')
            )) {
                setblocoatual('projetos')
            } else if ((
                posiAtual > (tamanhos['b1'] + tamanhos['b2'])) 
                && (blocoatual !== 'contato')
            ){
                setblocoatual('contato')
            }
        }

        // adição e remoção do listener de montagem
        window.addEventListener("scroll", lidaScroll, {passive: true})
        return () => window.removeEventListener("scroll", lidaScroll)
    }, [blocoatual, setblocoatual])

    return (
        <div className={"Portfolio"}>
            <Navbar
                blocoatual={blocoatual}
            />
            <Profile />
            <About />
            <Projects 
                setIsRedirect={props.setIsRedirect}
            />
            <Contact />
        </div>
    )
}

export default Main;
