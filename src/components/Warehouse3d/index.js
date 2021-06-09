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
import {
    renderRack,
    renderPallet
} from '../../functions'
import Truck from '../Truck'
import Switch from "react-switch";
import { useLoader } from '@react-three/fiber'
import floorTexture from '../../asset/texture/floor_texture_2.jpg'
import grassTexture from '../../asset/texture/grass.jpg'
import roadTexture from '../../asset/texture/road.jpg'
import * as THREE from 'three'
import OptimizeModal from '../OptimizeModal'
import './style.css';

const Warehouse3d = ({ warehouse, controls, setControls }) => {

    const [checked, setChecked] = useState(false);
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
                            disabled={!showOpzToggle}
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
                            <color attach="background" args={["white"]} />
                            <OrbitControls />
                            <ambientLight intensity={0.8} color={'#fffff'} />
                            <Floor />
                            {racks}
                            {pallets}
                            <UnLoadingFloor />
                            <Truck pos={[40, 0, -350]} />
                            <Truck pos={[120, 0, -350]} />
                            <Truck pos={[-40, 0, -350]} />
                            <Truck pos={[-120, 0, -350]} />
                            {/* Un-Loading Area */}
                            <Wall pos={[-160, 0, -310]} />
                            <Wall pos={[-80, 0, -310]} />
                            <Wall pos={[0, 0, -310]} />
                            <Wall pos={[80, 0, -310]} />
                            <Wall pos={[160, 0, -310]} />
                            {/* End */}
                            {/* Back Wall */}
                            <Wall dim={{ width: 250, height: 35, depth: 2 }} pos={[0, 0, 60]} />
                            {/* End */}
                            {/* Side Wall */}
                            <Wall dim={{ width: 2, height: 35, depth: 250 }} pos={[250 / 2 * 1.5, 0, -125]} />
                            <Wall dim={{ width: 2, height: 35, depth: 250 }} pos={[-250 / 2 * 1.5, 0, -125]} />
                            {/* End */}
                            {/* ground */}
                            <Ground />
                            {/* End */}
                            {/* ground */}
                            <Road />
                            {/* End */}
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


const Wall = ({ pos, dim = { width: 25, height: 35, depth: 2 }, scale = 1.5, ...props }) => {
    const [x, y, z] = pos;
    const texture_1 =
        useLoader(THREE.TextureLoader, floorTexture);
    return (
        <mesh
            {...props}
            scale={scale}
            position={[x, y + (dim.height / 2) * scale, z]}
        >
            <boxGeometry
                args={[
                    dim.width,
                    dim.height,
                    dim.depth
                ]}
            />
            <meshStandardMaterial
                opacity={0.8}
                transparent={true}
                // color={'gray'}
                map={texture_1}
                attach="material"
            />
        </mesh >
    )
}

const Ground = ({ ...props }) => {
    const texture =
        useLoader(THREE.TextureLoader, grassTexture);

    if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(5, 5);
    }


    useEffect(() => {
        console.log({ texture })
    }, [texture])

    return (
        <mesh
            {...props}
            scale={1.5}
            position={[0, 0, -125]}
            rotation={[(Math.PI / 2) * -1, 0, 0]}
        >
            <planeGeometry
                args={[250 * 1.5, 250]}
            />
            <meshPhongMaterial
                // color={'green'}
                map={texture}
                attach="material"
            />
        </mesh>
    )
}

const Road = ({ ...props }) => {
    const texture =
        useLoader(THREE.TextureLoader, roadTexture);

    if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
        //     // texture.rotation = (10)
    }


    useEffect(() => {
        console.log({ texture })
    }, [texture])

    return (
        <mesh
            {...props}
            scale={1.5}
            position={[0, 0, -350]}
            rotation={[(Math.PI / 2) * -1, 0, 0]}
        >
            <planeGeometry
                args={[250 * 1.5, 50]}
            />
            <meshPhongMaterial
                // color={'green'}
                map={texture}
                attach="material"
            />
        </mesh>
    )
}
