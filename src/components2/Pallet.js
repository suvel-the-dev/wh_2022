import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import boxSignsTexture from '../asset/texture/box_texture_3.jpg';
import {
    palletObject,
    scale
} from '../constant';
import MessageContext from '../context/MessageContext'
import { useContext } from 'react'
import { default as SampleLabel } from '../data/PalletLabel'

const palletDimension = palletObject.dim;

const Pallet = ({
    pos,// position
    color = 'red',
    ...props
}) => {
    const texture =
        useLoader(THREE.TextureLoader, boxSignsTexture);

    const { setMsg } = useContext(MessageContext);

    const handelPalletClick = (event) => {
        setMsg({
            show: true,
            content: <SampleLabel />
        })
        event.stopPropagation();
    }

    return (
        <mesh
            {...props}
            scale={scale}
            position={pos}
            onClick={handelPalletClick}
        >
            <boxGeometry
                args={[
                    palletDimension.width,
                    palletDimension.height,
                    palletDimension.depth
                ]}
            />
            <meshStandardMaterial
                map={texture}
                attach="material"
            />
        </mesh>
    )
};

export default Pallet;