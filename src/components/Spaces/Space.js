import {
    scale,
    palletObject
} from '../../constant';

const palletDimension = palletObject.dim;

const getUtilization = (percent) => {
    if (!percent) return 'yellow'
    if (percent >= 100) return 'red'
    if (percent < 100 && percent >= 50) return 'orange'
    if (percent < 50 && percent >= 0) return 'green'
}

const Space = ({
    pos,// position
    utilization = 0,
    color,
    ...props
}) => {
    return (
        <mesh
            {...props}
            scale={scale}
            position={pos}
        >
            <boxGeometry
                args={[
                    palletDimension.width,
                    palletDimension.height,
                    palletDimension.depth
                ]}
            />
            <meshStandardMaterial
                // opacity={0.025}
                // transparent={true}
                color={getUtilization(utilization)}
                wireframe={true}
            />
        </mesh>
    )
};

export default Space;