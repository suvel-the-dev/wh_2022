import React from 'react'

const ComponentMat = ({ comObj, color }) => {
    let componentFootPosition = [
        comObj.position.x,
        comObj.position.y,
        comObj.position.z
    ];
    return (
        <mesh
            scale={1.5}
            position={componentFootPosition}
            rotation={[(Math.PI / 2) * -1, 0, 0]}
        >
            <planeGeometry
                args={[comObj.dim.width + 5 * 1.5, comObj.dim.depth + 5 * 1.5]}
            />
            <meshStandardMaterial
                opacity={color ? 1 : 0}
                transparent={true}
                color={color}
            />
        </mesh>
    )
}

export default ComponentMat;