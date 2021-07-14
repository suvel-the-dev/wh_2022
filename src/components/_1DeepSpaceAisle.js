import React, { useMemo, useContext } from 'react'
import { filterPallets, renderPallets, calculateUtilization } from '../functions'
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
                    swap={control?.swap && swap
                    }
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

    return (<>
        {
            spacesList?.map(spaceObj => {
                return (
                    <Spaces spaceObj={spaceObj} />
                )
            })
        }
        {
            pallets
        }
        {
            (control?.utilization) &&
            <SpaceUtilizationZone
                pos={[129, 0, 300]}
                percentage={utilizationPercentage}
            />
        }
    </>)
}

export default _1DeepSpaceAisle