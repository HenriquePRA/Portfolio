import React from 'react'
import HtmlSvg from '../img/tools/html-5.svg'
import CssSvg from '../img/tools/css.svg'
import JavascriptSvg from '../img/tools/javascript.svg'
import firebaseSvg from '../img/tools/firebase.svg'
import pythonSvg from '../img/tools/python.svg'
import reactSvg from '../img/tools/react.svg'
import sassSvg from '../img/tools/sass.svg'
import javaSvg from '../img/tools/java.svg'
import djangoSvg from '../img/tools/django.svg'
import bootstrapSvg from '../img/tools/bootstrap.svg'
import postgreSvg from '../img/tools/postgresql.svg'
import expressSvg from '../img/tools/express.svg'
import nodeSvg from '../img/tools/nodejs.svg'
import springSvg from '../img/tools/spring.svg'
import mysqlSvg from '../img/tools/mysql.svg'
import angularSvg from '../img/tools/angular.svg'
import androidSvg from '../img/tools/android.svg'
import vueSvg from '../img/tools/vue.svg'
import mongoSvg from '../img/tools/mongodb.svg'
import cruzSvg from '../img/misc/cruz.svg'

const DinamicIMG = (f) => {
    if (f.nome === "html") {
        return <img src={HtmlSvg} alt=""></img>
    } else if (f.nome === "css") {
        return <img src={CssSvg} alt=""></img>
    } else if (f.nome === "Javascript") {
        return <img src={JavascriptSvg} alt=""></img>
    } else if (f.nome === "Firebase") {
        return <img src={firebaseSvg} alt=""></img>
    } else if (f.nome === "Python") {
        return <img src={pythonSvg} alt=""></img>
    } else if (f.nome === "React") {
        return <img src={reactSvg} alt=""></img>
    } else if (f.nome === "Sass") {
        return <img src={sassSvg} alt=""></img>
    } else if (f.nome === "Java") {
        return <img src={javaSvg} alt=""></img>        
    } else if (f.nome === "Django") {
        return <img src={djangoSvg} alt=""></img>
    } else if (f.nome === "Bootstrap") {
        return <img src={bootstrapSvg} alt=""></img>
    } else if (f.nome === "Postgres") {
        return <img src={postgreSvg} alt=""></img>
    } else if (f.nome === "Express") {
        return <img src={expressSvg} alt=""></img>
    } else if (f.nome === "Node") {
        return <img src={nodeSvg} alt=""></img>
    } else if (f.nome === "Springboot") {
        return <img src={springSvg} alt=""></img>
    } else if (f.nome === "Mysql") {
        return <img src={mysqlSvg} alt=""></img>
    } else if (f.nome === "Angular") {
        return <img src={angularSvg} alt=""></img>
    } else if (f.nome === "Android Studio") {
        return <img src={androidSvg} alt=""></img>
    } else if (f.nome === "Vue") {
        return <img src={vueSvg} alt=""></img>
    } else if (f.nome === "Mongo") {
        return <img src={mongoSvg} alt=""></img>
    } else {
        return null
    }
} 

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
											<DinamicIMG nome={ferramenta}/>
											<div className="CardTextBg bg-minicard">
												<span>{ferramenta}</span>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		) 
	} else return null
}

export default Details;