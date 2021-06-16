import React, { useState, useContext } from 'react'
import CheckBox from '../CheckBox'
import './style.css'
import Button from '../Button'
import UtilizationContext from '../../context/UtilizationContext'
import ControlContext from '../../context/ControlContext'

const WareHouse3dControl = () => {

    const { control, setControl } = useContext(ControlContext)

    const { range, setRange, utilizationsRanges } = useContext(UtilizationContext)

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
