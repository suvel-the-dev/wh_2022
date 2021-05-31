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
            position={[0, 0, -125]}
        >
            <boxGeometry
                args={[250, 0.5, 250]}
            />
            <meshBasicMaterial
                map={texture_1}
                attach="material"
            />
        </mesh>
    )
}

export default Floor;