import './style.css';
import { useState } from 'react'
import logo from '../../asset/band/logo.png';
import SearchBar from '../SearchBar';
import LocationList from '../LocationList';
import Warehouse3d from '../Warehouse3d'
import WareHouse3dControl from '../WareHouse3dControl'

const AppLayout = () => {

    const [controls, setControls] = useState({
        highDemand: true,
        lowDemand: true,
        showLabourCost: false
    });

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
                <LocationList />
            </div>
            <div class="location3d">
                <Warehouse3d controls={controls} />
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