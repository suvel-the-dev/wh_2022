import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import boxSignsTexture from '../asset/texture/box_texture_3.jpg';

const Pallet = ({
    pos,
    color = '#b59054',
    ...props
}) => {
    const texture_1 =
        useLoader(THREE.TextureLoader, boxSignsTexture)
    return (
        <mesh
            {...props}
            scale={1.5}
            position={pos}
            rotation={[Math.PI / 2, 0, 0]}
        >
            <boxGeometry
                args={[5, 3, 3.5]}
            />
            <meshStandardMaterial
                map={texture_1}
                attach="material"
            />
        </mesh>
    )
}

export default Pallet;