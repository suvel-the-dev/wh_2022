import React from 'react'
import './style.css'
import data from '../../data/getABCDColorMap'

const classification = Object.entries(data).map(([key, value]) => {
    return { color: value, char: key }
})

const ADCDClassificationDetail = ({ show }) => {
    return (
        show && (
            <div className='ABCDClassification__container'>
                {classification.map(cla => (
                    <div
                        style={{ background: cla.color }}
                        className='ABCDClassification__item'
                    >
                        {cla.char}
                    </div>
                ))}
            </div>
        )
    )
}

export default ADCDClassificationDetail
