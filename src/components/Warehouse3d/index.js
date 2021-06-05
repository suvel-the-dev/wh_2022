import { Suspense, useState, useMemo } from 'react';
import { OrbitControls } from "@react-three/drei";
import Floor from '../Floor'
import ForwardCanvas from '../ForwardCanvas'
import MessageModal from '../MessageModal'
import UnLoadingFloor from '../UnLoadingFloor'
import { MessageProvider } from '../../context/MessageContext';
import rackList from '../../data/rackList'
import palletList from '../../data/palletList'
import optimizedPallet from '../../data/optimizedPallet'
import {
    renderRack,
    renderPallet
} from '../../functions'
import Truck from '../Truck'
import Switch from "react-switch";
import './style.css';

const Warehouse3d = ({ warehouse, controls }) => {

    const [checked, setChecked] = useState(false);

    const pallets = useMemo(() => {
        let pallets = undefined;
        if (checked) pallets = [...optimizedPallet];
        else pallets = [...palletList];
        let filteredPalets = []
        if (controls?.highDemand && controls?.lowDemand) filteredPalets = pallets;
        else if (controls?.highDemand) filteredPalets = pallets.filter(pallet => pallet.demand == 1);
        else if (controls?.lowDemand) filteredPalets = pallets.filter(pallet => pallet.demand == 0);
        return renderPallet(filteredPalets, rackList);
    }, [controls, checked])

    const racks = useMemo(() => {
        return renderRack(rackList, controls?.showLabourCost);
    }, [controls])

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className='warehousedetail-container'>
                    <div className='warehouse-title'>{warehouse?.label}</div>
                    <div className='optimized-switch'>
                        <label>View optimized </label>
                        <Switch
                            handleDiameter={10}
                            height={20}
                            width={40}
                            onChange={(chk) => setChecked(chk)}
                            checked={checked}
                            onColor={"#ffcc00"}
                        />
                    </div>
                    {/* <button onClick={() => setPl(optimizedPallet)}>Optimized</button>
                    <button onClick={() => setPl(palletList)}>Non-Optimized</button> */}
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
                            <color attach="background" args={["gray"]} />
                            <OrbitControls />
                            <ambientLight intensity={0.8} color={'#fffff'} />
                            <Floor />
                            {racks}
                            {pallets}
                            <UnLoadingFloor />
                            <Truck pos={[50, 0, -400]} />
                            <Truck pos={[100, 0, -400]} />
                            <Truck pos={[-50, 0, -400]} />
                            <Truck pos={[-100, 0, -400]} />
                        </ForwardCanvas>
                        <MessageModal />
                    </MessageProvider>
                </Suspense>
            </div>
        </>
    );
}

export default Warehouse3d;