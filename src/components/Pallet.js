import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import boxSignsTexture from '../asset/texture/box_texture_3.jpg';
import boxSignsTexture1 from '../asset/texture/box_texture.jpg';
import boxSignsTexture2 from '../asset/texture/box_texture_4.JPG';
import MessageContext from '../context/MessageContext'
import { useContext } from 'react'
import { default as SampleLabel } from '../data/PalletLabel'
import getRandomIntInclusive from '../functions/common/getRandomIntInclusive'

const palletTextureObj = {
    1: boxSignsTexture,
    2: boxSignsTexture1,
    3: boxSignsTexture2
};

const getPalletTexture = () => {
    const randomTexture = palletTextureObj[getRandomIntInclusive(1, 3)];
    return randomTexture;
};

const Pallet = ({
    pos,
    color = '#b59054',
    ...props
}) => {

    const { setMsg } = useContext(MessageContext);

    const texture_1 =
        useLoader(THREE.TextureLoader, getPalletTexture());

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
            scale={1.5}
            position={pos}
            rotation={[Math.PI / 2, 0, 0]}
            onClick={handelPalletClick}
        >
            <boxGeometry
                args={[5, 3, 3.5]}
            />
            <meshStandardMaterial
                map={texture_1}
                attach="material"
            />
        </mesh>
    )
}

export default Pallet;