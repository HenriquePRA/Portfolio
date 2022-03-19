import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import './css/main.css';

import Portfolio from './components/Portfolio';

// Projects
import ByteBarrage from './components/projects/ByteBarrage'
import NavalBattle from './components/projects/NavalBattle'
import VisarLivros from './components/projects/VisarLivros'
import ModelagemBD from './components/projects/ModelagemBD';
import SynonymsFramework from './components/projects/SynonymsFramework';
import ReactPortfolio from './components/projects/reactPortfolio';
import SwingMemoryGame from './components/projects/SwingMemoryGame';
import VendorPop from './components/projects/VendorPop';
import IfMktp from './components/projects/IfMktp';
import MustDoList from './components/projects/mustDoList';

// Main Application

let App = () => {

    const [ isRedirect, setIsRedirect ] = useState(false);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/" 
                        exact 
                        element={
                            <Portfolio 
                                setIsRedirect={setIsRedirect}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/byteBarrage" 
                        exact 
                        element={
                            <ByteBarrage 
                                isRedirect={isRedirect}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/navalBattle" 
                        exact 
                        element={
                            <NavalBattle 
                                isRedirect={isRedirect}
                            />
                        }
                    />                

                    <Route 
                        path="/projetos/modelagemBD" 
                        exact 
                        element={
                            <ModelagemBD
                                isRedirect={isRedirect}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/synonymsFramework" 
                        exact 
                        element={
                            <SynonymsFramework 
                                isRedirect={isRedirect}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/visarLivros" 
                        exact 
                        element={
                            <VisarLivros 
                                isRedirect={isRedirect}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/reactPortfolio" 
                        exact 
                        element={
                            <ReactPortfolio 
                                isRedirect={isRedirect}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/swingMemoryGame" 
                        exact 
                        element={
                            <SwingMemoryGame 
                                isRedirect={isRedirect}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/vendorPop" 
                        exact 
                        element={
                            <VendorPop 
                                isRedirect={isRedirect}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/ifMktp" 
                        exact 
                        element={
                            <IfMktp 
                                isRedirect={isRedirect}
                            />
                        }
                    />

                    <Route 
                        path="/projetos/mustDoList" 
                        exact 
                        element={
                            <MustDoList
                                isRedirect={isRedirect}
                            />
                        }
                    />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
