import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/GlobalContext";

const Contact = () => {

    const { Theme } = useContext(ContextGlobal)
    
    return (
        <div className='contact' style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h2>Quieres saber más?</h2>
            <p>Envíanos tu pregunta y te contactaremos a la brevedad</p>
            <Form/>
        </div>
    )
}

export default Contact