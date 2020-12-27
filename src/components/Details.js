import React from 'react'

const Details = (props) => {
    if (Object.keys(props.projdata).length !== 0) {
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
                <div className="projDetailBlock">
                    <h3 className="detailHeader">

                    </h3>
                    <p className="detailDescription">

                    </p>

                    <div className="">

                    </div>
                </div>
            </div>
        ) 
    } else return null
}

export default Details;