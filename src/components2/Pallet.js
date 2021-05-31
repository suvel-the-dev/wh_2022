import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import boxSignsTexture from '../asset/texture/box_texture_3.jpg';
import {
    palletObject,
    scale
} from '../constant';

const palletDimension = palletObject.dim;

const Pallet = ({
    pos,// position
    color = 'red',
    ...props
}) => {
    const texture =
        useLoader(THREE.TextureLoader, boxSignsTexture);
    return (
        <mesh
            {...props}
            scale={scale}
            position={pos}
        >
            <boxGeometry
                args={[
                    palletDimension.width,
                    palletDimension.height,
                    palletDimension.depth
                ]}
            />
            <meshStandardMaterial
                map={texture}
                attach="material"
            />
        </mesh>
    )
};

export default Pallet;