import { useLoader } from '@react-three/fiber'
import roadTexture from '../asset/texture/road.jpg'
import * as THREE from 'three'
import { scale, roadObject, planeRotation } from '../constant'

const { x, y, z } = roadObject.pos;
const position = [x, y, z];
const { width, height } = roadObject.dim;
const dimension = [width, height];

const Road = ({ ...props }) => {
    const texture =
        useLoader(THREE.TextureLoader, roadTexture);

    if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
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

export default Road