import React from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate } from './dealNavigate';

const IfMktp = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            IF Marketplace
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

export default IfMktp;