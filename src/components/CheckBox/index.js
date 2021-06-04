import React from 'react'
import selected_chbox from '../../asset/icon/selected_chbox.png'
import unselected_chbox from '../../asset/icon/unselected_chbox.png'
import './style.css'

const CheckBox = ({
    label,
    selected,
    onSelect
}) => {
    return (
        <div className='checkbox-container'>
            {
                selected == true ?
                    <img src={selected_chbox} width={10} height={10} />
                    :
                    <img src={unselected_chbox} width={10} height={10} />
            }
            <label onClick={onSelect} > {label}</label>
        </div>
    )
}

export default CheckBox
