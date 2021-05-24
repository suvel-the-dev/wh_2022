import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import boxSignsTexture from '../asset/texture/box_texture_3.jpg';
import boxSignsTexture1 from '../asset/texture/box_texture.jpg';
import boxSignsTexture2 from '../asset/texture/box_texture_4.JPG';

const palletTextureObj = {
    1: boxSignsTexture,
    2: boxSignsTexture1,
    3: boxSignsTexture2
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const getPalletTexture = () => {
    const randomTexture = palletTextureObj[getRandomIntInclusive(1, 3)];
    return randomTexture;
};

const Pallet = ({
    pos,
    color = '#b59054',
    ...props
}) => {
    const texture_1 =
        useLoader(THREE.TextureLoader, getPalletTexture())
    return (
        <mesh
            {...props}
            scale={1.5}
            position={pos}
            rotation={[Math.PI / 2, 0, 0]}
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