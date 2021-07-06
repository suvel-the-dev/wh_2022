import React from 'react'
import ACCESSORY_icon from '../../asset/icon/ACCESSORY_icon.png'
import APPLIANCE_icon from '../../asset/icon/APPLIANCE_icon.png'
import BEVERAGE_icon from '../../asset/icon/BEVERAGE_icon.png'
import './style.css'

const SKUTextureDetail = ({ show }) => {
    return (
        show &&
        <div className='skuTextureDetail'>
            <div className='skuTextureDetail__type'>
                <img src={ACCESSORY_icon} />
                <label>ACCESSORY</label>
            </div>
            <div className='skuTextureDetail__type'>
                <img src={APPLIANCE_icon} />
                <label>APPLIANCE</label>
            </div>
            <div className='skuTextureDetail__type'>
                <img src={BEVERAGE_icon} />
                <label>BEVERAGE</label>
            </div>
        </div>
    )
}

export default SKUTextureDetail
