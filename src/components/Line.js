const Line = ({
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
                args={[dim.width, dim.height]}
            />
            <meshStandardMaterial
                color={color}
            />
        </mesh>
    )
}

export default Line;