import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import truck from '../asset/3d/car/CesiumMilkTruck.gltf'


const Truck = ({ pos }) => {
    const { nodes, materials } = useLoader(GLTFLoader, truck);

    return (
        <group scale={12} position={pos} rotation={[(Math.PI / 2), 0, (Math.PI / 2) * -1]} >
            <mesh position={[0, 0, 0]} geometry={nodes.Cesium_Milk_Truck_2.geometry} material={materials.glass} />
            <mesh position={[0, 0, 0]} geometry={nodes.Cesium_Milk_Truck_1.geometry} material={materials.truck} />
            <mesh position={[1.5, 0, -0.5]} geometry={nodes.Wheels.geometry} material={materials.wheels} />
            <mesh position={[-1.4, 0, -0.5]} geometry={nodes.Wheels.geometry} material={materials.wheels} />
        </group>
    );
}

export default Truck;