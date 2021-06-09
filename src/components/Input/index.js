import React from 'react'
import './style.css'

const Input = ({ label, component }) => {
    return (
        <div className={'form-ip'} >
            <label>{label}</label>
            { component}
        </div >
    )
}

export default Input
