import React from 'react'
import labourCosts from '../data/labourCosts'

const LabourCostHeatMap = ({ show }) => {
    return (
        show ?
            (labourCosts.map(labourCost =>
                <HeatMapRect
                    pos={[0, 1.5, labourCost.z]}
                    color={labourCost.color}
                />
            )

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