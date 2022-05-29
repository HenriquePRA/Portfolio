import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

//import './css/main.css';

import Transitions from './components/util/Transitions';

import Main from './components/main/Main';

// Projects
import ByteBarrage from './components/projects/ByteBarrage'
import NavalBattle from './components/projects/NavalBattle'
import VisarLivros from './components/projects/VisarLivros'
import ModelagemBD from './components/projects/ModelagemBD';
import SynonymsFramework from './components/projects/SynonymsFramework';
import Portfolio from './components/projects/Portfolio';
import SwingMemoryGame from './components/projects/SwingMemoryGame';
import VendorPop from './components/projects/VendorPop';
import IfMktp from './components/projects/IfMktp';
import MustDoList from './components/projects/mustDoList';

// Main Application

let App = () => {

    const [ isRedirect, setIsRedirect ] = useState(false);
    const [ pageLoad, setPageload ] = useState(true);
    const [ onTransition, setOnTransition ] = useState(true);
    const [ lang, setLang ] = useState("PT"); 
    const [ darkMode, setDarkMode ] = useState(true);

    return (
        <div className = {darkMode ? "App dark-app" : "App light-app"}>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/" 
                        exact 
                        element={
                            <Main 
                                setIsRedirect={setIsRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/byteBarrage" 
                        exact 
                        element={
                            <ByteBarrage 
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/navalBattle" 
                        exact 
                        element={
                            <NavalBattle 
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />                

                    <Route 
                        path="/projetos/modelagemBD" 
                        exact 
                        element={
                            <ModelagemBD
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/synonymsFramework" 
                        exact 
                        element={
                            <SynonymsFramework 
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/visarLivros" 
                        exact 
                        element={
                            <VisarLivros 
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/portfolio" 
                        exact 
                        element={
                            <Portfolio 
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/swingMemoryGame" 
                        exact 
                        element={
                            <SwingMemoryGame 
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/vendorPop" 
                        exact 
                        element={
                            <VendorPop 
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/ifMktp" 
                        exact 
                        element={
                            <IfMktp 
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/mustDoList" 
                        exact 
                        element={
                            <MustDoList
                                isRedirect={isRedirect}
                                setLang={setLang}
                                lang={lang}
                                setPageload={setPageload}
                                pageLoad={pageLoad}
                                setOnTransition={setOnTransition}
                                onTransition={onTransition}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
            <Transitions
                setPageload={setPageload}
                pageLoad={pageLoad}
                setOnTransition={setOnTransition}
                onTransition={onTransition}
                darkMode={darkMode}
                page={"main"}
            />
        </div>
    )
}

export default App;
