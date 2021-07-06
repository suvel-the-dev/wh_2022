import React from 'react'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import stats_1 from '../asset/stats/stats_1.png'
import aisle_marks from '../asset/aisle_marks/1.png'
import { a } from '@react-spring/three'
import { useSpring, config } from '@react-spring/core'

const screenObj = {
    "STATS": stats_1,
    "AISLE": aisle_marks
}

const DisplayScreen = ({ pos, show, screen }) => {
    return (
        <>
            <ScreenFrame pos={pos} />
            <ScreenDisplay show={show} pos={pos} screen={screen} />
        </>
    )
}

export default DisplayScreen

const ScreenFrame = ({
    pos,
    dim = { width: 500, height: 250 },
    color = '#2b2b2b', ...props
}) => {
    return (
        <mesh
            {...props}
            scale={1.5}
            position={pos}
            rotation={[Math.PI, 0, 0]}
        >
            <planeGeometry
                args={[dim.width, dim.height]}
            />
            <meshStandardMaterial
                color={color}
                shadowSide
                roughness={0}
            />
        </mesh>
    )
}

const ScreenDisplay = ({
    pos,
    dim = { width: 480, height: 230 },
    show,
    screen,
    color = '#000000', ...props
}) => {

    const { opacity } = useSpring({
        opacity: show ? 1 : 0,
        delay: 200,
        config: config.molasses
    })

    const texture =
        useLoader(THREE.TextureLoader, screenObj[screen]);

    return (
        <mesh
            {...props}
            scale={1.5}
            position={[pos[0], pos[1], pos[2] - 1]}
            rotation={[Math.PI, 0, Math.PI]}
        >
            <planeGeometry
                args={[dim.width, dim.height]}
            />
            {
                show ?
                    (
                        < a.meshStandardMaterial
                            opacity={opacity}
                            map={texture}
                            attach="material"
                            transparent
                        />

                    ) : (
                        <meshBasicMaterial
                            color='#000'
                        />
                    )
            }
        </mesh>
    )
}