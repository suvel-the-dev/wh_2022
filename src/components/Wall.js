import { useLoader } from '@react-three/fiber'
import floorTexture from '../asset/texture/floor_texture_2.jpg'
import * as THREE from 'three'
import { scale } from '../constant'

const Wall = ({ pos, dim = { width: 25, height: 35, depth: 2 }, ...props }) => {
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
                map={texture_1}
                attach="material"
            />
        </mesh >
    )
}

export default Wall