import React from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate } from './ultil';

const ReactPortfolio = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            React Portfolio
            <button
                onClick={() => {
                    dealNavigate(props.isRedirect, navigate)
                }}
            >
                <span>
                    {props.isRedirect ? "VOLTAR" : "IR PARA O PORTFOLIO"}
                </span>
            </button>
        </div>
    )

}

export default ReactPortfolio;