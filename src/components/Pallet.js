import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import boxSignsTexture from '../asset/texture/box_texture_3.jpg';
import {
    palletObject,
    scale
} from '../constant';
import MessageContext from '../context/MessageContext'
import { useContext, useEffect, memo } from 'react'
import { default as SampleLabel } from '../data/PalletLabel'
import { useSpring, config } from '@react-spring/core'
import { a } from '@react-spring/three'

const palletDimension = palletObject.dim;

const Pallet = ({
    pos,// position
    color = 'red',
    swap = false,
    prePos,
    ...props
}) => {

    const { position } = useSpring({
        position: swap ? prePos : pos,
        config: config.molasses
    })

    useEffect(() => {
        console.log({ swap })
    }, [swap])

    useEffect(() => {
        console.log({ position })
    }, [position])

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
            <meshStandardMaterial
                map={texture}
                attach="material"
            />
        </a.mesh>
    )
};

export default memo(Pallet);