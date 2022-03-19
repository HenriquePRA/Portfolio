import React from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate } from './dealNavigate';

const SynonymsFramework = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            Synonyms Detection Framework
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

export default SynonymsFramework;