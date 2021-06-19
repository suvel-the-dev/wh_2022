import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import OTHERBoxTexture from '../asset/texture/box_texture_3.jpg';
import BEVERAGEBoxTexture from '../asset/texture/BEVERAGE.jpg';
import ACCESSORYBoxTexture from '../asset/texture/ACCESSORY.webp';
import APPLIANCEBoxTexture from '../asset/texture/APPLIANCE.JPG';
import {
    palletObject,
    scale
} from '../constant';
import MessageContext from '../context/MessageContext'
import { useContext, useEffect, memo } from 'react'
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
    color = 'red',
    swap = false,
    prePos,
    skuType = 'OTHER',
    ...props
}) => {

    const { position, palletColor } = useSpring({
        position: swap ? prePos : pos,
        palletColor: swap ? 'red' : 'yellow',
        config: config.molasses
    })

    const texture =
        useLoader(THREE.TextureLoader, palletSKUnTextureJoin[skuType]);

    const { setMsg } = useContext(MessageContext);

    const handelPalletClick = (event) => {
        setMsg({
            show: true,
            content: <PalletDetail />
        })
        event.stopPropagation();
    }

    return (
        <a.mesh
            {...props}
            scale={scale}
            position={position}
            onClick={handelPalletClick}
        >
            <boxGeometry
                args={[
                    palletDimension.width,
                    palletDimension.height,
                    palletDimension.depth
                ]}
            />
            {
                swap ? (
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