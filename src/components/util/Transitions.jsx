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
            lockScroll()
            setModalClass(defaultModalClass + " flex show")
            setTimeout(() => {
                setModalClass(defaultModalClass + " flex hide")
            }, 150);
            setTimeout(() => {
                unLockScroll()
                setModalClass(defaultModalClass + " none hide")
                props.setOnTransition(false)
                props.setPageload(false)
            }, 975);
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
        </div>
    )
}

export default Transitions;
