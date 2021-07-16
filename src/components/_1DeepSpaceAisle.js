import React, { useMemo, useContext, memo } from 'react'
import {
    filterPallets,
    renderPallets,
    calculateUtilization,
    groupPalletByCost
} from '../functions'
import ControlContext from '../context/ControlContext'
import SpaceUtilizationZone from './SpaceUtilizationZone'
import SKUColorMapContext from '../context/SKUColorMapContext'
import getABCDColorMap from '../data/getABCDColorMap'

const Pallet = React.lazy(() => import('./Pallet'));
const Spaces = React.lazy(() => import('./Spaces'));

const _1DeepSpaceAisle = ({
    spacesList = [],
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

            const textureType = getTextureType();

            const getColor = () => {
                if (control.displacement)
                    return skuDescColorMap[SKU_DESC]
                else if (control.abcdClassification)
                    return getABCDColorMap[ABC]
            }
            const showColor =
                control.displacement || control.abcdClassification;
            return (

                < Pallet
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
    }, [control, palletList, spacesList]);

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

    return (<>
        {
            spacesList?.map((spaceObj, index) => {
                return (
                    <Spaces key={`${spaceObj.LOC}_${index}`} spaceObj={spaceObj} />
                )
            })
        }
        {
            pallets
        }
        {
            (control?.utilization && control?.utilizationType == 'UBA') &&
            <SpaceUtilizationZone
                pos={[129, 0, 300]}
                percentage={utilizationPercentage}
            />
        }
        {
            (control?.utilization && control?.utilizationType == 'UBLC') &&
            <>
                <SpaceUtilizationZone
                    dim={{ width: 15, depth: 120 }}
                    pos={[129, 0, 50]}
                    percentage={utilizationSpacePercentage.costly}
                />
                <SpaceUtilizationZone
                    color='blue'
                    dim={{ width: 15, depth: 320 }}
                    pos={[129, 0, 380]}
                    percentage={utilizationSpacePercentage.vCostly}
                />
            </>
        }
    </>)
}

export default memo(_1DeepSpaceAisle)