import React from 'react'
import './style.css'

const ModalContainer = ({ children }) => {
    return (
        <div className={'modal-outer-container'}>
            {children}
        </div>
    )
}

export default ModalContainer
