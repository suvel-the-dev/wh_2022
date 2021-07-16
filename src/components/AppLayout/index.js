import './style.css';
import { useState, useContext } from 'react'
import Warehouse3d from '../Warehouse3d'
import WareHouse3dControl from '../WareHouse3dControl'
import { UtilizationProvider } from '../../context/UtilizationContext';
import ControlContext from '../../context/ControlContext';
import SKUDescriptionColorList from '../SKUDescriptionColorList'
import MiniMap from '../MiniMap'
import FavCam from '../FavCam'

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
    const [selectedOpt] = useState(options[0]);
    const { control } = useContext(ControlContext);

    return (
        <>
            <div class="grid-container">
                <div class="location">
                    <SKUDescriptionColorList show={control?.displacement} />
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
            </div >
            <MiniMap />
            <FavCam />
        </>
    )
}

export default AppLayout;