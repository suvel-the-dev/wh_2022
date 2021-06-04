import React from 'react';
import './style.css';
import LocationOption from '../LocationOption'

const LocationList = ({ options, selectedOpt, setSelectedOpt }) => {

    const handelOptionSelect = (locObj) => {
        setSelectedOpt(locObj);
    }
    
    return (
        <div className='loclist-container'>
            {
                options?.map((opt, index) => {
                    return (
                        <LocationOption
                            key={index}
                            locObj={opt}
                            selected={selectedOpt.id == opt.id}
                            handelOptionSelect={handelOptionSelect}
                        />
                    )
                })
            }
        </div>
    )
}

export default LocationList
