import React from 'react'
import ProjectCard from './ProjectCard'


const Project = (props) => {
	if ((Object.keys(props.projdata).length !== 0) && (props.showproj)) {
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

					console.log(projeto)

					return (
						<div className="projdetailCont">
							<div className="projDetailBlock" key={projeto.name}>
								<div 
									className="fechar"
									onClick={() => props.setShowproj(false)}
								>
								</div>
								<h2 className="detailHeader">
									{projeto.name}
								</h2>
								<p className="detailDescription">
									{projeto.objective}
								</p>
								<div 
									className="projDetailCards"
								>
									<h3>
										Ferramentas
									</h3>
									{projeto.tools.map((ferramenta) => {
										return(
											<ProjectCard 
												ferramenta={ferramenta}
												projsize={projeto.tools.length}
											/>
										)
									})}

									{/*carrosel com as imagens*/}
									<div className="slideshow-container">
										{projeto.img.map((link) => {
											return (
												<div className="mySlides fade">
													<div className="numbertext">
														{projeto.img.indexOf(link)} / {projeto.img.length}
													</div>
													<img src={link} className="projLinkImg" />
												</div>
											)
										})}					
									</div>
								</div>
							</div>
						</div>

					)
				})}
			</div>
		)
	} else return null
}

export default Project;