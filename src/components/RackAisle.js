import React, { useMemo, useContext } from 'react'
import Rack from './Rack'
import Pallet from './Pallet'
import { filterPallets, renderPallets, calculateUtilization } from '../functions'
import ControlContext from '../context/ControlContext'
import RackUtilizationZone from './RackUtilizationZone'
import SKUColorMapContext from '../context/SKUColorMapContext'
import getABCDColorMap from '../data/getABCDColorMap'

const RackAisle = ({
    rackList = [],
    palletList = [],
    storageList
}) => {

    const { control } = useContext(ControlContext);
    const { skuDescColorMap } = useContext(SKUColorMapContext);

    const pallets = useMemo(() => {
        const filteredPallets = filterPallets(palletList, control);
        return renderPallets(filteredPallets, storageList, (pos, detail, prevPos, swap) => {
            const { SKU_TYPE, SKU_DESC, ABC } = detail;
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
                <Pallet
                    swap={control?.swap && swap}
                    color={getColor()}
                    changeColor={showColor}
                    pos={pos}
                    prePos={prevPos}
                    detail={detail}
                    skuType={textureType}
                />
            )
        });
    }, [control, palletList, rackList]);

    const utilizationPercentage = useMemo(() => {
        return calculateUtilization(palletList)
    }, [palletList])


    return (
        <>
            {
                rackList?.map(rackObj => {
                    return (
                        <Rack rackObj={rackObj} />
                    )
                })
            }
            {
                pallets
            }
            {
                (control?.utilization) &&
                <RackUtilizationZone
                    pos={[265, 1, 160]}
                    percentage={utilizationPercentage}
                />
            }
        </>
    )
}

export default RackAisle
