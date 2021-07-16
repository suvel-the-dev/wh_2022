import React, { useMemo, useContext, memo } from 'react'
import {
    filterPallets,
    renderPallets,
    calculateUtilization,
    groupPalletByCost
} from '../functions'
import ControlContext from '../context/ControlContext'
import RackUtilizationZone from './RackUtilizationZone'
import SKUColorMapContext from '../context/SKUColorMapContext'
import getABCDColorMap from '../data/getABCDColorMap'

const Pallet = React.lazy(() => import('./Pallet'));
const Rack = React.lazy(() => import('./Rack'))

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
                    key={detail.LOC}
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
    }, [control, palletList, skuDescColorMap, storageList]);

    const utilizationPercentage = useMemo(() => {
        return calculateUtilization(palletList)
    }, [palletList])

    const utilizationSpacePercentage = useMemo(() => {
        const palletByCost = groupPalletByCost(palletList)
        const utilizationByCost = {
            vCheap: calculateUtilization(palletByCost.vCheap),
            cheap: calculateUtilization(palletByCost.cheap),
            costly: calculateUtilization(palletByCost.costly),
            vCostly: calculateUtilization(palletByCost.vCostly)
        }
        return utilizationByCost
    }, [palletList])

    return (
        <>
            {
                rackList?.map((rackObj, index) => {
                    return (
                        <Rack key={`${rackObj.LOC}_${index}`} rackObj={rackObj} />
                    )
                })
            }
            {
                pallets
            }
            {
                (control?.utilization && control?.utilizationType === 'UBA') &&
                <RackUtilizationZone
                    pos={[265, 1, 200]}
                    percentage={utilizationPercentage}
                />
            }
            {
                (control?.utilization && control?.utilizationType === 'UBLC') &&
                <>
                    <RackUtilizationZone
                        color='blue'
                        dim={{ width: 9, depth: 250 }}
                        pos={[265, 1, 330]}
                        percentage={utilizationSpacePercentage.vCostly}
                    />
                    <RackUtilizationZone
                        dim={{ width: 9, depth: 150 }}
                        pos={[265, 1, 30]}
                        percentage={utilizationSpacePercentage.costly}
                    />
                </>
            }
        </>
    )
}

export default memo(RackAisle)
