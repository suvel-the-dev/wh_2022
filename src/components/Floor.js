import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import floorTexture from '../asset/texture/floor_texture_2.jpg'
import { scale } from '../constant'

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
            position={[0, 0, 0]}
            scale={[dim.w * scale, 0.5 * scale, dim.d * scale]}
        >
            <boxGeometry />
            <meshBasicMaterial
                reflectivity={1}
                map={texture}
                attach="material"
            />
        </mesh >
    )
}

export default Floor;