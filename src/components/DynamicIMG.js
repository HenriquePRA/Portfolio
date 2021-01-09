import React from 'react'
import HtmlSvg from '../img/tools/html-5.svg'
import CssSvg from '../img/tools/css.svg'
import JavascriptSvg from '../img/tools/javascript.svg'
import webpackSvg from '../img/tools/webpack.svg'
import babelSvg from '../img/tools/babel.svg'
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

const DynamicIMG = (f) => {
    if (f.nome === "HTML") {
        return <img src={HtmlSvg} alt=""></img>
    } else if (f.nome === "CSS") {
        return <img src={CssSvg} alt=""></img>
    } else if (f.nome === "Javascript") {
        return <img src={JavascriptSvg} alt=""></img>
    } else if (f.nome === "Webpack") {
        return <img src={webpackSvg} alt=""></img>
    } else if (f.nome === "Babel JS") {
        return <img src={babelSvg} style={{"height": "auto"}} alt=""></img>
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

export default DynamicIMG;