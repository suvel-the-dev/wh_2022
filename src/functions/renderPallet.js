import placePalletOnRack from './placePalletOnRack';
import placePalletOnSpace from './placePalletOnSpace';

const renderPallet = (pallets, rackList) => {
    return pallets.map(pallet => {
        const { rack: rackName, qty } = pallet;
        const rackObj = rackList.find(rack => {
            return rack.name == rackName;
        });
        if (rackObj.type == 'rack')
            return placePalletOnRack(rackObj, qty);
        if (rackObj.type == 'space')
            return placePalletOnSpace(rackObj, qty)
    })
}

export default renderPallet;