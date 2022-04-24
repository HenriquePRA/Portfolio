import React from 'react'
import HtmlSvg from '../../img/tools/html-5.svg'
import CssSvg from '../../img/tools/css.svg'
import JavascriptSvg from '../../img/tools/javascript.svg'
import webpackSvg from '../../img/tools/webpack.svg'
import babelSvg from '../../img/tools/babel.svg'
import pythonSvg from '../../img/tools/python.svg'
import reactSvg from '../../img/tools/react.svg'
import sassSvg from '../../img/tools/sass.svg'
import javaSvg from '../../img/tools/java.svg'
import djangoSvg from '../../img/tools/django.svg'
import bootstrapSvg from '../../img/tools/bootstrap.svg'
import postgreSvg from '../../img/tools/postgresql.svg'
import expressSvg from '../../img/tools/express.svg'
import nodeSvg from '../../img/tools/nodejs.svg'
import springSvg from '../../img/tools/spring.svg'
import mysqlSvg from '../../img/tools/mysql.svg'
import sqlSvg from '../../img/tools/sql.svg'
import angularSvg from '../../img/tools/angular.svg'
import androidSvg from '../../img/tools/android.svg'
import vueSvg from '../../img/tools/vue.svg'
import mongoSvg from '../../img/tools/mongodb.svg'
import guiSvg from '../../img/tools/gui.svg'
import entitySvg from '../../img/tools/entity.svg'
import txtSvg from '../../img/tools/txt.svg'

// Esse componente recebe uma string com o nome de um svg e retorna uma elemento
// html contendo esse svg, acredito que exista uma forma mais facil simples de fazer isso
// é provável que no futoro esse modulo deixe de existir mas por enquanto ficará assim. 

const DynamicIMG = (f) => {
    switch (f.nome) {
        case "HTML":
            return <img src={HtmlSvg} alt=""></img>
        case "CSS":
            return <img src={CssSvg} alt=""></img>
        case "Javascript":
            return <img src={JavascriptSvg} alt=""></img>
        case "Webpack":
            return <img src={webpackSvg} alt=""></img>
        case "Babel JS":
            return <img src={babelSvg} style={{"height": "auto"}} alt=""></img>
        case "Python":
            return <img src={pythonSvg} alt=""></img>
        case "React":
            return <img src={reactSvg} alt=""></img>
        case "Sass":
            return <img src={sassSvg} alt=""></img>
        case "Java":
            return <img src={javaSvg} alt=""></img>
        case "Django":
            return <img src={djangoSvg} alt=""></img>
        case "Bootstrap":
            return <img src={bootstrapSvg} alt=""></img>
        case "Postgres":
            return <img src={postgreSvg} alt=""></img>
        case "Express":
            return <img src={expressSvg} alt=""></img>
        case "Node":
            return <img src={nodeSvg} alt=""></img>
        case "Springboot":
            return <img src={springSvg} alt=""></img>
        case "Mysql":
            return <img src={mysqlSvg} alt=""></img>
        case "SQL":
            return <img src={sqlSvg} alt=""></img>
        case "Angular":
            return <img src={angularSvg} alt=""></img>
        case "Android Studio":
            return <img src={androidSvg} alt=""></img>
        case "Vue":
            return <img src={vueSvg} alt=""></img>
        case "Mongo":
            return <img src={mongoSvg} alt=""></img>
        case "Swing GUI":
            return <img src={guiSvg} alt=""></img>
        case "Entity":
            return <img src={entitySvg} alt=""></img>
        case "Txt":
            return <img src={txtSvg} alt=""></img>
        default:
            return null;
    }
} 

export default DynamicIMG;