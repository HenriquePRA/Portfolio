import React from 'react';
import { useNavigate } from "react-router-dom";
import { dealNavigate } from './UtilFunctions';

const MustDoList = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            Must Do List
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

export default MustDoList;