import React from 'react';
import './style.css'

const Button = ({ onClick, children, variant, ...props }) => {
    return (
        <button className={`btn ${variant}`} onClick={onClick} {...props}>{children}</button>
    )
}

export default Button
