import { useLoader } from '@react-three/fiber'
import { scale } from '../constant'
import shutter from '../asset/texture/shutter.jpg'
import * as THREE from 'three'

const DockDoor = ({ pos }) => {

    const texture =
        useLoader(THREE.TextureLoader, shutter);

    return (
        <mesh
            position={[pos[0], pos[1] + (30 * 2 * scale), pos[2]]}
            scale={[80 * scale, 30 * scale, 2 * scale]}
        >
            <boxGeometry />
            <meshStandardMaterial
                map={texture}
                attach="material"
            />
        </mesh>
    )
}

export default DockDoor
