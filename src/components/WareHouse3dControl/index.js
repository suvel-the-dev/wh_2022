import React, { useState, useContext } from 'react'
import CheckBox from '../CheckBox'
import './style.css'
import Button from '../Button'
import UtilizationContext from '../../context/UtilizationContext'
import ControlContext from '../../context/ControlContext'

const WareHouse3dControl = () => {

    const { control, setControl } = useContext(ControlContext)

    const { range, setRange, utilizationsRanges, setChangeColor } = useContext(UtilizationContext);

    const { } = useState();

    const handelOnOptimize = () => {
        setControl({ ...control, showOpzModal: true })
    }

    const handelWarhorseFilter = () => {
        setControl({ ...control, showFilterModal: true })
    }

    return (
        <>
            <div className='threedcontroler-container'>
                <Button onClick={handelWarhorseFilter}>Filter Warehouse</Button>
                <Button onClick={handelOnOptimize}>Optimize</Button>

                <div>
                    <div styles={{ display: 'flex' }}>
                        <input value={range} onChange={e => setRange(e.target.value)} />
                        <button onClick={() => setChangeColor(v => !v)}>Change colors🔃</button>
                    </div>
                    <div>
                        {utilizationsRanges.map((range, index) => (
                            <span title={`[${range.range}]\t`} key={index} style={{ cursor: 'pointer', backgroundColor: range.color, color: 'white' }}>{`[${range.range}]\t`}</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WareHouse3dControl
