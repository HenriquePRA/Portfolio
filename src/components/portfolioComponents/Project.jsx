import React from 'react'
import ProjectCard from './ProjectCard'
import svgSetaDireita from '../../img/misc/seta-direita.svg'
import svgSetaEsquerda from '../../img/misc/seta-esquerda.svg'


// Recebe em props um objeto contendo todas as caracteristicas do projeto
// sendo obrigatório a existencia de project.name, project.objective

const Project = (props) => {

	let projeto = props.projdata
	
	return (
		<div>
			<div
				className="retornar"
				onClick={() => props.setShowproj(false)}
			>
				<span>
					Voltar
				</span>
			</div>
			<div className="grayarea">
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
							{projeto.tools.map((tool) => {
								return(
									<ProjectCard 
										tool={tool}
										key={tool.name+"_"+projeto.name}
									/>
								)
							})}
						</div>
						<h3 className="detailHeader">
								Screenshots
						</h3>
						<div className="projectScreenshots">
							{/* Header com as setas de controle e contador dos Screenshots */}
							<div id="carrNavCont">
								<div style={{"display": "flex"}}>
									<div className="screenshotBtnPrx">
										<img src={svgSetaEsquerda} alt="Esquerda" />
									</div>
									<div className="screenshotBtnAnt">
										<img src={svgSetaDireita} alt="Direita" />
									</div >
								</div>									
								<div className="dotsContainer">
									
								</div>							
							</div>
							<div className="carrouselNav">

							</div>
						</div>					
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project;