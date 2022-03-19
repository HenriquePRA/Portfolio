import React from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate } from './dealNavigate';

const VisarLivros = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            Visar Livros
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

export default VisarLivros;