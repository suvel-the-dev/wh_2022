import React from 'react'
import { scale, palletObject } from '../../constant'

const palletDimension = palletObject.dim;

const spaceDepth = 8;
const nextSpaceZOffset = (spaceDepth) * scale;

const palletColor = '#444444';

const getPalletPositions = (pos) => {
    let positions = [];
    let newPosition = pos
    for (let num = 1; num <= 106; num = num + 2) {
        positions.push([newPosition.x, newPosition.y + (3.5 / 2 + 1) * 1.5, newPosition.z])
        newPosition = { ...newPosition, z: newPosition.z + nextSpaceZOffset };
    }

    return positions;
}

const _1DeepSpacePlaceholder = ({
    pos
}) => {

    return (<>
        {
            getPalletPositions(pos)?.map((position, key) => {
                return (
                    <PlaceholderPallet key={key} position={position} />
                )
            })
        }
    </>)
}

export default _1DeepSpacePlaceholder

const PlaceholderPallet = ({ position }) => {
    return (
        <mesh
            scale={scale}
            position={position}
        >
            <boxGeometry
                args={[
                    palletDimension.width,
                    palletDimension.height,
                    palletDimension.depth
                ]}
            />
            <meshBasicMaterial
                color={palletColor}
                transparent
                opacity={0.3}
                wireframe
            />
        </mesh>
    )
}