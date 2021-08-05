import React from 'react'
import DynamicImg from './DynamicIMG'

const ProjectCard = (props) => {

	const ferramenta = props.ferramenta;

	return (
		<div
			className="projLangCard" 
			key={ferramenta.name}
		>
			<div className="projLangHeader">
				<DynamicImg nome={ferramenta.name}/>
				<div className="projLangName">
					<h4>{ferramenta.name}</h4>
				</div>
			</div>
			{/*Mapeamento da descrição de cada ferramenta*/}
			<div style={{"margin":"1rem"}}>
				{ferramenta.type_description === "text" ? 
					<p>{ferramenta.description}</p>
				:
					<ul className="langUseList">
						{ferramenta.description.map((item) =>{
							return (
								<li>
									<strong>{item.header}</strong>
									<p>{item.text}</p>
								</li>
							)
						})}
					</ul>
				}
			</div>
		</div>
	)
}

export default ProjectCard;