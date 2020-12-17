import React from 'react';

import './scss/main.scss';

import Fotoperfil from './img/misc/profilepic.jpg';
import Github from './img/tools/github.svg';
import Linkedin from './img/misc/linkedin.svg';
import htmlSvg from './img/tools/html-5.svg';
import css3Svg from './img/tools/css.svg';
import javascriptSvg from './img/tools/javascript.svg';
import bootstrapSvg from './img/tools/bootstrap.svg';
import angularSvg from './img/tools/angular.svg';
import sassSvg from './img/tools/sass.svg';
import vueSvg from './img/tools/vue.svg';
import reactSvg from './img/tools/react.svg';
import tailwindSvg from './img/tools/tailwindcss.svg';

import pythonSvg from './img/tools/python.svg';
import postgreSvg from './img/tools/postgresql.svg';
import javaSvg from './img/tools/java.svg';
import phpSvg from './img/tools/php.svg';
import laravelSvg from './img/tools/laravel.svg';
import firebaseSvg from './img/tools/firebase.svg';
import nodeSvg from './img/tools/nodejs.svg'
import djangoSvg from './img/tools/django.svg';
import expressSvg from './img/tools/express.svg';
import mongoSvg from './img/tools/mongodb.svg';
import mysqlSvg from './img/tools/mysql.svg';
import gitSvg from './img/tools/git.svg';
import herokuSvg from './img/tools/heroku.svg';

function Portfolio() {
  return (
    <div className="Portfolio">
      {/* profile picture block */}
      <div id="ProfileBlock">
          <div id="imgDiv">
              <img src={Fotoperfil} alt=""></img>
          </div>                    
          <h3>Henrique Poggi</h3>
          <h5>Desenvolvedor junior</h5>
          <div id="links">
              <img src={Github} alt="Github"></img>
              <img src={Linkedin} alt="Linkedin"></img>
          </div>
      </div>

      {/* about me block */}
      <div className="About">
            <div id="About-Me">
                <h2>Sobre Min</h2>
                <p>
                    Olá sou Henrique, estudante do quarto periodo do curso de sistemas para internet do IFPB, tendo iniciado no curso
                    pela metade de 2018 onde tive meu primeiro contato com programação com a linguagem python e desenvolvimento de 
                    templates web básicos com HTML e CSS, nessa época descobri minha vocação no mundo da programação e desde então tenho
                    acumulado conhecimento e habilidades em diversas linguagens de programação, frameworks e algoritmos não me 
                    limitando ao conteúdo do curso buscando sempre aprender mais.
                </p>

                <p>
                  Donec eu porta dolor, ut sagittis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis risus 
                  vitae lectus sagittis imperdiet. Maecenas pulvinar vestibulum erat. Vestibulum consectetur neque non venenatis gravida. 
                  Sed ac metus purus. Donec malesuada tristique purus, sit amet dapibus nibh euismod eget. 
                </p>
            </div>
        </div>

        {/* My skills block */}
        <div className='Skills'>
            
            <div className="front">
                <h3>Linguagems de Programação</h3>
                <div className="cardsContainer">

                    <div className="Card">
                        <img src={pythonSvg} alt="python logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Python</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={phpSvg} alt="php logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>PHP</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={javaSvg} alt="java logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Java</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={javascriptSvg} alt="Javascript logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Javascript</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="back">
                <h3>Frameworks</h3>
                <div className="cardsContainer">

                    <div className="Card">
                        <img src={angularSvg} alt="angular logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Angular</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={htmlSvg} alt="Html logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>HTML</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={laravelSvg} alt="laravel logo" />
                        <div className="CardTextBg  bg-minicard">
                            <span>Laravel</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={sassSvg} alt="Sass logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Sass</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={bootstrapSvg} alt="bootstrap logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Bootstrap</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={css3Svg} alt="Css logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>CSS</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={reactSvg} alt="react logo"/>
                        <div className="CardTextBg bg-minicard" >
                            <span>React</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={tailwindSvg} alt="Tailwind logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Tailwind</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={djangoSvg} alt="django logo" />
                        <div className="CardTextBg  bg-minicard">
                            <span>Django</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={vueSvg} alt="vue logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Vue.js</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={nodeSvg} alt="node logo" />
                        <div className="CardTextBg  bg-minicard">
                            <span>NodeJS</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={expressSvg} alt="express logo" />
                        <div className="CardTextBg  bg-minicard">
                            <span>ExpressJS</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="back">
                <h3>Bancos de dados</h3>
                <div className="cardsContainer">

                    <div className="Card">
                        <img src={mysqlSvg} alt="mysql logo" />
                        <div className="CardTextBg  bg-minicard">
                            <span>Mysql</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={postgreSvg} alt="postgresql logo" />
                        <div className="CardTextBg  bg-minicard">
                            <span>PostgreSQL</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={mongoSvg} alt="mongo logo" />
                        <div className="CardTextBg  bg-minicard">
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="back">
                <h3>Ferramentas</h3>
                <div className="cardsContainer">

                    <div className="Card">
                        <img src={Github} alt="github logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Github</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={gitSvg} alt="git logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Git</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={firebaseSvg} alt="firebase logo" />
                        <div className="CardTextBg  bg-minicard">
                            <span>Firebase</span>
                        </div>
                    </div>

                    <div className="Card">
                        <img src={herokuSvg} alt="heroku logo" />
                        <div className="CardTextBg bg-minicard">
                            <span>Heroku</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
