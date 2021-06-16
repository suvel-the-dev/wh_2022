import React, { useEffect, useState } from 'react'
import ModalContainer from '../ModalContainer'
import ModalBody from '../ModalBody'
import Button from '../Button'
import Input from '../Input'
import './style.css'
import Switch from "react-switch";


const modalDimension = {
    width: 397,
    height: 550
}

const demandOptions = ['All', 'Low', 'High'];
const DemandDropdown = ({ value, setValue }) => {
    return (
        <select value={value} onChange={e => setValue(e.target.value)}>
            {demandOptions.map(opt => <option value={opt} > {opt}</option>)
            }
        </select >
    )
}
const velocityOptions = ['C', 'D', 'AB', 'A', 'B'];
const VelocityDropdown = ({ value, setValue }) => {
    return (
        <select value={value} onChange={e => setValue(e.target.value)}>
            {velocityOptions.map(opt => <option value={opt} >{opt}</option>)}
        </select>
    )
}

const Toggle = ({ label, checked, setChecked }) => {
    return (
        <div className='toggle'>
            <div className='toggle-btn'>
                <Switch
                    handleDiameter={10}
                    height={20}
                    width={40}
                    onChange={(chk) => setChecked(chk)}
                    checked={checked}
                    onColor={"#ffcc00"}
                />
            </div>
            <div className='toggle-label'>
                <span>
                    {
                        label
                    }
                </span>
            </div>

        </div>
    )
}

const WorkSpaceFilterModal = ({ show, closeModal, handelFilterSubmit }) => {
    const [formState, setFormState] = useState({
        demand: demandOptions[0],
        velocity: velocityOptions[0],
        dayLastPick: 0,
        expiry: 0,
        utilization: false,
        costHeatMap: false,
    })

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
                            label={"Demand"}
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
                                        type='number'
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
                        <Toggle
                            label={"Utilization"}
                            checked={formState.utilization}
                            setChecked={(val) => {
                                handelFormStateChange('utilization', val)
                            }} />
                        <Toggle label={"Cost heat-map"}
                            checked={formState.costHeatMap}
                            setChecked={(val) => {
                                handelFormStateChange('costHeatMap', val)
                            }} />
                        <div className='workspace-filter-form__action-container'>
                            <Button
                                variant={'secondary'}
                                onClick={() => handelFilterSubmit(formState)}
                            >
                                Apply
                            </Button>
                            <Button onClick={() => closeModal()}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </ModalBody>
            </ModalContainer>
        )
    )
}

export default WorkSpaceFilterModal
