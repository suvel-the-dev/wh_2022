import React from 'react'
import Input from '../Input'
import Button from '../Button'
import ModalContainer from '../ModalContainer'
import ModalBody from '../ModalBody'
import './style.css'

const modalDimension = {
    width: 397,
    height: 550
}

const OptimizeModal = ({ show = false, handelAction }) => {

    return (
        <>
            {show &&
                <ModalContainer>
                    <ModalBody dimensionInPixel={{ ...modalDimension }} title={'OPTIMIZE PALLETS'}>
                        <div className='optimize-form__container'>
                            <Input label={"Labour cost per hour"} component={<input type='number' />} />
                            <Input label={"Number of labour"} component={<input type='number' />} />
                            <label className='optimize-form__header'>Window Time</label>
                            <Input label={"Start time"} component={<input type='time' />} />
                            <Input label={"End time"} component={<input type='time' />} />
                            <div className='optimize-form__action-container'>
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
                    </ModalBody>
                </ModalContainer>
            }
        </>
    )
}

export default OptimizeModal
