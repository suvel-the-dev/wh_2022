import React from 'react'

const initXCord = 809;
const xCordOffset = 68;

const aisleMarkOpacity = 0.3;

const getXCord = (aisleNum) => {
    return initXCord - (xCordOffset * aisleNum);
}

const AisleMarks = ({ show }) => {
    return (
        show &&
        <>
            <Line pos={[initXCord, 1, 160]} color='#2B81BC' />
            <Line pos={[getXCord(1), 1, 160]} color='#2B81BC' />
            <Line pos={[getXCord(2), 1, 160]} color='#2B81BC' />
            <RackLine pos={[getXCord(3), 1, 160]} color='yellow' />
            <RackLine pos={[getXCord(4), 1, 160]} color='yellow' />
            <Line pos={[getXCord(5), 1, 160]} color='#2B81BC' />
            <Line pos={[getXCord(6), 1, 160]} color='#2B81BC' />
            <Line pos={[getXCord(7), 1, 160]} color='gray' />
            <RackLine pos={[getXCord(8), 1, 160]} color='yellow' />
            <Line pos={[getXCord(9), 1, 300]} color='gray' />
            <Line pos={[getXCord(10), 1, 300]} color='#2B81BC' />
            <Line pos={[getXCord(11), 1, 300]} color='red' />
            <Line pos={[getXCord(12), 1, 300]} color='#2B81BC' />
            <Line pos={[getXCord(13), 1, 300]} color='red' />
            <Line pos={[getXCord(14), 1, 300]} color='red' />
            <Line pos={[getXCord(15), 1, 300]} color='#2B81BC' />
            <Line pos={[getXCord(16), 1, 300]} color='#2B81BC' />
            <Line pos={[getXCord(17), 1, 300]} color='red' />
            <Line pos={[getXCord(18), 1, 300]} color='red' />
            <Line pos={[getXCord(19), 1, 300]} color='#2B81BC' />
            <Line pos={[getXCord(20), 1, 300]} color='#2B81BC' />
            <Line pos={[getXCord(21), 1, 300]} color='#2B81BC' />
            <Line pos={[getXCord(22), 1, 300]} color='#2B81BC' />
            <DoubleLine pos={[getXCord(9), 1, -350]} />
            <DoubleLine pos={[getXCord(11), 1, -350]} />
            <DoubleLine pos={[getXCord(13), 1, -350]} color='green' />
            <DoubleLine pos={[getXCord(15), 1, -350]} color='red' />
            <DoubleLine pos={[getXCord(17), 1, -350]} color='green' />
            <DoubleLine pos={[getXCord(19), 1, -350]} color='red' />
            <DoubleLine pos={[getXCord(21), 1, -350]} color='gray' />
        </>
    )
}

export default AisleMarks


const Line = ({
    pos,
    dim = { width: 15, depth: 465 },
    color = '#fffd00', ...props
}) => {
    return (
        <mesh
            {...props}
            scale={1.5}
            position={pos}
            rotation={[(Math.PI / 2) * -1, 0, 0]}
        >
            <planeGeometry
                args={[dim.width, dim.depth]}
            />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={aisleMarkOpacity}
            />
        </mesh>
    )
}

const RackLine = ({
    pos,
    dim = { width: 9, depth: 465 },
    color = '#fffd00', ...props
}) => {
    return (
        <mesh
            {...props}
            scale={1.5}
            position={pos}
            rotation={[(Math.PI / 2) * -1, 0, 0]}
        >
            <planeGeometry
                args={[dim.width, dim.depth]}
            />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={aisleMarkOpacity}
            />
        </mesh>
    )
}

const DoubleLine = ({
    pos,
    dim = { width: 30, depth: 310 },
    color = '#fffd00', ...props
}) => {
    return (
        <mesh
            {...props}
            scale={1.5}
            position={pos}
            rotation={[(Math.PI / 2) * -1, 0, 0]}
        >
            <planeGeometry
                args={[dim.width, dim.depth]}
            />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={aisleMarkOpacity}
            />
        </mesh>
    )
}

