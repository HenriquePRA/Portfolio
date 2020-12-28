import React from 'react'
import DynamicImg from './DynamicIMG'
import cruzSvg from '../img/misc/cruz.svg'


const Details = (props) => {
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
					return (
						<div className="projDetailBlock" key={projeto.name}>
							<div 
								className="fechar"
								onClick={() => props.setShowproj(false)}
							>
								<img src={cruzSvg} className="fechar_btn" alt="fechar modal" />
							</div>
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
							<h4>Ferramentas Utilizadas</h4>
							<div className="projDetailCards">
								{projeto.tools.map((ferramenta) => {
									return (
										<div className="projLangCard" key={ferramenta}>
											<DynamicImg nome={ferramenta}/>
											<div className="CardTextBg bg-minicard">
												<span>{ferramenta}</span>
											</div>
										</div>
									)
								})}
							</div>

							{/* link para o repositorio do projeto */}
							<div className="projRepoLink">
								<h4>Link para o repositório do projeto</h4>
								<p
									onClick={projeto.repo !== "PROJETO EM ANDAMENTO" ? 
										() => window.location.href = "https://github.com/HenriquePRA/nodemobile"
									: null
								}
									className={projeto.repo === "PROJETO EM ANDAMENTO" ? 
										"projEmAndamento"
									:
										"projConcluido"
									}
								>
									{projeto.repo}
								</p>
							</div>
						</div>
					)
				})}
			</div>
		) 
	} else return null
}

export default Details;