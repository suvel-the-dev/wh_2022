import React, { useState } from 'react';
import './style.css';
import LocationOption from '../LocationOption'

const options = [
    { label: "Warehouse-1", id: 'wh_1' },
    { label: "Warehouse-2", id: 'wh_2' },
    { label: "Warehouse-3", id: 'wh_3' },
    { label: "Warehouse-4", id: 'wh_4' },
    { label: "Warehouse-5", id: 'wh_5' },
    { label: "Warehouse-6", id: 'wh_6' },
    { label: "Warehouse-7", id: 'wh_7' },
    { label: "Warehouse-8", id: 'wh_8' },
    { label: "Warehouse-9", id: 'wh_9' },
    { label: "Warehouse-10", id: 'wh_10' },
]

const LocationList = () => {
    const [optList] = useState(options);
    const [selectedOpt, setSelectedOp] = useState(options);

    const handelOptionSelect = (locObj) => {
        setSelectedOp(locObj.id);
    }

    return (
        <div className='loclist-container'>
            {
                optList.map((opt, index) => {
                    return (
                        <LocationOption
                            key={index}
                            locObj={opt}
                            selected={selectedOpt == opt.id}
                            handelOptionSelect={handelOptionSelect}
                        />
                    )
                })
            }
        </div>
    )
}

export default LocationList
