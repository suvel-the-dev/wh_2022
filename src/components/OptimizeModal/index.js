import React from 'react'
import Input from '../Input'
import Button from '../Button'
import './style.css'

const modalDimension = {
    width: 397,
    height: 550
}

const OptimizeModal = ({ show = false, handelAction }) => {

    return (
        <>
            {show &&
                <div className={'modal-outer-container'}>
                    <div
                        className={'optimize-modal-inner-container'}
                        style={{
                            width: `${modalDimension.width}px`,
                            height: `${modalDimension.height}px`,
                        }}
                    >
                        <div className='optimize-head'>OPTIMIZE PALLETS</div>
                        <div className='optimize-form-container'>
                            <Input label={"Labour cost per hour"} component={<input type='number' />} />
                            <Input label={"Number of labour"} component={<input type='number' />} />
                            <label className='option-header'>Window Time</label>
                            <Input label={"Start time"} component={<input type='time' />} />
                            <Input label={"End time"} component={<input type='time' />} />
                            <div className='optimize-form-action-container'>
                                <Button
                                    variant={'secondary'}
                                    onClick={() => handelAction("optimize")} >
                                    Optimize
                                </Button>
                                <Button
                                    onClick={() => handelAction("cancel")}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default OptimizeModal
