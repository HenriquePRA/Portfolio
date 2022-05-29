import React, { useEffect, useState } from 'react';

import '../../css/transitions.css';

let Transitions = (props) => {

    const [ defaultModalClass, setDefaultModalClass ] = useState("bg-modal dark-modal");
    const [ modalClass, setModalClass ] = useState(defaultModalClass);
    
    const unLockScroll = () => {
        const app = document.querySelector(".App")
        app.style.overflow = 'visible';
    }

    const lockScroll = () => {
        const app = document.querySelector(".App")
        app.style.overflow = 'hidden';
    }    

    useEffect(() => {
        // lock scroll
        if (props.onTransition) {
            if (props.pageLoad) {
                lockScroll()
                setModalClass(defaultModalClass + " flex show")
                setTimeout(() => {
                    setModalClass(defaultModalClass + " flex hide")
                }, 1050);
                setTimeout(() => {
                    unLockScroll()
                    setModalClass(defaultModalClass + " none hide")
                    props.setOnTransition(false)
                    props.setPageload(false)
                }, 1350);   
            } else {
                lockScroll()
                setModalClass(defaultModalClass + " flex")
                setTimeout(() => {
                    setModalClass(defaultModalClass + " flex show")
                }, 50);
                setTimeout(() => {
                    setModalClass(defaultModalClass + " flex hide")
                }, 750);
                setTimeout(() => {
                    unLockScroll()
                    setModalClass(defaultModalClass + " none hide")
                    props.setOnTransition(false)
                }, 1050);                
            }
        }
    }, [props.onTransition, props.setOnTransition, defaultModalClass])

    useEffect(() => {
        if (props.darkMode) {
            setDefaultModalClass("bg-modal dark-modal")
        } else {
            setDefaultModalClass("bg-modal light-modal")
        }
    }, [props.darkMode, setDefaultModalClass])

    return (
        <div 
            className={modalClass}
        >
            {/* loading spinner spinner*/}
            <div 
                id="loading" 
                style={props.pageLoad ? 
                    {"display":"none"} 
                : 
                    {"display":"block"}}
                >
                <svg>
                    <circle cx="40" cy="40" r="40"></circle>
                </svg>
            </div>            
        </div>
    )
}

export default Transitions;
