import { Suspense, useState, useMemo } from 'react';
import { OrbitControls } from "@react-three/drei";
import ForwardCanvas from '../ForwardCanvas'
import MessageModal from '../MessageModal'
import { MessageProvider } from '../../context/MessageContext';
import rackList from '../../data/rackList'
import palletList from '../../data/palletList'
import optimizedPallet from '../../data/optimizedPallet'
import {
    renderRack,
    renderPallet
} from '../../functions'
import Switch from "react-switch";
import OptimizeModal from '../OptimizeModal'
import Environment from '../Environment'
import './style.css';

const Warehouse3d = ({ warehouse, controls, setControls }) => {

    const [checked, setChecked] = useState(false);
    const [swap, setSwap] = useState(false);
    const [showOpzToggle, setShowOpzToggle] = useState(false);

    const { showOpzModal } = controls;

    const handelOpzAction = (action) => {
        if (action == 'optimize') setShowOpzToggle(true);
        setControls({ ...controls, showOpzModal: false });

    }

    const pallets = useMemo(() => {
        let pallets = undefined;
        if (checked) pallets = [...optimizedPallet];
        else pallets = [...palletList];
        let filteredPalets = []
        if (controls?.highDemand && controls?.lowDemand) filteredPalets = pallets;
        else if (controls?.highDemand) filteredPalets = pallets.filter(pallet => pallet.demand == 1);
        else if (controls?.lowDemand) filteredPalets = pallets.filter(pallet => pallet.demand == 0);
        return renderPallet(filteredPalets, rackList, swap);
    }, [controls, checked, swap])

    const racks = useMemo(() => {
        return renderRack(rackList, controls?.showLabourCost);
    }, [controls])

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
                    <div className={`cost-color-container-${controls?.showLabourCost}`}>
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
                            <OrbitControls rotateSpeed={0.2} dampingFactor={0.5} />
                            <ambientLight intensity={0.8} color={'#fffff'} />
                            {racks}
                            {pallets}
                        </ForwardCanvas>
                        <MessageModal />
                        <OptimizeModal show={showOpzModal} handelAction={handelOpzAction} />
                    </MessageProvider>
                </Suspense>
            </div>
        </>
    );
}

export default Warehouse3d;