import { useLoader } from '@react-three/fiber'
import grassTexture from '../asset/texture/grass.jpg'
import * as THREE from 'three'
import { scale, groundObject, planeRotation } from '../constant'

const { x, y, z } = groundObject.pos;
const position = [x, y, z];
const { width, height } = groundObject.dim;
const dimension = [width, height];

const Ground = ({ ...props }) => {
    const texture =
        useLoader(THREE.TextureLoader, grassTexture);

    if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(5, 5);
    }

    return (
        <mesh
            {...props}
            scale={scale}
            position={position}
            rotation={planeRotation}
        >
            <planeGeometry
                args={dimension}
            />
            <meshPhongMaterial
                map={texture}
                attach="material"
            />
        </mesh>
    )
}

export default Ground;