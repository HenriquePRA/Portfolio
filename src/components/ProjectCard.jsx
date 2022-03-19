import React from 'react'
import DynamicImg from './DynamicIMG'

const ProjectCard = (props) => {

	const tool = props.tool;

	return (
		<div className="projLangCard">
			<div className="projLangHeader">
				<DynamicImg nome={tool.name}/>
				<div className="projLangName">
					<h4>{tool.name}</h4>
				</div>
			</div>

			{/*
				Mapeamento da descrição de cada ferramenta dependendo do tipo de 
				descrição que estiver atribuida a ferramenta
			*/}
			<div style={{"margin":"1rem"}}>
				{tool.type_description === "list" ? 
					<ul className="langUseList">
						{tool.description.map((item) =>{
							return (
								<li key={tool.name + "_description_" + tool.description.indexOf(item)}>
									<strong>{item.header}</strong>
									<p>{item.text}</p>
								</li>
							)
						})}
					</ul>
				:
					<p>{tool.description}</p>
				}
			</div>
		</div>
	)
}

export default ProjectCard;