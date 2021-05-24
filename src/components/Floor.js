import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import floorTexture from '../asset/texture/floor_texture_2.jpg'

const Floor = (props) => {
    const texture_1 =
        useLoader(THREE.TextureLoader, floorTexture);
    return (
        <mesh
            {...props}
            scale={1.5}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -1, -125]}
        >
            <boxGeometry
                args={[250, 250, 0.5]}
            />
            <meshBasicMaterial
                map={texture_1}
                attach="material"
            />
        </mesh>
    )
}

export default Floor;