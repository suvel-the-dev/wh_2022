import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import OTHERBoxTexture from '../asset/texture/box_texture_3.jpg';
import BEVERAGEBoxTexture from '../asset/texture/BEVERAGE.png';
import ACCESSORYBoxTexture from '../asset/texture/ACCESSORY.png';
import APPLIANCEBoxTexture from '../asset/texture/APPLIANCE.png';
import {
    palletObject,
    scale,
    optimizedPalletColor
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

const getOptimizedTypeColor = (optType) => {
    if (optType === 1) return optimizedPalletColor.REPLACED;
    return optimizedPalletColor.OPTIMIZED
}

const getSwapColor = (isSwapped, control, detail, propColor) => {
    const { OptimizationType } = control.optimizationForm;
    //Optimization: To Be Picked
    if (isSwapped && OptimizationType === 'TBP') return getOptimizedTypeColor(detail?.OPTIMIZED_TYPE);
    //Optimization: Displacement
    if (isSwapped && OptimizationType === 'DIS') return optimizedPalletColor.REPLACED;
    //Optimization: Filled Pallets
    if (isSwapped && OptimizationType === 'FIL') return propColor;

    return propColor
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

    const { position, palletColor, palletOpacity } = useSpring({
        position: swap ? prePos : pos,
        palletColor: getSwapColor(swap, control, detail, color),
        palletOpacity: swap && control.optimizationForm.OptimizationType === 'FIL' ? (detail?.PALLET_HIDE ? 1 : 0) : (detail?.PALLET_HIDE ? 0 : 1),
        config: config.molasses,
        immediate: !control?.animate
    })

    // console.log({ position, palletColor, palletOpacity })

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

    // console.log({ swap })

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
                        opacity={palletOpacity}
                        transparent={true}
                    />
                ) :
                    (
                        <a.meshStandardMaterial
                            map={texture}
                            attach="material"
                        />
                    )
            }
        </a.mesh>
    )
};

export default memo(Pallet);