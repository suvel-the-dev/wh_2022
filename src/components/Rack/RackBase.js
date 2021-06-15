import {
    scale,
    rackBaseObject
} from '../../constant';
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import rackBaseTexture from '../../asset/texture/rack_base_2.jpg';
import { useContext } from 'react'
import UtilizationContext from '../../context/UtilizationContext'
const rackBasePadding = rackBaseObject.padding;

const getUtilization = (percent) => {
    if (!percent) return 'yellow'
    if (percent >= 100) return 'red'
    if (percent < 100 && percent >= 50) return 'orange'
    if (percent < 50 && percent >= 0) return 'green'
}

const RackBase = ({
    rackObj: {
        dim,//dimension
        utilization
    },
    pos,//position,
    color,
    ...props
}) => {

    const { utilizationsRanges } = useContext(UtilizationContext)

    const getUtilization = (percent = 0) => {
        return utilizationsRanges.find(r => {
            return r.min <= percent && r.max > percent
        })?.color || 'black';

    }

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
                            // map={texture}
                            // attach="material"
                            // reflectivity={1}
                            transparent={true}
                            opacity={1}
                            color={getUtilization(utilization)}
                        />
                    )
            }
        </mesh >
    )
}

export default RackBase;