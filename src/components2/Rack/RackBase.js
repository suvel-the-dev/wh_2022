import {
    scale,
    rackBaseObject
} from '../../constant';
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import rackBaseTexture from '../../asset/texture/rack_base_2.jpg';

const rackBasePadding = rackBaseObject.padding;

const RackBase = ({
    rackObj: {
        dim//dimension
    },
    pos,//position,
    color,
    ...props
}) => {
    const texture =
        useLoader(THREE.TextureLoader, rackBaseTexture)
    return (
        <mesh
            {...props}
            scale={scale}
            position={pos}
        >
            <boxGeometry args={[
                dim.width + rackBasePadding,
                dim.height,
                dim.depth + rackBasePadding,
            ]} />
            {
                color ? (
                    <meshBasicMaterial
                        wireframe={true}
                        color={color}
                    />
                ) :
                    (
                        <meshStandardMaterial
                            map={texture}
                            attach="material"
                            reflectivity={1}
                            color={'yellow'}
                        />
                    )
            }
        </mesh >
    )
}

export default RackBase;