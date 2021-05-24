import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import rackSideTexture from
    '../../asset/texture/steel_texture_blue_3.jpg';

const RackSide = ({
    pos,
    ...props
}) => {
    const texture_1 =
        useLoader(THREE.TextureLoader, rackSideTexture);
    return (
        <mesh
            {...props}
            scale={1.5}
            position={pos}
            rotation={[Math.PI / 2, 0, 0]}
        >
            <boxGeometry
                args={[0.5, 0.5, 4]}
            />
            <meshStandardMaterial
                map={texture_1}
                attach="material"
            />
        </mesh >
    )
}

export default RackSide;