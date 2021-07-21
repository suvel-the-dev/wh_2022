import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import OTHERBoxTexture from '../asset/texture/box_texture_3.jpg';
import BEVERAGEBoxTexture from '../asset/texture/BEVERAGE.png';
import ACCESSORYBoxTexture from '../asset/texture/ACCESSORY.png';
import APPLIANCEBoxTexture from '../asset/texture/APPLIANCE.png';
import {
    palletObject,
    scale
} from '../constant';
import MessageContext from '../context/MessageContext'
import ControlContext from '../context/ControlContext'
import { useContext, memo } from 'react'
import PalletDetail from './PalletDetail'
import { useSpring, config } from '@react-spring/core'
import { a } from '@react-spring/three'

const palletDimension = palletObject.dim;

const palletSKUnTextureJoin = {
    BEVERAGE: BEVERAGEBoxTexture,
    APPLIANCE: APPLIANCEBoxTexture,
    ACCESSORY: ACCESSORYBoxTexture,
    OTHER: OTHERBoxTexture
}


const Pallet = ({
    pos,// position
    color = '#fff',
    swap = false,
    changeColor,
    prePos,
    skuType = 'OTHER',
    detail,
    ...props
}) => {

    const { control } = useContext(ControlContext);

    const { position, palletColor } = useSpring({
        position: swap ? prePos : pos,
        palletColor: swap ? 'red' : color,
        config: config.molasses,
        immediate: !control?.animate
    })

    const texture =
        useLoader(THREE.TextureLoader, palletSKUnTextureJoin[skuType]);

    const { setMsg } = useContext(MessageContext);

    const handelPalletClick = (event) => {
        setMsg({
            show: true,
            content: <PalletDetail {...detail} />
        })
        event.stopPropagation();
    }

    return (
        <a.mesh
            {...props}
            // scale={scale}
            position={position}
            onClick={handelPalletClick}
            scale={[(palletDimension.width) * scale, (palletDimension.height) * scale, (palletDimension.depth) * scale]}
        >
            <boxGeometry
            />
            {
                (swap || changeColor) ? (
                    <a.meshBasicMaterial
                        color={palletColor}
                    />
                ) :
                    (
                        <meshStandardMaterial
                            map={texture}
                            attach="material"
                        />
                    )
            }
        </a.mesh>
    )
};

export default memo(Pallet);