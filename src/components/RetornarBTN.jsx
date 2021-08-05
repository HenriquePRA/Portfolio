import React from 'react';

let RetornarBTN = (props) => {
    return (
        <div
            className="retornar"
            onClick={() => props.setShowproj(false)}
            style={props.showproj ? 
                {"display": "flex"} 
            : 
                {"display": "none"}
            }
        >
            <span>
                Voltar
            </span>
        </div>
    )
}

export default RetornarBTN;