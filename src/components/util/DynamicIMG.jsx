import React from 'react'

// icons
import HtmlSvg from '../../img/tools/icons/html-5.svg';
import CssSvg from '../../img/tools/icons/css.svg';
import JavascriptSvg from '../../img/tools/icons/javascript.svg';
import webpackSvg from '../../img/tools/icons/webpack.svg';
import babelSvg from '../../img/tools/icons/babel.svg';
import pythonSvg from '../../img/tools/icons/python.svg';
import reactSvg from '../../img/tools/icons/react.svg';
import sassSvg from '../../img/tools/icons/sass.svg';
import javaSvg from '../../img/tools/icons/java.svg';
import djangoSvg from '../../img/tools/icons/django.svg';
import bootstrapSvg from '../../img/tools/icons/bootstrap.svg';
import postgreSvg from '../../img/tools/icons/postgresql.svg';
import expressSvg from '../../img/tools/icons/express.svg';
import nodeSvg from '../../img/tools/icons/nodejs.svg';
import springSvg from '../../img/tools/icons/spring.svg';
import mysqlSvg from '../../img/tools/icons/mysql.svg';
import sqlSvg from '../../img/tools/icons/sql.svg';
import angularSvg from '../../img/tools/icons/angular.svg';
import androidSvg from '../../img/tools/icons/android.svg';
import mongoSvg from '../../img/tools/icons/mongodb.svg';
import entitySvg from '../../img/tools/icons/entity.svg';
import txtSvg from '../../img/tools/icons/txt.svg';
import awsSvg from '../../img/tools/icons/aws.svg';
import playstoreSvg from '../../img/tools/icons/playstore.svg';
import goSvg from '../../img/tools/icons/go.svg'
import dockerSvg from '../../img/tools/icons/docker.svg'
import kafkaSvg from '../../img/tools/icons/kafka.svg'
import swaggerSvg from '../../img/tools/icons/swagger.svg'
import sqlserverSvg from '../../img/tools/icons/sqlserver.svg'

// Badges
import html_badge from '../../img/tools/badges/html_badge.svg';
import css_badge from '../../img/tools/badges/css_badge.svg';
import react_badge from '../../img/tools/badges/react_badge.svg';
import sass_badge from '../../img/tools/badges/sass_badge.svg';
import javascript_badge from '../../img/tools/badges/javascript_badge.svg';
import webpack_badge from '../../img/tools/badges/babeljs_badge.svg';
import babeljs_badge from '../../img/tools/badges/webpack_badge.svg';
import python_badge from '../../img/tools/badges/python_badge.svg';
import java_badge from '../../img/tools/badges/java_badge.svg';
import django_badge from '../../img/tools/badges/django_badge.svg';
import bootstrap_badge from '../../img/tools/badges/bootstrap_badge.svg';
import postgresql_badge from '../../img/tools/badges/postgresql_badge.svg';
import express_badge from '../../img/tools/badges/express_badge.svg';
import node_badge from '../../img/tools/badges/node_badge.svg';
import spring_badge from '../../img/tools/badges/spring_badge.svg';
import mysql_badge from '../../img/tools/badges/mysql_badge.svg';
import angular_badge from '../../img/tools/badges/angular_badge.svg';
import android_badge from '../../img/tools/badges/android_badge.svg';
import mongo_badge from '../../img/tools/badges/mongo_badge.svg';
import flask_badge from '../../img/tools/badges/flask_badge.svg';
import redis_badge from '../../img/tools/badges/redis_badge.svg';
import azure_badge from '../../img/tools/badges/azure_badge.svg';
import aws_badge from '../../img/tools/badges/aws_badge.svg';
import go_badge from '../../img/tools/badges/go_badge.svg';
import docker_badge from '../../img/tools/badges/docker_badge.svg';
import kubernetes_badge from '../../img/tools/badges/kubernetes_badge.svg';
import jira_badge from '../../img/tools/badges/jira_badge.svg';
import kafka_badge from '../../img/tools/badges/kafka_badge.svg';
import swagger_badge from '../../img/tools/badges/swagger_badge.svg';
import sqlserver_badge from '../../img/tools/badges/sqlserver_badge.svg';
import datadog_badge from '../../img/tools/badges/datadog_badge.svg';

// Esse componente recebe uma string com o nome de um svg e retorna uma elemento
// html contendo esse svg, acredito que exista uma forma mais facil simples de fazer isso
// é provável que no futoro esse modulo deixe de existir mas por enquanto ficará assim. 

const DynamicIMG = (f) => {
    if (f.type === "icon") {
        switch (f.name) {
            case "HTML":
                return <img src={HtmlSvg} className={f.className} alt={f.alt}></img>
            case "CSS":
                return <img src={CssSvg} className={f.className} alt={f.alt}></img>
            case "Javascript":
                return <img src={JavascriptSvg} className={f.className} alt={f.alt}></img>
            case "Webpack":
                return <img src={webpackSvg} className={f.className} alt={f.alt}></img>
            case "Babel JS":
                return <img src={babelSvg} className={f.className} alt={f.alt}></img>
            case "Python":
                return <img src={pythonSvg} className={f.className} alt={f.alt}></img>
            case "React":
                return <img src={reactSvg} className={f.className} alt={f.alt}></img>
            case "Sass":
                return <img src={sassSvg} className={f.className} alt={f.alt}></img>
            case "Java":
                return <img src={javaSvg} className={f.className} alt={f.alt}></img>
            case "Django":
                return <img src={djangoSvg} className={f.className} alt={f.alt}></img>
            case "Bootstrap":
                return <img src={bootstrapSvg} className={f.className} alt={f.alt}></img>
            case "Postgres":
                return <img src={postgreSvg} className={f.className} alt={f.alt}></img>
            case "Express":
                return <img src={expressSvg} className={f.className} alt={f.alt}></img>
            case "Node":
                return <img src={nodeSvg} className={f.className} alt={f.alt}></img>
            case "Spring":
                return <img src={springSvg} className={f.className} alt={f.alt}></img>
            case "Mysql":
                return <img src={mysqlSvg} className={f.className} alt={f.alt}></img>
            case "SQL":
                return <img src={sqlSvg} className={f.className} alt={f.alt}></img>
            case "Angular":
                return <img src={angularSvg} className={f.className} alt={f.alt}></img>
            case "Android":
                return <img src={androidSvg} className={f.className} alt={f.alt}></img>
            case "Mongo":
                return <img src={mongoSvg} className={f.className} alt={f.alt}></img>
            case "Entity":
                return <img src={entitySvg} className={f.className} alt={f.alt}></img>
            case "Txt":
                return <img src={txtSvg} className={f.className} alt={f.alt}></img>
            case "AWS":
                return <img src={awsSvg} className={f.className} alt={f.alt}></img>
            case "Playstore":
                return <img src={playstoreSvg} className={f.className} alt={f.alt}></img>
            case "GO":
                return <img src={goSvg} className={f.className} alt={f.alt}></img>
            case "Docker":
                return <img src={dockerSvg} className={f.className} alt={f.alt}></img>
            case "Kafka":
                return <img src={kafkaSvg} className={f.className} alt={f.alt}></img>
            case "Swagger":
                return <img src={swaggerSvg} className={f.className} alt={f.alt}></img>
            case "SqlServer":
                return <img src={sqlserverSvg} className={f.className} alt={f.alt}></img>
            default:
                return "Icon not found";
        }
    } else if (f.type === "badge") {
        switch (f.name) {
            case "HTML":
                return <img src={html_badge} className={f.className} alt={f.alt}></img>
            case "CSS":
                return <img src={css_badge} className={f.className} alt={f.alt}></img>
            case "Javascript":
                return <img src={javascript_badge} className={f.className} alt={f.alt}></img>
            case "Webpack":
                return <img src={webpack_badge} className={f.className} alt={f.alt}></img>
            case "Babel JS":
                return <img src={babeljs_badge} className={f.className} alt={f.alt}></img>
            case "Python":
                return <img src={python_badge} className={f.className} alt={f.alt}></img>
            case "React":
                return <img src={react_badge} className={f.className} alt={f.alt}></img>
            case "Sass":
                return <img src={sass_badge} className={f.className} alt={f.alt}></img>
            case "Java":
                return <img src={java_badge} className={f.className} alt={f.alt}></img>
            case "Django":
                return <img src={django_badge} className={f.className} alt={f.alt}></img>
            case "Bootstrap":
                return <img src={bootstrap_badge} className={f.className} alt={f.alt}></img>
            case "Postgres":
                return <img src={postgresql_badge} className={f.className} alt={f.alt}></img>
            case "Express":
                return <img src={express_badge} className={f.className} alt={f.alt}></img>
            case "Node":
                return <img src={node_badge} className={f.className} alt={f.alt}></img>
            case "Spring":
                return <img src={spring_badge} className={f.className} alt={f.alt}></img>
            case "Mysql":
                return <img src={mysql_badge} className={f.className} alt={f.alt}></img>
            case "Angular":
                return <img src={angular_badge} className={f.className} alt={f.alt}></img>
            case "Android":
                return <img src={android_badge} className={f.className} alt={f.alt}></img>
            case "Mongo":
                return <img src={mongo_badge} className={f.className} alt={f.alt}></img>
            case "Flask":
                return <img src={flask_badge} className={f.className} alt={f.alt}></img>
            case "Redis":
                return <img src={redis_badge} className={f.className} alt={f.alt}></img>
            case "Azure":
                return <img src={azure_badge} className={f.className} alt={f.alt}></img>
            case "AWS":
                return <img src={aws_badge} className={f.className} alt={f.alt}></img>
            case "GO":
                return <img src={go_badge} className={f.className} alt={f.alt}></img>
            case "Docker":
                return <img src={docker_badge} className={f.className} alt={f.alt}></img>
            case "Kubernetes":
                return <img src={kubernetes_badge} className={f.className} alt={f.alt}></img>
            case "Jira":
                return <img src={jira_badge} className={f.className} alt={f.alt}></img>
            case "Kafka":
                return <img src={kafka_badge} className={f.className} alt={f.alt}></img>
            case "Swagger":
                return <img src={swagger_badge} className={f.className} alt={f.alt}></img>
            case "SQL Server":
                return <img src={sqlserver_badge} className={f.className} alt={f.alt}></img>
            case "Datadog":
                return <img src={datadog_badge} className={f.className} alt={f.alt}></img>
            default:
                return "Badge not found";
        }
    } else {
        return "Type not found"
    }
} 

export default DynamicIMG;