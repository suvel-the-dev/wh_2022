import { Suspense, useState, useMemo } from 'react';
import { OrbitControls } from "@react-three/drei";
import Floor from '../Floor'
import ForwardCanvas from '../ForwardCanvas'
import MessageModal from '../MessageModal'
import UnLoadingFloor from '../UnLoadingFloor'
import { MessageProvider } from '../../context/MessageContext';
import rackList from '../../data/rackList3'
import palletList from '../../data/palletList3'
import {
    renderRack,
    renderPallet
} from '../../functions'
import './style.css';

const Warehouse3d = ({ warehouse, controls }) => {

    const pallets = useMemo(() => {
        let pallets = [...palletList];
        let filteredPalets = []
        if (controls?.highDemand && controls?.lowDemand) filteredPalets = pallets;
        else if (controls?.highDemand) filteredPalets = pallets.filter(pallet => pallet.demand == 1);
        else if (controls?.lowDemand) filteredPalets = pallets.filter(pallet => pallet.demand == 0);
        return renderPallet(filteredPalets, rackList);
    }, [controls])

    const racks = useMemo(() => {
        return renderRack(rackList, controls?.showLabourCost);
    }, [controls])

    return (
        <>
            <div>
                <div className='warehousedetail-container'>
                    <div>{warehouse?.label}</div>
                    <div className={`cost-color-container-${controls?.showLabourCost}`}>
                        <label>Low</label>
                        <div className={'cost-color low-cost'}></div>
                        <label>Medium</label>
                        <div className={'cost-color med-cost'}></div>
                        <label>High</label>
                        <div className={'cost-color hig-cost'}></div>
                    </div>
                </div>
                <Suspense fallback={null}>
                    <MessageProvider>
                        <ForwardCanvas  >
                            <color attach="background" args={["gray"]} />
                            <OrbitControls />
                            <ambientLight intensity={0.8} color={'#fffff'} />
                            <Floor />
                            {racks}
                            {pallets}
                            <UnLoadingFloor />
                        </ForwardCanvas>
                        <MessageModal />
                    </MessageProvider>
                </Suspense>
            </div>
        </>
    );
}

export default Warehouse3d;