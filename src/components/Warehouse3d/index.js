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

const Warehouse3d = () => {

    const [filter, setFilter] = useState({
        demand: false,
        labourCost: false
    });

    const pallets = useMemo(() => {
        let pallets = [...palletList];
        if (filter.demand) pallets = pallets.filter(pallet => pallet.demand == 1);
        return renderPallet(pallets, rackList);
    }, [filter])

    const racks = useMemo(() => {
        return renderRack(rackList, filter.labourCost);
    }, [filter])

    return (
        <>
            <div className="App">
                <Suspense fallback={null}>
                    <div>
                        <button
                            className={`highlight-${filter.demand}`}
                            onClick={() => setFilter({ ...filter, demand: !filter.demand })}
                        >Show "on demand" Pallets </button>
                        <button
                            className={`highlight-${filter.labourCost}`}
                            onClick={() => setFilter({ ...filter, labourCost: !filter.labourCost })}
                        >Show "labour cost" Pallets </button>
                    </div>
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
            <div className={`cost-color-container-${filter.labourCost}`}>
                <label>Low</label>
                <div className={'cost-color low-cost'}></div>
                <label>Medium</label>
                <div className={'cost-color med-cost'}></div>
                <label>High</label>
                <div className={'cost-color hig-cost'}></div>
            </div>
        </>
    );
}

export default Warehouse3d;