import React, { useMemo, useContext } from 'react'
import Spaces from './Spaces'
import Pallet from './Pallet'
import ControlContext from '../context/ControlContext'
import { renderPallets, filterPallets, calculateUtilization } from '../functions'
import SpaceUtilizationZone from './SpaceUtilizationZone'
import SKUColorMapContext from '../context/SKUColorMapContext'
import getABCDColorMap from '../data/getABCDColorMap'


const _2DeepSpaceAisle = ({
    spacesList = [],
    palletList = [],
    storageList
}) => {
    const { control } = useContext(ControlContext);
    const { skuDescColorMap } = useContext(SKUColorMapContext);

    const pallets = useMemo(() => {
        const filteredPallets = filterPallets(palletList, control);
        return renderPallets(filteredPallets, storageList, (pos, detail, prevPos, swap) => {
            const { ACTUAL_PALLETS = 0, SKU_TYPE = 'OTHER', SKU_DESC,ABC} = detail;
            const leftPosition = [pos[0] - 4, pos[1], pos[2]];
            const rightPosition = [pos[0] + 4, pos[1], pos[2]];
            const preLeftPosition = [prevPos[0] - 4, prevPos[1], prevPos[2]];
            const preRightPosition = [prevPos[0] + 4, prevPos[1], prevPos[2]];

            const getTextureType = () => {
                if (SKU_TYPE && control.showSKUType) return SKU_TYPE
                return 'OTHER';
            }

            const textureType = getTextureType()

            const getColor = () => {
                if (control.displacement)
                    return skuDescColorMap[SKU_DESC]
                else if (control.abcdClassification)
                    return getABCDColorMap[ABC]
            }
            const showColor =
                control.displacement || control.abcdClassification;

            return (
                <>
                    <Pallet
                        swap={control?.swap && swap}
                        displacement={control.displacement}
                        pos={leftPosition}
                        prePos={preLeftPosition}
                        detail={detail}
                        skuType={textureType}
                        color={getColor()}
                        changeColor={showColor}
                    />
                    {ACTUAL_PALLETS > 1 &&
                        <Pallet
                            swap={control?.swap && swap}
                            changeColor={control.displacement}
                            pos={rightPosition}
                            prePos={preRightPosition}
                            detail={detail}
                            skuType={textureType}
                            color={getColor()}
                            changeColor={showColor}
                        />
                    }
                </>
            )
        });
    }, [control, palletList, spacesList]);

    const utilizationPercentage = useMemo(() => {
        return calculateUtilization(palletList)
    }, [palletList])

    return (
        <>
            {
                spacesList?.map((spaceObj, key) => {
                    return (
                        <Spaces key={key} spaceObj={spaceObj} />
                    )
                })
            }
            {
                pallets
            }
            {(control?.utilization) &&
                <SpaceUtilizationZone
                    pos={[61, 1, 300]}
                    percentage={utilizationPercentage}
                />
            }

        </>
    )

}

export default _2DeepSpaceAisle
