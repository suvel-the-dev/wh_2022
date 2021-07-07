import React, { useState, useContext, useEffect } from 'react'
import CheckBox from '../CheckBox'
import './style.css'
import Button from '../Button'
import UtilizationContext from '../../context/UtilizationContext'
import ControlContext from '../../context/ControlContext'
import Toggle from '../Toggle'

const WareHouse3dControl = () => {

    const { control, setControl } = useContext(ControlContext)

    const {
        range,
        setRange,
        utilizationsRanges,
        setChangeColor,
    } = useContext(UtilizationContext);

    const { } = useState();

    const handelOnOptimize = () => {
        setControl({ ...control, showOpzModal: true })
    }

    const handelWarhorseFilter = () => {
        setControl({ ...control, showFilterModal: true })
    }

    useEffect(() => {
        console.log({ "==>": control })
    }, [control])

    return (
        <>
            <div className='threedcontroler-container'>
                <Button onClick={handelWarhorseFilter}>Filter Warehouse</Button>
                <Button onClick={handelOnOptimize}>Optimize</Button>
                <Toggle
                    label={"Show stats"}
                    checked={control.showStats}
                    setChecked={(val) => {
                        setControl({ ...control, showStats: val })
                    }} />
                <Toggle
                    label={"Show Aisle Marks"}
                    checked={control.showAisleMark}
                    setChecked={(val) => {
                        setControl({ ...control, showAisleMark: val })
                    }} />
                <Toggle label={"Cost heat-map"}
                    checked={control.costHeatMap}
                    setChecked={(val) => {
                        setControl({ ...control, costHeatMap: val })
                    }} />
                <Toggle label={"SKU Texture"}
                    checked={control.showSKUType}
                    setChecked={(val) => {
                        setControl({
                            ...control,
                            showSKUType: val,
                            displacement: false,
                            abcdClassification: false
                        })
                    }} />
                <Toggle label={"Displacement"}
                    checked={control.displacement}
                    setChecked={(val) => {
                        setControl({
                            ...control,
                            showSKUType: false,
                            displacement: val,
                            abcdClassification: false
                        })
                    }} />
                <Toggle label={"ABCD Classification"}
                    checked={control.abcdClassification}
                    setChecked={(val) => {
                        setControl({
                            ...control,
                            showSKUType: false,
                            displacement: false,
                            abcdClassification: val
                        })
                    }} />
            </div>
            <div className='common_tools' >
                <div>
                    <labe>transparent</labe>
                    <input type="range"
                        min={0.0}
                        max={1.0}
                        step={0.1}
                        value={control?.componentOpacity}
                        onChange={(e) => {
                            setControl({
                                ...control,
                                componentOpacity: Number(e.target.value)
                            })
                        }}
                    />
                    <labe>opaque</labe>
                </div>
                <div
                    onMouseEnter={() => setControl({ ...control, animate: true })}
                    onMouseLeave={() => setControl({ ...control, animate: false })}
                    className='optimizationToggle__container'>
                    {control?.showOptimizationSwitch &&
                        <>
                            <Toggle
                                label={`Original Arrangement`}
                                checked={control.swap}
                                setChecked={(val) => {
                                    setControl({ ...control, swap: val })
                                }} />
                        </>
                    }
                </div>
                {control.utilization &&
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
                }
                {/* <Toggle label={"animate"}
                    checked={control.animate}
                    setChecked={(val) => {
                        setControl({
                            ...control,
                            animate: val
                        })
                    }} /> */}
            </div>

        </>
    )
}

export default WareHouse3dControl
