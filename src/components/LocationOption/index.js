import React from 'react';
import './style.css';
import loc_img from '../../asset/icon/loc_img.png';

const LocationOption = ({ locObj, selected = false, handelOptionSelect }) => {
    const selectClass = selected ? "selected" : "";
    return (
        <div
            className={`unitlocation ${selectClass}`}
            onClick={() => {
                handelOptionSelect(locObj)
            }}
        >
            <img src={loc_img} width={54} height={43} />
            <div className={'locname-container'}>
                <span>
                    {locObj?.label}
                </span>
            </div>
        </div>
    )
}

export default LocationOption
