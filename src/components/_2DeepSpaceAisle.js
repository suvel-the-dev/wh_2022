import React, { useMemo, useContext, memo } from 'react'
import ControlContext from '../context/ControlContext'
import {
    renderPallets,
    filterPallets,
    calculateUtilization,
    groupPalletByCost
} from '../functions'
import SpaceUtilizationZone from './SpaceUtilizationZone'
import SKUColorMapContext from '../context/SKUColorMapContext'
import getABCDColorMap from '../data/getABCDColorMap'

const Pallet = React.lazy(() => import('./Pallet'));
const Spaces = React.lazy(() => import('./Spaces'));

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
            const { ACTUAL_PALLETS = 0, SKU_TYPE = 'OTHER', SKU_DESC, ABC } = detail;
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
                <React.Fragment key={`${leftPosition}_${rightPosition}`}>
                    <Pallet
                        key={`${leftPosition}_${preLeftPosition}`}
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
                            key={`${rightPosition}_${preRightPosition}`}
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
                </React.Fragment>
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

    return (
        <>
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
            {(control?.utilization && control?.utilizationType == 'UBA') &&
                <SpaceUtilizationZone
                    pos={[61, 1, 300]}
                    percentage={utilizationPercentage}
                />
            }
            {
                (control?.utilization && control?.utilizationType == 'UBLC') &&
                <>
                    <SpaceUtilizationZone
                        dim={{ width: 15, depth: 120 }}
                        pos={[61, 1, 50]}
                        percentage={utilizationSpacePercentage.costly}
                    />
                    <SpaceUtilizationZone
                        color='blue'
                        dim={{ width: 15, depth: 320 }}
                        pos={[61, 1, 380]}
                        percentage={utilizationSpacePercentage.vCostly}
                    />
                </>
            }
        </>
    )

}

export default memo(_2DeepSpaceAisle)
