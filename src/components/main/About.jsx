import React, { useState, useEffect } from 'react'
import DynamicIMG from '../util/DynamicIMG'
import PT_About from './texts/PT_About.json';
import EN_About from './texts/EN_About.json';

// Componente simples que retorna uma div responsiva com textos simples 

const About = (props) => {

    const [componentText, setComponentText] = useState({})

    // effect responsible for defining and switching the page language
    useEffect(() => {
        switch (props.lang) {
            case "PT":
                setComponentText(PT_About);
                break;
            default:
                setComponentText(EN_About);
        }
    }, [props.lang])

    return (
        <div 
            className = {props.darkMode ? "About dark-about" : "About light-about"}
            style={props.pageLoad ? {"opacity":"0"} : {"opacity":"1"}}
        >
            <div id="About-Me">
                <h2>{componentText.header}</h2>
                <p>
                    {componentText.paragraph_1}
                </p>
                <div className='imgBlock'>
                    <DynamicIMG type={"badge"} name={"Python"} />
                    <DynamicIMG type={"badge"} name={"Django"} />
                    <DynamicIMG type={"badge"} name={"Flask"} />
                    <DynamicIMG type={"badge"} name={"Java"} />
                    <DynamicIMG type={"badge"} name={"Spring"} />
                    <DynamicIMG type={"badge"} name={"HTML"} />
                    <DynamicIMG type={"badge"} name={"CSS"} />
                    <DynamicIMG type={"badge"} name={"Bootstrap"} />
                    <DynamicIMG type={"badge"} name={"Javascript"} />
                    <DynamicIMG type={"badge"} name={"Node"} />
                    <DynamicIMG type={"badge"} name={"Babel JS"} />
                    <DynamicIMG type={"badge"} name={"Webpack"} />
                    <DynamicIMG type={"badge"} name={"React"} />
                    <DynamicIMG type={"badge"} name={"Angular"} />
                    <DynamicIMG type={"badge"} name={"Mysql"} />
                    <DynamicIMG type={"badge"} name={"Mongo"} />
                </div>
                <p>
                    {componentText.paragraph_2}
                </p>
                <p>
                    {componentText.paragraph_3}
                </p>
                <div className='imgBlock'>
                    <DynamicIMG type={"badge"} name={"GO"} />
                    <DynamicIMG type={"badge"} name={"Postgres"} />
                    <DynamicIMG type={"badge"} name={"SQL Server"} />
                    <DynamicIMG type={"badge"} name={"Kafka"} />
                    <DynamicIMG type={"badge"} name={"Docker"} />
                    <DynamicIMG type={"badge"} name={"Kubernetes"} />
                    <DynamicIMG type={"badge"} name={"Redis"} />
                    <DynamicIMG type={"badge"} name={"Azure"} />
                    <DynamicIMG type={"badge"} name={"AWS"} />
                    <DynamicIMG type={"badge"} name={"Datadog"} />
                    <DynamicIMG type={"badge"} name={"Swagger"} />
                    <DynamicIMG type={"badge"} name={"Jira"} />
                </div>

            </div>
        </div>
    )
}

export default About;