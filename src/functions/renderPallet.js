import placePalletOnRack from './placePalletOnRack';
import placePalletOnSpace from './placePalletOnSpace';

const renderPallet = (pallets, rackList, swap) => {
    return pallets.map((pallet) => {
        const { rack: rackName, qty, hasOptimized, preRack } = pallet;
        const rackObj = rackList.find(rack => {
            return rack.name == rackName;
        });
        const optimized = (swap && hasOptimized) ? true : false;
        let preRackObj = undefined;

        if (optimized) {
            preRackObj = rackList.find(rack => {
                return rack.name == preRack;
            });
        }

        if (rackObj.type == 'rack')
            return placePalletOnRack(rackObj, qty, optimized, preRackObj);
        if (rackObj.type == 'space')
            return placePalletOnSpace(rackObj, qty)
    })
}

export default renderPallet;