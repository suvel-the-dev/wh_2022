import React from 'react'
import './style.css'

const ModalBody = ({ dimensionInPixel, title, children }) => {
    return (
        <div
            className={'modal-body__container'}
            style={{
                width: `${dimensionInPixel.width}px`,
                height: `${dimensionInPixel.height}px`,
            }}
        >
            <div className='modal-body__title'>{title}</div>
            {children}
        </div>
    )
}

export default ModalBody
