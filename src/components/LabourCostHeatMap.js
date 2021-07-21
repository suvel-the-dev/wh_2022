import React from 'react'
import labourCosts from '../data/labourCosts'
import { scale } from '../constant'

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
            position={pos}
            rotation={[(Math.PI / 2) * -1, 0, 0]}
            scale={[dim.width * scale, dim.depth * scale]}
        >
            <planeGeometry />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.5}
            />
        </mesh>
    )
}