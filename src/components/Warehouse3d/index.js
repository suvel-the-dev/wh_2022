import { Suspense, useState, useMemo, useEffect } from 'react';
import { OrbitControls } from "@react-three/drei";
import Floor from '../Floor'
import ForwardCanvas from '../ForwardCanvas'
import MessageModal from '../MessageModal'
import UnLoadingFloor from '../UnLoadingFloor'
import { MessageProvider } from '../../context/MessageContext';
import rackList from '../../data/rackList'
import palletList from '../../data/palletList'
import optimizedPallet from '../../data/optimizedPallet'
import * as THREE from 'three'
import img from '../../asset/3d/car/CesiumMilkTruck.jpg'
import girl from '../../asset/3d/car/CesiumMilkTruck.gltf'
import {
    renderRack,
    renderPallet
} from '../../functions'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './style.css';

const Warehouse3d = ({ warehouse, controls }) => {

    const [pl, setPl] = useState(palletList);

    const pallets = useMemo(() => {
        let pallets = [...pl];
        let filteredPalets = []
        if (controls?.highDemand && controls?.lowDemand) filteredPalets = pallets;
        else if (controls?.highDemand) filteredPalets = pallets.filter(pallet => pallet.demand == 1);
        else if (controls?.lowDemand) filteredPalets = pallets.filter(pallet => pallet.demand == 0);
        return renderPallet(filteredPalets, rackList);
    }, [controls, pl])

    const racks = useMemo(() => {
        return renderRack(rackList, controls?.showLabourCost);
    }, [controls])

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className='warehousedetail-container'>
                    <div>{warehouse?.label}</div>
                    <button onClick={() => setPl(optimizedPallet)}>Optimized</button>
                    <button onClick={() => setPl(palletList)}>Non-Optimized</button>
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

const Truck = ({ pos }) => {
    const { nodes, materials } = useLoader(GLTFLoader, girl);

    useEffect(() => {
        console.log({ nodes, materials });
    }, [nodes, materials])

    return (
        <group scale={15} position={pos} rotation={[(Math.PI / 2), 0, (Math.PI / 2) * -1]} >
            <mesh position={[0, 0, 0]} geometry={nodes.Cesium_Milk_Truck_2.geometry} material={materials.glass} />
            <mesh position={[0, 0, 0]} geometry={nodes.Cesium_Milk_Truck_1.geometry} material={materials.truck} />
            <mesh position={[1.5, 0, -0.5]} geometry={nodes.Wheels.geometry} material={materials.wheels} />
            <mesh position={[-1.4, 0, -0.5]} geometry={nodes.Wheels.geometry} material={materials.wheels} />
        </group>
    );
}