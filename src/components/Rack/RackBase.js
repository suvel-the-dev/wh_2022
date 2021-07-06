import {
    scale,
    rackBaseObject
} from '../../constant';
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import rackBaseTexture from '../../asset/texture/rack_base_2.jpg';
import { useContext } from 'react'
import UtilizationContext from '../../context/UtilizationContext'
import ControlContext from '../../context/ControlContext'
const rackBasePadding = rackBaseObject.padding;

const RackBase = ({
    rackObj: {
        dim,//dimension
        utilization
    },
    color,
    pos,//position,
    ...props
}) => {

    const { utilizationsRanges } = useContext(UtilizationContext)
    const { control } = useContext(ControlContext)

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
                control?.utilization ?
                    (
                        <meshBasicMaterial
                            opacity={0.8}
                            transparent={true}
                            color={getUtilization(utilization)}
                            wireframe={false}
                        />
                    )
                    :
                    (
                        <meshStandardMaterial
                            map={texture}
                            attach="material"
                            reflectivity={1}
                            opacity={control?.componentOpacity}
                            transparent={true}
                        />
                    )
            }
        </mesh >
    )
}

export default RackBase;