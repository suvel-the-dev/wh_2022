import React, { useState } from 'react'
import ModalContainer from '../ModalContainer'
import ModalBody from '../ModalBody'
import Button from '../Button'
import Input from '../Input'
import './style.css'
import Toggle from '../Toggle'

const modalDimension = {
    width: 505,
    height: 550
}

const demandOptions = ['All', 'Yes', 'No'];
const DemandDropdown = ({ value, setValue }) => {
    return (
        <select value={value} onChange={e => setValue(e.target.value)}>
            {demandOptions.map(opt => <option value={opt} > {opt}</option>)
            }
        </select >
    )
}
const velocityOptions = ['NONE', 'C', 'D', 'AB', 'A', 'B'];
const VelocityDropdown = ({ value, setValue }) => {
    return (
        <select value={value} onChange={e => setValue(e.target.value)}>
            {velocityOptions.map(opt => <option value={opt} >{opt}</option>)}
        </select>
    )
}

const abcOptions = ['NONE', 'A', 'B', 'C', 'D'];
const ABCDropdown = ({ value, setValue }) => {
    return (
        <select value={value} onChange={e => setValue(e.target.value)}>
            {abcOptions.map(opt => <option value={opt} >{opt}</option>)}
        </select>
    )
}

const initState = {
    demand: demandOptions[0],
    velocity: velocityOptions[0],
    dayLastPick: '',
    expiry: '',
    utilization: false,
    costHeatMap: false,
    abc: 'NONE',
}

const WorkSpaceFilterModal = ({ show, closeModal, handelFilterSubmit }) => {

    const [formState, setFormState] = useState(initState)

    const handelFormStateChange = (type, value) => {
        let clonedFormState = { ...formState, [type]: value };
        setFormState(clonedFormState);
    }

    return (
        show && (
            <ModalContainer>
                <ModalBody
                    dimensionInPixel={{ ...modalDimension }}
                    title={'Filter Workspace'}
                >
                    <div className='workspace-filter-form__container'>
                        <label className='workspace-filter-form__header'>Pallet’s Attribute</label>
                        <Input
                            label={"To be picked"}
                            component={
                                <DemandDropdown
                                    value={formState.demand}
                                    setValue={(val) => {
                                        handelFormStateChange('demand', val)
                                    }}
                                />
                            } />
                        <Input
                            label={"Velocity"}
                            component={
                                <VelocityDropdown
                                    value={formState.velocity}
                                    setValue={(val) => {
                                        handelFormStateChange('velocity', val)
                                    }}
                                />
                            } />
                        <Input
                            label={"ABC classification"}
                            component={
                                <ABCDropdown
                                    value={formState.abc}
                                    setValue={(val) => {
                                        handelFormStateChange('abc', val)
                                    }}
                                />
                            } />
                        <div className='workspace-filter-form__row'>
                            <Input
                                label={"Day Last Pick"}
                                component={
                                    <input
                                        type='number'
                                        value={formState.dayLastPick}
                                        onChange={e => {
                                            const val = e.target.value;
                                            handelFormStateChange('dayLastPick', val)
                                        }}
                                    />
                                } />
                            <Input
                                label={"Expiry"}
                                component={
                                    <input
                                        type='date'
                                        value={formState.expiry}
                                        onChange={e => {
                                            const val = e.target.value;
                                            handelFormStateChange('expiry', val)
                                        }}
                                    />
                                }
                            />
                        </div>
                        <label className='workspace-filter-form__header'>Rack's Attribute</label>
                        <div className='workspace-filter-form__utilization'>
                            <Toggle
                                label={"Utilization"}
                                checked={formState.utilization}
                                setChecked={(val) => {
                                    handelFormStateChange('utilization', val)
                                }} />
                            <select className='utilization__select' disabled={!formState.utilization}>
                                <option>utilization by aisle</option>
                            </select>
                        </div>
                        <div className='workspace-filter-form__action-container'>
                            <Button
                                variant={'secondary'}
                                onClick={() => {
                                    handelFilterSubmit(formState)
                                }}
                            >
                                Apply
                            </Button>
                            <Button
                                variant={'secondary'}
                                onClick={() => {
                                    setFormState(initState)
                                    handelFilterSubmit(initState)
                                }}
                            >
                                Reset
                            </Button>
                            <Button onClick={() => {
                                closeModal()
                            }}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </ModalBody>
            </ModalContainer >
        )
    )
}

export default WorkSpaceFilterModal
