import { scale } from '../constant'
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
            scale={[dim.width * scale, dim.height * scale]}
        >
            <planeGeometry
            />
            <meshStandardMaterial
                color={color}
            />
        </mesh>
    )
}

export default Line;