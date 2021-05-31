import {
    scale,
    palletObject
} from '../../constant';

const palletDimension = palletObject.dim;

const Space = ({
    pos,// position
    color = 'red',
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
                opacity={0.2}
                transparent={true}
                color={"blue"}
                wireframe={true}
            />
        </mesh>
    )
};

export default Space;