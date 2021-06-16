import { Suspense, useState, useMemo, useContext } from 'react';
import { OrbitControls } from "@react-three/drei";
import ForwardCanvas from '../ForwardCanvas'
import MessageModal from '../MessageModal'
import { MessageProvider } from '../../context/MessageContext';
import rackList from '../../data/rackList'
import palletList from '../../data/palletList'
import optimizedPallet from '../../data/optimizedPallet'
import {
    renderRack,
    renderPallet,
    getRackNPalletInterlinkedObject
} from '../../functions'
import Switch from "react-switch";
import OptimizeModal from '../OptimizeModal'
import Environment from '../Environment'
import WorkSpaceFilterModal from '../WorkSpaceFilterModal'
import ControlContext from '../../context/ControlContext'
import './style.css';


const newRackList = getRackNPalletInterlinkedObject(rackList, palletList);
const newPalletList = newRackList.map(rack => rack.palletList[0]);

const Warehouse3d = ({ warehouse }) => {

    const { control, setControl } = useContext(ControlContext)

    const [checked, setChecked] = useState(false);
    const [swap, setSwap] = useState(false);
    const [showOpzToggle, setShowOpzToggle] = useState(false);

    const { showOpzModal } = control;

    const handelOpzAction = (action) => {
        if (action == 'optimize') setShowOpzToggle(true);
        setControl({ ...control, showOpzModal: false });
    }

    const handelFilterModal = () => {
        setControl(c => ({ ...c, showFilterModal: false }))
    }

    const handelApplyFilter = (obj) => {
        setControl({ ...control, showFilterModal: false, ...obj })
    }

    const pallets = useMemo(() => {
        let pallets = undefined;
        if (checked) pallets = [...optimizedPallet];
        else pallets = [...newPalletList];
        let filteredPalets = []
        if (control?.demand == 'All') filteredPalets = pallets;
        else if (control?.demand == 'Yes') filteredPalets = pallets.filter(pallet => pallet.demand == 1);
        else if (control?.demand == 'No') filteredPalets = pallets.filter(pallet => pallet.demand == 0);
        return renderPallet(filteredPalets, newRackList, swap);
    }, [control, checked, swap])

    const racks = useMemo(() => {
        return renderRack(newRackList, control?.costHeatMap);
    }, [control])

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className='warehousedetail-container'>
                    <div className='warehouse-title'>{warehouse?.label}</div>
                    {checked && (
                        <div className='swaper-container'>
                            <button onClick={() => setSwap(v => !v)}>
                                {`Swap to ${swap ? 'optimized arrangement' : 'non-optimized arrangement'} 🔃`}
                            </button>
                        </div>
                    )}
                    <div className='optimized-switch'>
                        <label>View optimized </label>
                        <Switch
                            disabled={!showOpzToggle}
                            handleDiameter={10}
                            height={20}
                            width={40}
                            onChange={(chk) => setChecked(chk)}
                            checked={checked}
                            onColor={"#ffcc00"}
                        />
                    </div>
                    <div className={`cost-color-container-${control?.costHeatMap}`}>
                        <label>Low</label>
                        <div className={'cost-color low-cost'}></div>
                        <label>Medium</label>
                        <div className={'cost-color med-cost'}></div>
                        <label>High</label>
                        <div className={'cost-color hig-cost'}></div>
                    </div>
                </div>
                <Suspense fallback={<div>Loading...</div>} >
                    <MessageProvider>
                        <ForwardCanvas  >
                            <Environment />
                            <color attach="background" args={["white"]} />
                            <OrbitControls
                                rotateSpeed={.07}
                                enableDamping
                                dampingFactor={.05}
                                maxPolarAngle={Math.PI / 2}
                            />
                            <ambientLight intensity={0.8} color={'#fffff'} />
                            {racks}
                            {pallets}
                            {/* <RackFoot /> */}
                        </ForwardCanvas>
                        <MessageModal />
                        <OptimizeModal show={showOpzModal} handelAction={handelOpzAction} />
                        <WorkSpaceFilterModal
                            show={control?.showFilterModal}
                            closeModal={handelFilterModal}
                            handelFilterSubmit={handelApplyFilter}
                        />
                    </MessageProvider>
                </Suspense>
            </div>
        </>
    );
}

export default Warehouse3d;



const RackFoot = ({ rackObj, color }) => {
    debugger
    return (
        <mesh
            scale={1.5}
            position={[0, 2, 0]}
            rotation={[(Math.PI / 2) * -1, 0, 0]}
        >
            <planeGeometry
                args={[20, 20]}
            />
            <meshStandardMaterial
                color={'red'}
            />
        </mesh>
    )
}