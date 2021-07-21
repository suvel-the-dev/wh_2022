import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import rackSideTexture from
    '../../asset/texture/steel_texture_blue_3.jpg';
import {
    scale,
    rackSideObject
} from '../../constant'
import { useContext } from 'react'
import ControlContext from '../../context/ControlContext'

const rackSideDim = rackSideObject.dim;

const RackSide = ({
    pos,//position
    ...props
}) => {
    const { control } = useContext(ControlContext)
    const texture =
        useLoader(THREE.TextureLoader, rackSideTexture);
    return (
        <mesh
            {...props}
            // scale={scale}
            position={pos}
            scale={[(rackSideDim.width) * scale, (rackSideDim.height) * scale, (rackSideDim.depth) * scale]}

        >
            <boxGeometry />
            <meshStandardMaterial
                map={texture}
                attach="material"
                transparent={true}
                opacity={1}
                opacity={control?.componentOpacity}
            />
        </mesh >
    )
}

export default RackSide;