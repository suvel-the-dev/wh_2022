import React from 'react'
import { scale, rackBaseObject, rackSideObject } from '../../constant'
import { getRackCornerCoordinateToPlaceBox } from '../../functions'
const rackBasePadding = rackBaseObject.padding;
const rackSideDim = rackSideObject.dim

const dim = {
    "width": 7,
    "height": 0.2,
    "depth": 7
}

const rackDepth = 5;
const rackHeight = 0.2;
const rackPadding = 2;

const rackSideHeight = 6;

const nextRackZOffset =
    (rackDepth + rackPadding) * scale;

const nxtRackYOffSet =
    (rackHeight + rackSideHeight) * scale;

const rackLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

const rackColor = '#444444';
const rackOpacity = 0.3;

const getRackPositions = (pos) => {
    let positions = [];
    let newPosition = pos;
    for (let num = 1; num <= 54; num = num + 2) {
        for (let part = 1; part <= 2; part++) {
            rackLabels.forEach(rackLabel => {
                positions.push([newPosition.x, newPosition.y, newPosition.z])
                newPosition = {
                    ...newPosition,
                    y: newPosition.y + nxtRackYOffSet,
                };
            })
            newPosition = {
                ...newPosition,
                y: pos.y,
                z: newPosition.z + nextRackZOffset
            };
        }
    }

    return positions;
}


const RackPlaceholder = ({ pos }) => {
    return (
        getRackPositions(pos).map((position, key) => {
            return (
                <React.Fragment key={key}>
                    <RackBasePlaceholder pos={position} />
                    <RackSidesPlaceholder pos={position} />
                </React.Fragment>
            )
        })
    )
}

export default RackPlaceholder


const RackBasePlaceholder = ({ pos }) => {
    return (
        <mesh
            scale={scale}
            position={pos}
        >
            <boxGeometry args={[
                dim.width + rackBasePadding,
                dim.height,
                dim.depth + rackBasePadding,
            ]} />
            <meshBasicMaterial
                opacity={rackOpacity}
                transparent={true}
                color={rackColor}
                wireframe
                wireframeLinewidth={1}
            />
        </mesh >
    )
}

const RackSidesPlaceholder = ({
    rackObj,
    pos//position
}) => {

    const rackWithSideObj = {
        dim: {
            height: dim.height + rackSideDim.height,
            width: dim.width + rackBasePadding,
            depth: dim.depth + rackBasePadding,
        },
        position: { x: pos[0], y: pos[1], z: pos[2] }
    };

    const coordinates =
        getRackCornerCoordinateToPlaceBox(
            rackWithSideObj,
            { dim: rackSideDim },
            scale
        );

    return ([
        <RackSidePlaceholder pos={coordinates[0].cor} />,
        <RackSidePlaceholder pos={coordinates[1].cor} />,
        <RackSidePlaceholder pos={coordinates[2].cor} />,
        <RackSidePlaceholder pos={coordinates[3].cor} />
    ])
};

const RackSidePlaceholder = ({ pos }) => {
    return (
        <mesh
            scale={scale}
            position={pos}
        >
            <boxGeometry
                args={[
                    rackSideDim.width,
                    rackSideDim.height,
                    rackSideDim.depth
                ]}
            />
            <meshBasicMaterial
                opacity={rackOpacity}
                transparent={true}
                color={rackColor}
                wireframe
                wireframeLinewidth={1}
            />
        </mesh >
    )
}