import React, { useState, useContext } from 'react'
import CheckBox from '../CheckBox'
import './style.css'
import Button from '../Button'
import UtilizationContext from '../../context/UtilizationContext'

const WareHouse3dControl = ({ controls: preControl, setControls: updateControl }) => {

    const [controls, setControls] = useState(preControl);
    const { range, setRange, utilizationsRanges } = useContext(UtilizationContext)

    const handelOnSelection = () => {
        updateControl(controls);
    }

    const handelOnOptimize = () => {
        updateControl({ ...controls, showOpzModal: true })
    }

    return (
        <>
            <div className='threedcontroler-container'>
                <CheckBox
                    selected={controls?.lowDemand}
                    onSelect={() => setControls({ ...controls, lowDemand: !controls.lowDemand })}
                    label="Show Low Demand Pallets"
                />
                <CheckBox
                    selected={controls?.highDemand}
                    onSelect={() => setControls({ ...controls, highDemand: !controls.highDemand })}
                    label="Show High Demand Pallets"
                />
                <CheckBox
                    selected={controls?.showLabourCost}
                    onSelect={() => setControls({ ...controls, showLabourCost: !controls.showLabourCost })}
                    label="Labour Cost Heatmap"
                />
                <Button onClick={handelOnSelection}>Refresh</Button>
                <Button onClick={handelOnOptimize}>Optimize</Button>

                <div>
                    <div>
                        <input value={range} onChange={e => setRange(e.target.value)} />
                    </div>
                    <div>
                        {utilizationsRanges.map(range => <span style={{ color: range.color }}>{range.range}</span>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WareHouse3dControl
