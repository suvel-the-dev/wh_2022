import React from 'react'
import './styles.css'

const LabourCostHeatColorPallet = ({ show }) => {
    return (
        <div className={`cost-color-container-${show}`}>
            <label>Low</label>
            <div className={'cost-color vlow-cost'}></div>
            <div className={'cost-color low-cost'}></div>
            <div className={'cost-color med-cost'}></div>
            <div className={'cost-color hig-cost'}></div>
            <label>High</label>
        </div>
    )
}

export default LabourCostHeatColorPallet
