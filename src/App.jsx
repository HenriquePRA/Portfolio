import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import './css/main.css';

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
    const [ lang, setLang ] = useState("PT"); 

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/" 
                        exact 
                        element={
                            <Main 
                                setIsRedirect={setIsRedirect}
                                lang={lang}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/byteBarrage" 
                        exact 
                        element={
                            <ByteBarrage 
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/navalBattle" 
                        exact 
                        element={
                            <NavalBattle 
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />                

                    <Route 
                        path="/projetos/modelagemBD" 
                        exact 
                        element={
                            <ModelagemBD
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/synonymsFramework" 
                        exact 
                        element={
                            <SynonymsFramework 
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/visarLivros" 
                        exact 
                        element={
                            <VisarLivros 
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/portfolio" 
                        exact 
                        element={
                            <Portfolio 
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/swingMemoryGame" 
                        exact 
                        element={
                            <SwingMemoryGame 
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/vendorPop" 
                        exact 
                        element={
                            <VendorPop 
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/ifMktp" 
                        exact 
                        element={
                            <IfMktp 
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/mustDoList" 
                        exact 
                        element={
                            <MustDoList
                                isRedirect={isRedirect}
                                lang={lang}
                            />
                        }
                    />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
