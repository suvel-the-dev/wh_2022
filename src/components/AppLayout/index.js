import './style.css';
import { useState, useContext } from 'react'
import logo from '../../asset/band/logo.png';
import SearchBar from '../SearchBar';
import LocationList from '../LocationList';
import Warehouse3d from '../Warehouse3d/index2'
import WareHouse3dControl from '../WareHouse3dControl'
import { UtilizationProvider } from '../../context/UtilizationContext';
import ControlContext from '../../context/ControlContext';
import SKUDescriptionColorList from '../SKUDescriptionColorList'
import MiniMap from '../MiniMap'
import OptimizationCam from '../OptimizationCam'

// var sortColors = function (list) {
//     list.sort()
//     for (var c = 0; c < colors.length; c++) {
//         /* Get the hex value without hash symbol. */
//         var hex = colors[c].hex.substring(1);

//         /* Get the RGB values to calculate the Hue. */
//         var r = parseInt(hex.substring(0, 2), 16) / 255;
//         var g = parseInt(hex.substring(2, 4), 16) / 255;
//         var b = parseInt(hex.substring(4, 6), 16) / 255;

//         /* Getting the Max and Min values for Chroma. */
//         var max = Math.max.apply(Math, [r, g, b]);
//         var min = Math.min.apply(Math, [r, g, b]);

//         /* Variables for HSV value of hex color. */
//         var chr = max - min;
//         var hue = 0;
//         var val = max;
//         var sat = 0;

//         if (val > 0) {
//             /* Calculate Saturation only if Value isn't 0. */
//             sat = chr / val;
//             if (sat > 0) {
//                 if (r == max) {
//                     hue = 60 * (((g - min) - (b - min)) / chr);
//                     if (hue < 0) { hue += 360; }
//                 } else if (g == max) {
//                     hue = 120 + 60 * (((b - min) - (r - min)) / chr);
//                 } else if (b == max) {
//                     hue = 240 + 60 * (((r - min) - (g - min)) / chr);
//                 }
//             }
//         }

//         /* Modifies existing objects by adding HSV values. */
//         colors[c].hue = hue;
//         colors[c].sat = sat;
//         colors[c].val = val;
//     }

//     /* Sort by Hue. */
//     return colors.sort(function (a, b) { return a.hue - b.hue; });
// }

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
    const { control, setControl } = useContext(ControlContext);

    const handelSelectionChange = (opt) => {
        setSelectedOpt(opt)
        setControl(initControl)
    };

    return (
        <>
            <div class="grid-container">
                {/* <div class="header">
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
            </div> */}
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
                {/* <div class="footer">
                <span>dhl@20201</span>
            </div> */}
            </div >
            <MiniMap />
            <OptimizationCam />
        </>
    )
}

export default AppLayout;