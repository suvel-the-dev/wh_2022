import { Suspense, useContext } from 'react';
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ForwardCanvas from '../ForwardCanvas'
import MessageModal from '../MessageModal'
import { MessageProvider } from '../../context/MessageContext';
import Environment from '../Environment'
import './style.css';
import WorkSpaceFilterModal from '../WorkSpaceFilterModal'
import ControlContext from '../../context/ControlContext'

import LabourCostHeatMap from '../LabourCostHeatMap'
import LabourCostHeatColorPallet from '../LabourCostHeatColorPallet'
import AisleMarks from '../AisleMarks'

import _2DeepSpaceAisle from '../_2DeepSpaceAisle'
import _2deepSpaceList from '../../data/_2deepSpaceList'
import _2deepPalletList from '../../data/_2deepPalletList'
import optimized2DeepPalletList from '../../data/_2deepPalletList_opt'
import displacementOptimized2DeepPalletList from '../../data/_2deepPalletList_dis_opt_2'

import _1DeepSpaceAisle from '../_1DeepSpaceAisle'
import _1deepSpaceList from '../../data/_1deepSpaceList'
import _1deepPalletList from '../../data/_1deepPalletList'
import optimized1DeepPalletList from '../../data/_1deepPalletList_opt'
import displacementOptimized1DeepPalletList from '../../data/_1deepPalletList_dis_opt_2'


import RackAisle from '../RackAisle'
import rackAisleList from '../../data/rackAisleList'
import rackPalletList from '../../data/rackPalletList'
import optimizedRackPalletList from '../../data/rackPalletList_opt'
import displacementOptimizedRackList from '../../data/rackPalletList_dis_opt_2'

import DisplayScreen from '../DisplayScreen'

import _1DeepSpacePlaceholder from '../Placeholder/_1DeepSpacePlaceholder'
import _2DeepSpacePlaceholder from '../Placeholder/_2DeepSpacePlaceholder'
import RackPlaceholder from '../Placeholder/RackPlaceholder'
import SKUTextureDetail from '../SKUTextureDetail'

import OptimizeModal from '../OptimizeModal'
import ADCDClassificationDetail from '../ADCDClassificationDetail'
import { previewPDF } from '../../functions'

const getPlaceholders = () => {
    return ([
        [809, 741, 673, 469, 401, 333, 197, -7, -211, -279, -483, -551, -619, -687].
            map((xCor, key) => <_1DeepSpacePlaceholder key={key} pos={{ x: xCor, y: 1, z: -36 }} />)
        ,
        [-75, -143, -347, -415].
            map((xCor, key) => <_2DeepSpacePlaceholder key={key} pos={{ x: xCor, y: 1, z: -36 }} />)
        ,

        [605, 537].
            map((xCor, key) => <RackPlaceholder key={key} pos={{ x: xCor, y: 1, z: -76 }} />)
        ,
        [197, 61, -75, -211, -211, -347, -483, -619].
            map((xCor, key) => <_2DeepSpacePlaceholder key={key} pos={{ x: xCor, y: 1, z: -550 }} count={35} />)
    ])
}

const allStorageObjects = [..._1deepSpaceList,
..._2deepSpaceList, ...rackAisleList];

const Warehouse3d = ({ }) => {

    const { control, setControl, orbitRef } = useContext(ControlContext);

    const handelFilterModal = () => {
        setControl(c => ({ ...c, showFilterModal: false }));
    };

    const handelApplyFilter = (obj) => {
        setControl({ ...control, showFilterModal: false, ...obj });
    };

    const getPallets = () => {
        if (control.optimizationForm.OptimizationType === 'TBP')
            return {
                _1: optimized1DeepPalletList,
                _2: optimized2DeepPalletList,
                rack: optimizedRackPalletList
            }
        if (control.optimizationForm.OptimizationType === 'DIS')
            return {
                _1: displacementOptimized1DeepPalletList,
                _2: displacementOptimized2DeepPalletList,
                rack: displacementOptimizedRackList
            }
        else
            return { _1: _1deepPalletList, _2: _2deepPalletList, rack: rackPalletList }
    }

    const handelOpzAction = (type) => {
        if (type === 'EXPORT') {
            const { _1, _2, rack } = getPallets();
            const filteredData_1 = _1.filter(d => d.PRE_LOC);
            const filteredData_2 = _2.filter(d => d.PRE_LOC);
            const filteredDataRack = rack.filter(d => d.PRE_LOC);

            const filterFun = ((d, index) => str.push(`\t ${index + 1}. [${d.PRE_LOC}]--->[${d.LOC}]
            \n\t  SKU:${d.SKU}
            \n\t  SKU_DESC:${d.SKU_DESC}
            \n\t  SKU_TYPE:${d.SKU_TYPE}
            `))

            let str = [];
            str.push(`\n
            ${control.optimizationForm.OptimizationType === 'DIS' ?
                    'Displacement Optimization' : 'To Be Picked optimization'} 
            \n\n`)
            str.push('\nCP25 (1 Deep) Aisle \n')
            filteredData_1.forEach(filterFun)
            str.push('\nCP25 (2Deep) Aisle \n')
            filteredData_2.forEach(filterFun)
            str.push('\nRR24 Aisle \n')
            filteredDataRack.forEach(filterFun)
            // console.log(str.join('\n'))
            const printString = str.join('\n');
            previewPDF(printString)
        }
        setControl({ ...control, showOpzModal: false });
    }

    const showDisplayScreen = control.showStats || control.showAisleMark;
    const getScreenType = () => {
        if (control.showAisleMark) return 'AISLE'
        return 'STATS'
    }

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className='pallets'>
                    <LabourCostHeatColorPallet show={control?.costHeatMap} />
                    <SKUTextureDetail show={control?.showSKUType} />
                    <ADCDClassificationDetail show={control?.abcdClassification} />
                </div>
                <Suspense fallback={<div>Loading...</div>} >
                    <MessageProvider>
                        <ForwardCanvas  >
                            <PerspectiveCamera
                                args={[40, 0.5, 100, 2000]}
                                makeDefault
                                // position={[0, 500, 40]} 
                                position={control.cameraPosition}
                                rotateZ={Math.PI / 2}

                            />
                            <Environment />
                            <OrbitControls
                                ref={orbitRef}
                                rotateSpeed={.07}
                                enableDamping
                                dampingFactor={.05}
                                maxPolarAngle={Math.PI / 2}
                                target={control.orbitTarget}
                            />
                            <_2DeepSpaceAisle
                                spacesList={_2deepSpaceList}
                                palletList={getPallets()['_2']}
                                storageList={allStorageObjects}
                            />
                            <_1DeepSpaceAisle
                                spacesList={_1deepSpaceList}
                                palletList={getPallets()['_1']}
                                storageList={allStorageObjects}
                            />
                            <RackAisle
                                rackList={rackAisleList}
                                palletList={getPallets()['rack']}
                                storageList={allStorageObjects}
                            />
                            <LabourCostHeatMap show={control?.costHeatMap} />
                            <AisleMarks show={control?.showAisleMark} />
                            <DisplayScreen
                                pos={[0, 250, 700]}
                                show={showDisplayScreen}
                                screen={getScreenType()}
                            />
                            {
                                getPlaceholders()
                            }
                            <ambientLight intensity={0.5} color={'#fff'} />
                            <color attach="background" args={["#fff"]} />
                        </ForwardCanvas>
                        <MessageModal />
                        <WorkSpaceFilterModal
                            show={control?.showFilterModal}
                            closeModal={handelFilterModal}
                            handelFilterSubmit={handelApplyFilter}
                        />
                        <OptimizeModal show={control?.showOpzModal} handelAction={handelOpzAction} />
                    </MessageProvider>
                </Suspense>
            </div>
        </>
    );
}

export default Warehouse3d;