import './style.css';
import { useState } from 'react'
import logo from '../../asset/band/logo.png';
import SearchBar from '../SearchBar';
import LocationList from '../LocationList';
import Warehouse3d from '../Warehouse3d'
import WareHouse3dControl from '../WareHouse3dControl'

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

const initControls = {
    highDemand: true,
    lowDemand: true,
    showLabourCost: false
}

const AppLayout = () => {

    const [controls, setControls] = useState(initControls);

    const [selectedOpt, setSelectedOpt] = useState(options[0]);

    const handelSelectionChange = (opt) => {
        setSelectedOpt(opt)
        setControls(initControls)
    };

    return (
        <div class="grid-container">
            <div class="header">
                <img
                    className='brand-logo'
                    src={logo}
                    width={165}
                    height={38}
                />
            </div>
            <div class="location">
                <SearchBar />
                <LocationList
                    options={options}
                    selectedOpt={selectedOpt}
                    setSelectedOpt={handelSelectionChange}
                />
            </div>
            <div class="location3d">
                <Warehouse3d warehouse={selectedOpt} controls={controls} />
                <div class="loc3dconsole">
                    <WareHouse3dControl
                        controls={controls}
                        setControls={setControls}
                    />
                </div>
            </div>
            <div class="footer">
                <span>dhl@20201</span>
            </div>
        </div>
    )
}

export default AppLayout;