import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import floorTexture from '../asset/texture/floor_texture_2.jpg'

const Floor = ({ dim, ...props }) => {
    const texture =
        useLoader(THREE.TextureLoader, floorTexture);

    if (texture) {
        texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
        texture.magFilter = THREE.NearestFilter
        texture.minFilter = THREE.NearestMipMapLinearFilter
        texture.repeat.set(8, 8);
    }

    return (
        <mesh
            {...props}
            scale={1.5}
            position={[0, 0, 0]}
        >
            <boxGeometry
                args={[dim.w, 0.5, dim.d]}
            />
            <meshBasicMaterial
                reflectivity={1}
                map={texture}
                attach="material"
            />
        </mesh>
    )
}

export default Floor;