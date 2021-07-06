import React from 'react'

const LabourCostHeatMap = ({ show }) => {
    return (
        show ?
            (
                <>
                    <HeatMapRect pos={[0, 1.5, 570]} color='#FF0000' />
                    <HeatMapRect pos={[0, 1.5, 285]} color='#FF0000' />
                    <HeatMapRect pos={[0, 1.5, 0]} color='#FF9900' />
                    <HeatMapRect pos={[0, 1.5, -285]} color='#DBFF00' />
                    <HeatMapRect pos={[0, 1.5, -570]} color='#00FFF0' />
                </>
            ) : <></>

    )
}

export default LabourCostHeatMap

const HeatMapRect = ({
    pos,
    dim = { width: 1200, depth: 190 },
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
                opacity={0.5}
            />
        </mesh>
    )
}