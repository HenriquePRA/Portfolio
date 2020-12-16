import React from 'react';

import './scss/main.scss';

import Fotoperfil from './img/misc/profilepic.jpg';
import Github from './img/github.svg';
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
import rubySvg from './img/tools/ruby.svg';
import railsSvg from './img/tools/rails.svg';
import laravelSvg from './img/tools/laravel.svg';
import firebaseSvg from './img/tools/firebase.svg';
import nodeSvg from './img/tools/nodejs.svg'
import djangoSvg from './img/tools/django.svg';
import expressSvg from './img/tools/express.svg';
import mongoSvg from './img/tools/mongodb.svg';

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
                <h3>Front-End</h3>
                <div className="frontCardsContainer">
                    <div className="frontCard">
                        <img src={sassSvg} alt="Sass logo" />
                        <div className="frontCardTextBg bg-sass">
                            <span>Sass</span>
                        </div>
                    </div>

                    <div className="frontCard">
                        <img src={reactSvg} alt="react logo"/>
                        <div className="frontCardTextBg bg-react" >
                            <span>React</span>
                        </div>
                    </div>

                    <div className="frontCard">
                        <img src={javascriptSvg} alt="Javascript logo" />
                        <div className="frontCardTextBg bg-js">
                            <span>Javascript</span>
                        </div>
                    </div>                   

                    <div className="frontCard">
                        <img src={htmlSvg} alt="Html logo" />
                        <div className="frontCardTextBg bg-html">
                            <span>HTML</span>
                        </div>
                    </div>

                    <div className="frontCard">
                        <img src={css3Svg} alt="Css logo" />
                        <div className="frontCardTextBg bg-css3">
                            <span>CSS</span>
                        </div>
                    </div>

                    <div className="frontCard">
                        <img src={tailwindSvg} alt="Tailwind logo" />
                        <div className="frontCardTextBg bg-tailwind">
                            <span>TailwindCSS</span>
                        </div>
                    </div>

                    <div className="frontCard">
                        <img src={angularSvg} alt="angular logo" />
                        <div className="frontCardTextBg bg-angular">
                            <span>Angular</span>
                        </div>
                    </div>

                    <div className="frontCard">
                        <img src={bootstrapSvg} alt="bootstrap logo" />
                        <div className="frontCardTextBg bg-bootstrap">
                            <span>Bootstrap</span>
                        </div>
                    </div>

                    <div className="frontCard">
                        <img src={vueSvg} alt="vue logo" />
                        <div className="frontCardTextBg bg-vue-django">
                            <span>Vue.js</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="back">
                <h3>Back-End</h3>
                <div className="backcardsContainer">
                    <div className="backCard">
                        <img src={pythonSvg} alt="python logo" />
                        <div className="backCardTxtbg bg-postgres-python">
                            <span>Python</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={javaSvg} alt="java logo" />
                        <div className="backCardTxtbg bg-java">
                            <span>Java</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={phpSvg} alt="php logo" />
                        <div className="backCardTxtbg bg-php">
                            <span>PHP</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={rubySvg} alt="ruby logo" />
                        <div className="backCardTxtbg bg-ruby">
                            <span>Ruby</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={railsSvg} style={{'width':'7rem'}} alt="rails logo" />
                        <div className="backCardTxtbg bg-ruby">
                            <span>Ruby on Rails</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={laravelSvg} alt="laravel logo" />
                        <div className="backCardTxtbg bg-laravel">
                            <span>Laravel</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={firebaseSvg} alt="firebase logo" />
                        <div className="backCardTxtbg bg-firebase">
                            <span>Firebase</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={nodeSvg} alt="node logo" />
                        <div className="backCardTxtbg bg-node-mongo">
                            <span>NodeJS</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={djangoSvg} alt="django logo" />
                        <div className="backCardTxtbg bg-vue-django">
                            <span>Django</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={expressSvg} alt="express logo" />
                        <div className="backCardTxtbg bg-express">
                            <span>ExpressJS</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={mongoSvg} alt="mongo logo" />
                        <div className="backCardTxtbg bg-node-mongo">
                            <span>MongoDB</span>
                        </div>
                    </div>

                    <div className="backCard">
                        <img src={postgreSvg} alt="postgresql logo" />
                        <div className="backCardTxtbg bg-postgres-python">
                            <span>PostgreSQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
