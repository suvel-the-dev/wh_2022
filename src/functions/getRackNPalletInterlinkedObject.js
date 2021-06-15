const rackSideObject = {
    dim: {
        width: 0.5,
        height: 6,
        depth: 0.5
    }
}

const getPalletCountOnDepthAxis = (rackDepth, palletDepth) => {
    return Math.floor(rackDepth / palletDepth);
}

const getPalletCountOnWidthAxis = (rackWidth, palletWidth) => {
    return Math.floor(rackWidth / palletWidth);
}

const palletObj = {
    dim: { width: 5, height: 3.5, depth: 3 },
};

const palletDimension = palletObj.dim;

//get capacity
const getCapacity = (geometryDimension, shelfCount) => {
    const totalCol =
        getPalletCountOnWidthAxis(
            geometryDimension.width,
            palletDimension.width
        );

    const totalRow =
        getPalletCountOnDepthAxis(
            geometryDimension.depth,
            palletDimension.depth
        );

    return totalCol * totalRow * shelfCount;
};
//get rack utilization
const getRackUtilizationInPercent = (capacity, palletCount) => {
    return (palletCount / capacity) * 100
};

const getRackNPalletInterlinkedObject = (rackList, palletList) => {
    return rackList.map(rack => {
        const { name: rackName, dim, shelfCount } = rack;
        const geometryDimension = dim;
        //capacity
        const capacity = getCapacity(geometryDimension, shelfCount);
        //total pallet
        const palletObj = palletList.find(pallet => pallet.rack == rackName);
        const totalPallet = (palletObj && palletObj.qty) || 0;
        //utilization
        const utilization = getRackUtilizationInPercent(capacity, totalPallet);

        return ({
            ...rack,
            palletList: [palletObj],
            capacity,
            totalPallet,
            utilization,
        })
    });
}

export default getRackNPalletInterlinkedObject;