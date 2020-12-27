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
                            <h2 className="detailHeader">
                                {projeto.name}
                            </h2>
                            {/* insert description if exists */}
                            {projeto.description[0] ? 
                                <p className="detailDescription">
                                    {projeto.description[0]}
                                </p> 
                            : 
                                null
                            }
                            {projeto.description[1] ? 
                                <p className="detailDescription">
                                    {projeto.description[1]}
                                </p> 
                            : 
                                null
                            }

                            {/* cards com tecnologias utilizadas */}
                            <h4>Ferramentas e técninas utilizadas</h4>
                            <div className="projDetailCards">
                                <div className="projLangCard">
                                
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        ) 
    } else return null
}

export default Details;