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
import jsonProjs from './projects_pt';

const ProjCards = (props) => {

	let ini = props.start
	let fim = props.fim

	const updateProj = (name) => {
		let select_proj;
		jsonProjs.forEach(proj => {
			 if (proj.name === name) {
				  select_proj = proj;
			 }
		})
		props.setprojdata(select_proj);
		props.setShowproj(true);
  }

	const projetos = [
		<div className="proj">
				<h4>Must-Do List</h4>
				<p>
						Esse é meu primeiro desenvolvendo apps para plataformas android, é um
						to do list com dados persistentes.
				</p>
				<img src={androidSvg} className="langicon one_of4_stk" alt="Android Icon"></img>
				<img src={vueSvg} className="langicon two_of4_stk" alt="Vue Icon"></img>
				<img src={springSvg} className="langicon three_of4_stk" alt="Spring Icon"></img>
				<img src={mongoSvg} className="langicon four_of4_stk" alt="Mongo Icon"></img>

				<div className="projButton" onClick={() => updateProj("Must-Do List")}>
						<span>VER MAIS</span>
				</div>
		</div>,
		<div className="proj">
				<h4>IF Mobile</h4>
				<p>
						Projeto final de bancos de dados relacionais da disciplina de banco de dados 2
				</p>
				<img src={postgreSvg} className="langicon one_of5_stk" alt="Postgres Icon"></img>
				<img src={expressSvg} className="langicon two_of5_stk" alt="express Icon"></img>
				<img src={reactSvg} className="langicon three_of5_stk" alt="react Icon"></img>
				<img src={nodeSvg} className="langicon four_of5_stk" alt="Node Icon"></img>
				<img src={bootstrapSvg} className="langicon five_of5_stk" alt="bootstrap Icon"></img>     

				<div className="projButton" onClick={() => updateProj("IF Mobile")}>
						<span>VER MAIS</span>
				</div>
		</div>,
		<div className="proj">
				<h4>Vendor Pop</h4>
				<p>Projeto final da disciplina de programação orientada a objetos, esse projeto trata-se app de vendas. 
				</p>
				<img src={angularSvg} className="langicon one_of3_stk" alt="Spring Icon"></img>
				<img src={springSvg} className="langicon two_of3_stk" alt="Spring Icon"></img>
				<img src={mysqlSvg} className="langicon three_of3_stk" alt="mysql Icon"></img>

				<div className="projButton" onClick={() => updateProj("Vendor Pop")}>
						<span>VER MAIS</span>
				</div>
		</div>,
		<div className="proj">
				<h4>Swing Memory Game</h4>
				<p>Esse projeto consiste em dois jogos de Memória onde um faz o uso do java swing e outro faz o console.</p>
				<img src={javaSvg} className="langicon one_stk" alt="Java Icon"></img>
				<div className="projButton" onClick={() => updateProj("Swing Memory Game")}>
						<span>VER MAIS</span>
				</div>
		</div>,
		<div className="proj">
				<h4>React/Sass Portfolio</h4>
				<p>Criei esse portfolio como um projeto a fim de dominar o react com sass e exibir meus projetos.</p>
				<img src={reactSvg} className="langicon one_of2_stk" alt="React Icon"></img>
				<img src={sassSvg} className="langicon two_of2_stk" alt="Sass Icon"></img>                
				<div className="projButton" onClick={() => updateProj("React/Sass Portfolio")}>
						<span>VER MAIS</span>
				</div>
		</div>,
		<div className="proj">
				<h4>Engine de busca</h4>
				<p>Projeto final de estruturas de dados esse projeto resume-se em uma engine de busca.</p>
				<img src={djangoSvg} className="langicon one_of2_stk" alt="Django Icon"></img>
				<img src={bootstrapSvg} className="langicon two_of2_stk" alt="Bootstrap Icon"></img>                
				<div className="projButton" onClick={() => updateProj("Engine de busca (Framework de detecção Sinonímia)")}>
						<span>VER MAIS</span>
				</div>
		</div>,
		<div className="proj hidden">
				<h4>My Book List</h4>
				<p>Usando o servico firebase e uma api de livros esse projeto faz o crud de usuarios e livros.</p>
				<img src={HtmlSvg} className="langicon one_of4_stk" alt="HTML Icon"></img>
				<img src={CssSvg} className="langicon two_of4_stk" alt="CSS Icon"></img>
				<img src={JavascriptSvg} className="langicon three_of4_stk" alt="Javascript Icon"></img>
				<img src={firebaseSvg} className="langicon four_of4_stk" alt="Firebase Icon"></img>
				<div className="projButton" onClick={() => updateProj("My Book List")}>
						<span>VER MAIS</span>
				</div>
		</div>,
		<div className="proj hidden">
				<h4>Naval Battle</h4>
				<p>Esse projeto simula um jogo de batalha naval foi minha primeira experiencia com python.</p>
				<img src={pythonSvg} className="langicon one_stk" alt="HTML Icon"></img>
				<div className="projButton" onClick={() => updateProj("Naval Battle")}>
						<span>VER MAIS</span>
				</div>
		</div>,
		<div className="proj hidden">
				<h4>Byte Barrage</h4>
				<p>Esse é meu primeiro projeto front-end, simula um site catalogo de venda de propriedades em jogos.</p>
				<img src={HtmlSvg} className="langicon one_of2_stk" alt="HTML Icon"></img>
				<img src={CssSvg} className="langicon two_of2_stk" alt="CSS Icon"></img>
				<div className="projButton" onClick={() => updateProj("Byte Barrage")}>
						<span>VER MAIS</span>
				</div>
		</div>
	]

	let projSel = [];

	for (ini; ini < fim; ini++) {
		projSel.push(projetos[ini])
	}

	return (
		<div className="Projects">
			{}
		</div>
	)
}

export default ProjCards
