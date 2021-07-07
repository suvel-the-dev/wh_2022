import React, { useState, useContext } from 'react'
import Input from '../Input'
import Button from '../Button'
import ModalContainer from '../ModalContainer'
import ModalBody from '../ModalBody'
import './style.css'
import ControlContext from '../../context/ControlContext'
import SpinnerContext from '../../context/SpinnerContext'

const modalDimension = {
    width: 397,
    height: 550
}

const OptimizeModal = ({ show = false, handelAction }) => {

    const { control, setControl } = useContext(ControlContext)
    const { setLoading } = useContext(SpinnerContext)

    const [state, setState] = useState(control.optimizationForm)

    const handelOptimizeSubmit = () => {
        setLoading(true)
        let howOptimizationSwitch = state.OptimizationType != 'NONE' ? true : false;
        const updateControl = {
            ...control,
            optimizationForm: state,
            showOptimizationSwitch: howOptimizationSwitch,
            showOpzModal: false,
            swap: false
        };
        setControl(updateControl);
    }

    return (
        <>
            {show &&
                <ModalContainer>
                    <ModalBody dimensionInPixel={{ ...modalDimension }} title={'OPTIMIZE PALLETS'}>
                        <div className='optimize-form__container'>
                            <label className='optimize-form__header'>Allow Location Move</label>
                            <Input
                                label={"Start Time"}
                                component={
                                    <input
                                        value={state.startTime}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setState({ ...state, startTime: value })
                                        }}
                                        type='time' />
                                }
                            />
                            <Input
                                label={"End Optimization"}
                                component={
                                    <input
                                        value={state.endOptimization}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setState({ ...state, endOptimization: value })
                                        }}
                                        type='time' />}
                            />
                            <Input
                                label={"Associates"}
                                component={
                                    <input
                                        type='number'
                                        value={state.associates}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setState({ ...state, associates: value })
                                        }}
                                    />}
                            />
                            <Input label={"Optimization Type "}
                                component={
                                    <select
                                        value={state.OptimizationType}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setState({ ...state, OptimizationType: value })
                                        }}
                                    >
                                        <option value='NONE'>None</option>
                                        <option value='TBP'>To Be Picked</option>
                                        <option value='DIS'>Displacement</option>
                                    </select>
                                }
                            />
                            <div className='optimize-form__action-container'>
                                <Button
                                    variant={'secondary'}
                                    onClick={handelOptimizeSubmit} >
                                    Optimize
                                </Button>
                                <Button
                                    onClick={() => handelAction()}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContainer>
            }
        </>
    )
}

export default OptimizeModal
