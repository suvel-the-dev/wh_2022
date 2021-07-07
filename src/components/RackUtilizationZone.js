import React, { useContext } from 'react'
import { Text } from "@react-three/drei";
import Roboto from '../asset/fonts/Roboto_Regular.json';
import UtilizationContext from '../context/UtilizationContext'
const textProps = {
    color: 'black',
    font: Roboto,
}

const RackUtilizationZone = ({
    pos,
    dim = { width: 9, depth: 390 },
    percentage,
    color = '#fffd00', ...props
}) => {

    const { utilizationsRanges } = useContext(UtilizationContext)

    const perNum = Number(percentage)

    const utilizationColor = utilizationsRanges.find(r => {
        return r.min <= perNum && r.max > perNum
    })?.color || 'black';


    return (
        <>
            <mesh
                {...props}
                scale={1.5}
                position={pos}
            >
                <boxGeometry
                    args={[
                        dim.width,
                        80,
                        dim.depth
                    ]}
                />
                <meshStandardMaterial
                    color={utilizationColor}
                    transparent
                    opacity={0.5}
                />
            </mesh>
            <UtilizationText pos={[pos[0], 81, pos[2]]}>
                {`${percentage}%`}
            </UtilizationText>
        </>
    )
}

export default RackUtilizationZone;


const UtilizationText = ({ children, pos }) => {
    return (
        <mesh
            scale={1.5}
            position={pos}
            rotation={[-1 * Math.PI / 2, 0, (Math.PI / 2) * 2]}
        >
            <Text
                depthTest={false}
                material-toneMapped={false}
                fontSize={20} {...textProps}>
                {children}
            </Text>
        </mesh >
    )
}
