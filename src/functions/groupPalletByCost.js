import Racks from '../data/rackAisleList'
import _1deepSpaceList from '../data/_1deepSpaceList'
import _2deepSpaceList from '../data/_2deepSpaceList'

const spaceComponents = [
    ...Racks,
    ..._1deepSpaceList,
    ..._2deepSpaceList
];

const costRectDepth = 190 * 1.5;
const costRectOffset = costRectDepth / 2

const getCostLimitForPosition =
    (pos) => {
        return {
            l: pos - costRectOffset,
            h: pos + costRectOffset
        }
    }

const locationLimit = {
    V_COSTLY: getCostLimitForPosition(285),
    COSTLY: getCostLimitForPosition(0),
    CHEAP: getCostLimitForPosition(-285),
    V_CHEAP: getCostLimitForPosition(-570)
}


const sortedSpaceComponentByLoc =
    spaceComponents.sort((a, b) => {
        return a.Loc - b.Loc;
    })

const getLocationZCord =
    (loc) => {
        const spaceObj =
            sortedSpaceComponentByLoc.find(
                space => space.LOC === loc
            );

        return spaceObj.position.z;
    }

const groupPalletByCost = (pallets) => {
    let costs = {
        vCostly: [],
        costly: [],
        cheap: [],
        vCheap: []
    };

    const sortedPallets = pallets;
    sortedPallets.forEach(pallet => {
        const zCord = getLocationZCord(pallet.LOC);
        if (
            zCord > locationLimit.V_COSTLY.l
        ) {
            costs.vCostly.push(pallet)
        }
        else if (
            zCord <= locationLimit.COSTLY.h
            &&
            zCord > locationLimit.COSTLY.l
        ) {
            costs.costly.push(pallet)
        }
        else if (
            zCord <= locationLimit.CHEAP.h
            &&
            zCord > locationLimit.CHEAP.l
        ) {
            costs.cheap.push(pallet)
        }
        else if (
            zCord <= locationLimit.V_CHEAP.l
        ) {
            costs.vCheap.push(pallet)
        }

    })

    return costs;
}

export default groupPalletByCost;