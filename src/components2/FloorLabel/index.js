import React from 'react'
import Roboto from '../../asset/fonts/Roboto_Regular.json';
import { Text } from "@react-three/drei";

const textProps = {
    color: 'black',
    font: Roboto,
}
//x, y, z - (textZPos + 7)
const FloorLabel = ({ pos, fontSize = 1.5, children }) => {
    return (
        <mesh
            scale={1.5}
            position={pos}
            rotation={[-1 * Math.PI / 2, 0, (Math.PI / 2) * 2]}
        >
            <Text
                depthTest={false}
                material-toneMapped={false}
                fontSize={fontSize} {...textProps}>
                {children}
            </Text>
        </mesh >
    )
}

export default FloorLabel
