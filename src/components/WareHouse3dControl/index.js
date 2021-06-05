import React, { useState } from 'react'
import CheckBox from '../CheckBox'
import './style.css'
import Button from '../Button'

const WareHouse3dControl = ({ controls: preControl, setControls: updateControl }) => {

    const [controls, setControls] = useState(preControl);

    const handelOnSelection = () => {
        updateControl(controls);
    }

    return (
        <>
            <div className='threedcontroler-container'>
                <CheckBox
                    selected={controls?.lowDemand}
                    onSelect={() => setControls({ ...controls, lowDemand: !controls.lowDemand })}
                    label="show Low Demand Pallets"
                />
                <CheckBox
                    selected={controls?.highDemand}
                    onSelect={() => setControls({ ...controls, highDemand: !controls.highDemand })}
                    label="show High Demand Pallets"
                />
                <CheckBox
                    selected={controls?.showLabourCost}
                    onSelect={() => setControls({ ...controls, showLabourCost: !controls.showLabourCost })}
                    label="visualize labour cost heatmap"
                />
                <Button onClick={handelOnSelection}>View</Button>
                <Button>Optimize</Button>
               
            </div>
        </>
    )
}

export default WareHouse3dControl
