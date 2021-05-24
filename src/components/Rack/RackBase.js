import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import rackBaseTexture from '../../asset/texture/rack_base_2.jpg';

const RackBase = ({
    pos,
    ...props
}) => {
    const texture_1 =
        useLoader(THREE.TextureLoader, rackBaseTexture)
    return (
        <mesh
            {...props}
            scale={1.5}
            position={pos}
            rotation={[Math.PI / 2, 0, 0]}
        >
            <boxGeometry
                args={[18, 6, 0.2]}
            />
            <meshStandardMaterial
                map={texture_1}
                attach="material"
                reflectivity={1}
            />
        </mesh >
    )
}

export default RackBase;