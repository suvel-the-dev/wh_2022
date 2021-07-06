import React from 'react'
import './style.css'
const Spinner = () => {
    return (
        <div className='spinner__bg'>
            <div class="spinner">
            </div>
            <strong>Warehouse is being rendered, please wait...</strong>
        </div>
    )
}

export default Spinner
