import './style.css';
import { useState, useContext } from 'react'
import logo from '../../asset/band/logo.png';
import SearchBar from '../SearchBar';
import LocationList from '../LocationList';
import Warehouse3d from '../Warehouse3d'
import WareHouse3dControl from '../WareHouse3dControl'
import { UtilizationProvider } from '../../context/UtilizationContext';
import ControlContext from '../../context/ControlContext';

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

const initControl = {
    demand: 'All',
    velocity: 'A',
    dayLastPick: 0,
    expiry: 0,
    utilization: false,
    costHeatMap: false,
    showOpzModal: false,
    showFilterModal: false,
}

const AppLayout = () => {
    const [selectedOpt, setSelectedOpt] = useState(options[0]);
    const { setControl } = useContext(ControlContext);

    const handelSelectionChange = (opt) => {
        setSelectedOpt(opt)
        setControl(initControl)
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
            <UtilizationProvider>
                <div class="location3d">
                    <Warehouse3d
                        warehouse={selectedOpt}
                    />
                    <div class="loc3dconsole">
                        <WareHouse3dControl
                        />
                    </div>
                </div>
            </UtilizationProvider>
            <div class="footer">
                <span>dhl@20201</span>
            </div>
        </div>
    )
}

export default AppLayout;