import FloorLabel from './FloorLabel';

const Plane = ({
    pos,
    dim = { width: 5, height: 10 },
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
                args={[250, 15]}
            />
            <meshStandardMaterial
                attach="material"
                color={color}
                reflectivity={1}
            />
        </mesh>
    )
}

const UnLoadingFloor = () => {
    return (
        <>
            <Plane pos={[0, 1, -300]} />
            <FloorLabel pos={[0, 1.05, -300]} fontSize={5}>
                {"Un-Loading Area"}
            </FloorLabel>
        </>
    )
}

export default UnLoadingFloor;