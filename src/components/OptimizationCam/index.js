import React, { useContext } from 'react'
import './style.css'
import ControlContext from '../../context/ControlContext'

const OptimizationCam = () => {
    const { control, setControl } = useContext(ControlContext)

    const handelChangeView = () => {
        if (control.optimizationForm.OptimizationType === 'DIS')
            setControl(s => ({ ...control, cameraPosition: [150, 0, -150] }))
        else if (control.optimizationForm.OptimizationType === 'TBP')
            setControl({ ...control, cameraPosition: [0, 300, -600] })
    }

    const hideBtn = control.optimizationForm.OptimizationType === 'NONE';

    return (
        <div className='opt_cam__container'>
            {!hideBtn &&
                <button
                    onClick={handelChangeView}
                > Optimized view </button>
            }
        </div>
    )
}

export default OptimizationCam
