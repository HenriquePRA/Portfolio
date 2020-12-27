import React from 'react'

const Details = (props) => {
    if (Object.keys(props.projdata).length !== 0) {

        let dados = [props.projdata]

        return (
            <div 
                className="grayarea"
                style={
                    props.showproj ? 
                        {"display":"flex"} 
                    : 
                        {"display":"none"}
                }
            >
                {dados.map((projeto) => {
                    return (
                        <div className="projDetailBlock" key={projeto.name}>
                            <h3 className="detailHeader">
                                {projeto.name}
                            </h3>
                            <p className="detailDescription">
                                {projeto.descrição}
                            </p>
                        </div>
                    )
                })}
            </div>
        ) 
    } else return null
}

export default Details;