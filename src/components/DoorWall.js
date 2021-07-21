import { useLoader } from '@react-three/fiber'
import side_wall from '../asset/texture/floor_texture_4_1.jpg'
import * as THREE from 'three'
import { scale } from '../constant'

const DoorWall = ({ pos, dim = { width: 25, height: 35, depth: 2 }, ...props }) => {
    const [x, y, z] = pos;
    const texture =
        useLoader(THREE.TextureLoader, side_wall);

    if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter
        texture.minFilter = THREE.NearestMipMapLinearFilter
        texture.repeat.set(1, 1)
    }

    return (
        <mesh
            {...props}
            position={[x, y + (dim.height / 2) * scale, z]}
            scale={[
                dim.width * scale,
                dim.height * scale,
                dim.depth * scale
            ]}
        >
            <boxGeometry />
            <meshStandardMaterial
                opacity={1}
                // transparent={true}
                map={texture}
                attach="material"
            />
        </mesh >
    )
}

export default DoorWall